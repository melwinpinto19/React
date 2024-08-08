import { useEffect, useState } from "react";
import InputBox from "./InputBox";
import CurrencyInfo from "./CurrencyInfo";

function App() {
  const [currencyFromValue, setCurrencyFromValue] = useState(0);
  const [currencyToValue, setCurrencyToValue] = useState(0);
  const [currencyFromOption, setCurrencyFromOption] = useState("USD");
  const [currencyToOption, setCurrencyToOption] = useState("INR");
  const [currencyOptions, setCurrencyOptions] = useState(["USD", "INR"]);

  useEffect(() => {}, []);

  console.log(
    currencyFromValue,
    currencyToValue,
    currencyFromOption,
    currencyToOption
  );

  // let data = CurrencyInfo("INR");

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions(data["eur"]);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div className=" h-2/4 w-2/4 bg-lime-50 rounded-lg flex flex-col justify-evenly items-center">
        <InputBox
          currencyValue={currencyFromValue}
          setCurrencyValue={setCurrencyFromValue}
          currencyOption={currencyFromOption}
          setCurrencyOption={setCurrencyFromOption}
          where={"From"}
          currencyOptions={currencyOptions}
        />
        <InputBox
          currencyValue={currencyToValue}
          setCurrencyValue={setCurrencyToValue}
          currencyOption={currencyToOption}
          setCurrencyOption={setCurrencyToOption}
          where={"To"}
          disabled={true}
          currencyOptions={currencyOptions}
        />
        <div className="rounded-full flex justify-center items-center bg-blue-700 h-16 w-64 uppercase text-white">
          Convert USD to INR
        </div>
      </div>
    </>
  );
}

export default App;
