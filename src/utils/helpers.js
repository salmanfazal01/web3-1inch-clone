export const parseQtyToWei = (quantity, decimals) => {
  const res = quantity * (1 * Math.pow(10, decimals));
  return res;
};

export const parseWeiToQty = (quantity, decimals) => {
  const res = quantity / (1 * Math.pow(10, decimals));
  return res;
};

export const gasLimitToEth = (gasLimit, gweiPrice = 40) => {
  return gasLimit * gweiPrice * 0.000000001;
};

export const smallerString = (
  _string,
  firstN = 5,
  lastN = -4,
  numOfDots = 4
) => {
  const _first = _string.slice(0, firstN);
  const _last = _string.slice(lastN);

  return `${_first}${Array(numOfDots).join(".")}${_last}`;
};
