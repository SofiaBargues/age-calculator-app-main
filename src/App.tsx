// import { useState } from "react";
// import viteLogo from "/vite.svg";

import { useState } from "react";

const YEAR_TAG = "year";
const MONTH_TAG = "month";
const DAY_TAG = "day";

function Input({
  name,
  text,
  isError,
  errorMessage,
}: {
  name: string;
  text: string;
  isError: boolean;
  errorMessage: string;
}) {
  const [value, setValue] = useState("");
  console.log(value);

  const onChange = (event) => {
    const inputValue = event.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      setValue(inputValue);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{text}</label>
      <input
        onChange={onChange}
        value={value}
        name={name}
        id={name}
        className={
          "border-2 rounded-lg h-[52px] w-[85px] " +
          (isError ? " bg-red-500" : " bg-white")
        }
      />
      {errorMessage}
    </div>
  );
}

function App() {
  const [dayErrorMessage, setDayErrorMessage] = useState("");
  const isDayError = dayErrorMessage !== "";
  // const isDayError = dayErrorMessage ? true : false;
  // console.log(isDayError, dayErrorMessage);

  const [monthErrorMessage, setMonthErrorMessage] = useState("");
  const isMonthError = monthErrorMessage !== "";
  // console.log(isMonthError, monthErrorMessage);

  const [yearErrorMessage, setYearErrorMessage] = useState("");
  const isYearError = yearErrorMessage !== "";
  // console.log(isYearError, yearErrorMessage);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    const day = Number(data.get(DAY_TAG));
    const month = Number(data.get(MONTH_TAG));
    const year = Number(data.get(YEAR_TAG));

    if (day >= 1 && day <= 31) {
      setDayErrorMessage("");
    } else {
      setDayErrorMessage("Must be a valid day");
    }
    if (month >= 1 && month <= 12) {
      setMonthErrorMessage("");
    } else {
      setMonthErrorMessage("Must be a valid month");
    }
    if (year <= 2024) {
      setYearErrorMessage("");
    } else {
      setYearErrorMessage("Must be in the past");
    }

    // console.log(
    //   day,
    //   month,
    //   year,
    //   data.get(YEAR_TAG),
    //   data.get(MONTH_TAG),
    //   data.get(DAY_TAG)
    // );
  }

  return (
    <div className="bg-[#f0f0f0] font-poppins h-screen flex justify-center">
      <div className="bg-white p-[24px] flex flex-col justify-evenly h-[490px] w-[343px] m-auto rounded-3xl rounded-br-[100px]">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex font-bold text-[#565656] text-xs flex-col w-full"
        >
          <div className="flex flex-row justify-between">
            <Input
              isError={isDayError}
              name={DAY_TAG}
              text="DAY"
              errorMessage={dayErrorMessage}
            />
            <Input
              isError={isMonthError}
              name={MONTH_TAG}
              text="MONTH"
              errorMessage={monthErrorMessage}
            />
            <Input
              isError={isYearError}
              name={YEAR_TAG}
              text="YEAR"
              errorMessage={yearErrorMessage}
            />
          </div>

          <hr className="relative top-12"></hr>
          <div className="flex justify-center">
            <button
              type="submit"
              className="h-[60px] w-[60px] top-4 bg-[#844efe] rounded-full relative"
            >
              <img
                src="/icon-arrow.svg"
                alt=""
                className="h-6 absolute right-[18px] top-[18px]
              "
              />
            </button>
          </div>
        </form>
        <div className="text-[50px] font-extrabold italic ">
          <div>
            <span className="text-[#884eff]">38</span> years
          </div>
          <div>
            <span className="text-[#884eff]">3 </span> months
          </div>
          <div>
            <span className="text-[#884eff]">26</span> days
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
