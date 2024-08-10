import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  setCurrencyFromOption,
  setCurrencyToOption,
  setCurrencyFromValue,
  setCurrencyToValue,
  setCurrencyOptions,
} from "./redux/CurrencySlice";

function App() {
  const dispatch = useDispatch();
  const c1 = useSelector((state) => state.currency.currencyFromValue);
  const c2 = useSelector((state) => state.currency.currencyToValue);
  const o1 = useSelector((state) => state.currency.currencyFromOption);
  const o2 = useSelector((state) => state.currency.currencyToOption);
  const options = useSelector((state) => state.currency.currencyOptions);
  console.log(c1, o1, c2, o2);

  const process = async () => {
    let res = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${o1.toLowerCase()}.json`
    );
    let data = await res.json();
    console.log(Number(c1) * Number(data[o1.toLowerCase()][o2.toLowerCase()]));
    dispatch(
      setCurrencyToValue(
        Number(c1) * Number(data[o1.toLowerCase()][o2.toLowerCase()])
      )
    );
  };

  return (
    <>
      <div className="bg-red-600 h-48 w-2/4 flex flex-col justify-center items-center gap-5">
        <div className="bg-blue-700 h-12 w-5/6 flex justify-between items-center px-4">
          <input
            type="number"
            name=""
            id=""
            value={c1}
            onChange={(e) => dispatch(setCurrencyFromValue(e.target.value))}
          />
          <select
            name=""
            id=""
            onChange={(e) => dispatch(setCurrencyFromOption(e.target.value))}
            value={o1}
          >
            {options.data.map((option) => (
              <option className="bg-red" key={Math.random()} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-blue-700 h-12 w-5/6 flex justify-between items-center px-4">
          <input
            type="number"
            name=""
            id=""
            value={c2}
            readOnly={true}
            onChange={(e) => dispatch(setCurrencyToValue(e.target.value))}
          />
          <select
            name=""
            id=""
            onChange={(e) => dispatch(setCurrencyToOption(e.target.value))}
            value={o2}
          >
            {options.data.map((option) => (
              <option className="bg-red" key={Math.random()} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="px-4 py-2 rounded-full bg-blue-950" onClick={process}>
          Convert Currency
        </div>
      </div>
    </>
  );
}

export default App;
