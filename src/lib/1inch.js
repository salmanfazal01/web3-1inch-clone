import axios from "axios";
import { TOP_SYMBOLS } from "../constants";

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
    });
};

export const fetchTokenPrices = async (callback) => {
  return await axios
    .get("https://token-prices.1inch.io/v1.1/1")
    .then(function (response) {
      // handle success
      const result = response.data || {};
      callback?.(result);

      return result;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      callback?.([]);
    });
};

export const fetchQuote = async (fromAddress, toAddress, quantity) => {
  return await axios
    .get(
      `https://api.1inch.io/v5.0/1/quote?fromTokenAddress=${fromAddress}&toTokenAddress=${toAddress}&amount=${quantity}`
    )
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error?.response?.data);
    });
};

export const fetchConversion = async (
  fromAddress,
  toAddress,
  quantity,
  userAddress,
  slippage
) => {
  return await axios
    .get(
      `https://api.1inch.io/v5.0/1/swap?fromTokenAddress=${fromAddress}&toTokenAddress=${toAddress}&amount=${quantity}&fromAddress=${"0x0ffD88E802FdB1cFFD2f7F3906C339a1B27469f9"}&slippage=${slippage}`
    )
    .then(function (response) {
      console.log("CONVERSION TX: ", response);
      return result;
    })
    .catch(function (error) {
      console.log(error?.response?.data);
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
