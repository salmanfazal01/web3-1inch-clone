import { useAddress, useMetamask, useSDK } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useSnackbar } from "notistack";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import LoadingPopup from "../components/Loaders/LoadingPopup";
import {
  checkAllowance,
  checkAndApproveAllowance,
  fetchQuote,
  fetchTokens,
  generateSwap,
  signTransaction,
} from "../lib/1inch";
import { parseQtyToWei, parseWeiToQty } from "../utils/helpers";

const ERROR = (err) => {
  return (
    err?.response?.data?.description ||
    err?.message ||
    "Error, please view console."
  );
};

const SwapContext = createContext();

export const SwapContextProvider = ({ children }) => {
  const [hasAllowance, setHasAllowance] = useState(true);
  const [quote, setQuote] = useState({ to: 0, gas: 0 });
  const [conversion, setConversion] = useState({});
  const [tokens, setTokens] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [fromToken, setFromToken] = useState({});
  const [toToken, setToToken] = useState({});
  const [loadingPopup, setLoadingPopup] = useState(null);
  const [gweiPrice, setGweiPrice] = useState(null);

  const { enqueueSnackbar } = useSnackbar();
  const address = useAddress();
  const connect = useMetamask();
  const sdk = useSDK();

  const qtyInWei = parseQtyToWei(quantity, fromToken?.decimals) || 0;

  const closeLoadingPopup = () => {
    setLoadingPopup(null);
  };

  const getGasPrice = async () => {
    const contract = await sdk.getContract(fromToken?.address);
    const gasCostInGwei = await contract.estimator.currentGasPriceInGwei();

    setGweiPrice(gasCostInGwei);
  };

  useMemo(() => {
    const getTokens = async () => {
      const _tokens = await fetchTokens();

      setFromToken(_tokens?.find((i) => i.symbol === "USDT"));
      setToToken(_tokens?.find((i) => i.symbol === "MATIC"));
      setTokens(_tokens);
    };

    getTokens();
  }, []);

  useEffect(() => {
    setQuote({ to: 0, estimatedGas: 0 });
  }, [quantity, fromToken, toToken]);

  // Check if user has allowance
  useEffect(() => {
    const check = async () => {
      const availableAllowance = await checkAllowance(
        fromToken.address,
        address
      );

      if (availableAllowance == 0 || availableAllowance < qtyInWei) {
        setHasAllowance(false);
      } else {
        setHasAllowance(true);
      }
    };

    if (fromToken?.address && address) {
      check();
    }
  }, [fromToken, address, quantity]);

  // Get gwei price
  useEffect(() => {
    if (fromToken.address) {
      getGasPrice();
    }
  }, [fromToken]);

  const switchTokens = () => {
    const _to = toToken;
    setToToken(fromToken);
    setFromToken(_to);
    setQuantity(0);
  };

  const getQuote = async () => {
    try {
      await getGasPrice();

      const res = await fetchQuote(
        fromToken?.address,
        toToken?.address,
        qtyInWei,
        gweiPrice
      );

      setQuote({
        to: parseWeiToQty(res?.toTokenAmount || 0, toToken?.decimals)
          ?.toFixed(5)
          .replace(/\.?0+$/, ""),
        ...res,
      });
    } catch (error) {
      console.log(error);
      enqueueSnackbar(ERROR(error), {
        variant: "error",
        autoHideDuration: 7000,
      });
    }
  };

  const swapTokens = async () => {
    if (!address) return;

    try {
      setLoadingPopup({
        title: "Sign transaction",
        message: "Please, sign transaction in your wallet",
      });

      const allowance = await checkAndApproveAllowance(
        fromToken.address,
        address,
        qtyInWei
      );

      console.log("1) allowance", allowance);

      if (allowance.signAllowance) {
        await signTransaction({
          ...allowance.data,
        });
      }

      const txData = await generateSwap(
        fromToken?.address,
        toToken?.address,
        quote?.fromTokenAmount,
        address,
        5
      );

      console.log("2) TX received: ", txData);

      const obj = {
        to: String(txData?.to),
        from: String(txData?.from),
        data: String(txData?.data),
        // gasLimit: String(txData?.gas),
        // gasPrice: String(txData?.gasPrice),
        value: String(txData?.value), //quote?.fromTokenAmount,
      };

      console.log("3) Making transaction with data: ", obj);

      // const signature = await sdk.wallet.sign(txData?.data);

      // console.log(signature);

      setLoadingPopup({
        title: "Making transaction",
        message: "Please wait for the transaction to complete.",
      });

      await sdk.wallet.sendRawTransaction({ ...obj }).then((transaction) => {
        console.log("4) transaction made:", transaction);
        setLoadingPopup(null);
      });

      return null;

      // SEND THE TRANSACTION
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      // get a signer wallet!
      const signer = provider.getSigner();

      await signer
        .sendTransaction({
          to: String(txData?.to),
          from: String(txData?.from),
          data: String(txData?.data),
          gasLimit: String(txData?.gas),
          value: String(txData?.value), //quote?.fromTokenAmount,
        })

        .then((transaction) => {
          console.log("4) transaction made:", transaction);
          setLoadingPopup(null);
        });
    } catch (error) {
      console.log("ERROR:", error);
      setLoadingPopup(null);
      enqueueSnackbar(ERROR(error), {
        variant: "error",
        autoHideDuration: 5000,
      });
    }
  };

  return (
    <SwapContext.Provider
      value={{
        address,
        connect,
        tokens,
        fromToken,
        setFromToken,
        toToken,
        setToToken,
        switchTokens,
        conversion,
        quantity,
        setQuantity,
        quote,
        getQuote,
        swapTokens,
        loadingPopup,
        closeLoadingPopup,
        hasAllowance,
      }}
    >
      {children}

      {!!loadingPopup && <LoadingPopup />}
    </SwapContext.Provider>
  );
};

export const useSwapContext = () => useContext(SwapContext);
