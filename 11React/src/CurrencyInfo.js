import { useEffect, useState } from "react";

async function useCurrencyInfo(currency) {
  fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
  );

  //   console.log(data);
  return data;
}

export default useCurrencyInfo;
