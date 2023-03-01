import { useAddress, useMetamask } from "@thirdweb-dev/react";
import React, { createContext, useContext, useMemo, useState } from "react";
import { fetchQuote, fetchTokens, getCoinPriceInUSD } from "../lib/1inch";

const SwapContext = createContext();

export const SwapContextProvider = ({ children }) => {
  const [quote, setQuote] = useState(0.0);
  const [conversion, setConversion] = useState({});
  const [tokens, setTokens] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [fromToken, setFromToken] = useState({});
  const [toToken, setToToken] = useState({});

  const address = useAddress();
  const connect = useMetamask();

  useMemo(() => {
    const getTokens = async () => {
      const _tokens = await fetchTokens();

      setFromToken(_tokens?.find((i) => i.symbol === "USDT"));
      setToToken(_tokens?.find((i) => i.symbol === "MATIC"));
      setTokens(_tokens);
    };

    getTokens();
  }, []);

  // useEffect(() => {
  //   if (toToken?.address && fromToken?.address && quantity > 0 && address) {
  //     const getConversion = async () => {
  //       const _prices = await fetchConversion(
  //         fromToken?.address,
  //         toToken?.address,
  //         quantity,
  //         address,
  //         5
  //       );
  //       setConversion(_prices);
  //     };

  //     getConversion();
  //   }
  // }, [fromToken, toToken, quantity, address]);

  const switchTokens = () => {
    const _to = toToken;
    setToToken(fromToken);
    setFromToken(_to);
    setQuantity(0);
  };

  const getQuote = async () => {
    const res = await fetchQuote(
      fromToken?.address,
      toToken?.address,
      quantity
    );

    console.log(res);

    const gwei = res.estimatedGas / 1000000000 || 0;

    const ethPrice = gwei > 0 ? (await getCoinPriceInUSD()) || 1600 : 0;

    const result = (gwei * ethPrice).toFixed(2);

    setQuote(result);
  };

  const test = async () => {
    const res = await getCryptoPrices();
    console.log(res);
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
        test,
      }}
    >
      {children}
    </SwapContext.Provider>
  );
};

export const useSwapContext = () => useContext(SwapContext);
