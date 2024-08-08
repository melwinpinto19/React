import React from "react";

function InputBox({
  currencyValue,
  currencyOption,
  setCurrencyValue,
  setCurrencyOption,
  where,
  disabled = false,
  currencyOptions,
}) {
  return (
    <>
      <div className="bg-white rounded-lg w-11/12 h-32 flex justify-between items-center px-8">
        <div className="flex flex-col gap-5 ">
          <label htmlFor="From">{where}</label>
          <input
            type="text"
            id="From"
            value={currencyValue}
            onInput={(e) => setCurrencyValue(e.target.value)}
            readOnly={disabled}
          />
        </div>
        <div className="flex flex-col gap-5 ">
          <label htmlFor="From">Currency</label>
          <select
            name=""
            id=""
            onChange={(e) => setCurrencyOption(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            {currencyOptions.map((ele) => {
              <option value={ele} key={ele}>
                {ele}
              </option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
