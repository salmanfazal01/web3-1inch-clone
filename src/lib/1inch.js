import axios from "axios";
import { ethers } from "ethers";
import { TOP_SYMBOLS } from "../constants";
import { gasLimitToEth } from "../utils/helpers";

// Fetch tokens
export const fetchTokens = async (callback) => {
  return await axios
    .get("https://api.1inch.io/v5.0/1/tokens")
    .then(function (response) {
      // handle success
      const result = Object.values(response?.data?.tokens || [])?.filter((i) =>
        TOP_SYMBOLS.includes(i.symbol)
      );
      callback?.(result);

      return result;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      callback?.([]);
      throw error;
    });
};

export const fetchQuote = async (fromAddress, toAddress, quantity) => {
  const gasPrice = await getGasPrice();
  console.log("GWEI", gasPrice);

  return await axios
    .get(
      `https://api.1inch.io/v5.0/1/quote?fromTokenAddress=${fromAddress}&toTokenAddress=${toAddress}&amount=${quantity}`
    )
    .then(function (response) {
      const result = {
        ...(response?.data || {}),
        requiredEth: gasLimitToEth(response?.data?.estimatedGas || 40, gasPrice)
          ?.toFixed(4)
          .replace(/\.?0+$/, ""),
      };
      console.log("fetchQuote:", result);
      return result;
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      throw error;
    });
};

export const generateSwap = async (
  fromAddress,
  toAddress,
  quantity,
  userAddress,
  slippage
) => {
  return await axios
    .get(
      `https://api.1inch.io/v5.0/1/swap?fromTokenAddress=${fromAddress}&toTokenAddress=${toAddress}&amount=${quantity}&fromAddress=${userAddress}&slippage=${slippage}`
    )
    .then(function (response) {
      console.log("generateSwap", response);
      return response?.data?.tx || {};
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      throw error;
    });
};

export const getCoinPriceInUSD = async (coin = "ethereum", callback) => {
  return await axios
    .get(`https://api.coingecko.com/api/v3/coins/${coin}`)
    .then(function (response) {
      if (callback)
        return callback(response?.data?.market_data?.current_price?.usd);
      return response?.data?.market_data?.current_price?.usd;
    })
    .catch(function (error) {
      console.log(error?.response?.data);
    });
};

export const checkAllowance = async (tokenAddress, walletAddress) => {
  return await axios
    .get(
      `https://api.1inch.io/v5.0/1/approve/allowance?tokenAddress=${tokenAddress}&walletAddress=${walletAddress}`
    )
    .then(function (response) {
      console.log("allowance: ", response?.data?.allowance);
      return response?.data?.allowance || 0;
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
};

export const checkAndApproveAllowance = async (
  tokenAddress,
  walletAddress,
  quantity
) => {
  const availableAllowance = await checkAllowance(tokenAddress, walletAddress);

  if (availableAllowance < quantity) {
    return await axios
      .get(
        `https://api.1inch.io/v5.0/1/approve/transaction?tokenAddress=${tokenAddress}` //&amount=${quantity}
      )
      .then(function (response) {
        console.log(response?.data);
        return { data: response?.data, signAllowance: true };
      })
      .catch(function (error) {
        console.log(error);
        throw error;
        // return { allowed: false, signAllowance: false };
      });
  }

  return { allowed: true };
};

export const getGasPrice = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const gasPrice = await provider.getGasPrice();
  const gwei = ethers.utils.formatUnits(gasPrice, "gwei");

  return Math.ceil(gwei) + 5;
};

export const signTransaction = async (obj = {}) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

  // get a signer wallet!
  const signer = provider.getSigner();

  return await signer
    .sendTransaction({
      ...obj,
    })
    .then((transaction) => {
      console.log("Signed", transaction);
      return transaction;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
