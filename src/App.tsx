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
    console.log(event.target.value);
  };
  return (
    <div className="flex flex-col gap-1 md:text-base">
      <label className={isError ? "text-red-400" : ""} htmlFor={name}>
        {text}
      </label>
      <input
        onChange={onChange}
        value={value}
        name={name}
        id={name}
        className={
          "border p-3 rounded-lg h-[52px] text-xl w-[85px] md:h-[70px] md:text-3xl md:w-[156px] bg-white" +
          (isError ? " border-red-400 " : "border-gray-300")
        }
      />
      <div className="text-red-400 text-[7px] md:text-sm font-normal italic">
        {errorMessage}
      </div>
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

  const [day, setDay] = useState("26");
  const [month, setMonth] = useState("3");
  const [year, setYear] = useState("38");
  function handleSubmit(event) {
    // --------- GETTING DATA FROM FORM ---------
    event.preventDefault();
    const data = new FormData(event.target);

    const day = Number(data.get(DAY_TAG));
    const month = Number(data.get(MONTH_TAG));
    const year = Number(data.get(YEAR_TAG));
    let errorFound = false;

    // --------- VALIDATION ----------

    if (day >= 1 && day <= 31) {
      setDayErrorMessage("");
    } else {
      errorFound = true;
      setDayErrorMessage("Must be a valid day");
    }
    if (month >= 1 && month <= 12) {
      setMonthErrorMessage("");
    } else {
      errorFound = true;
      setMonthErrorMessage("Must be a valid month");
    }
    if (year <= 2024) {
      setYearErrorMessage("");
    } else {
      errorFound = true;
      setYearErrorMessage("Must be in the past");
    }

    // --------- UPDATING Year, Month, Day display ----------

    if (!errorFound) {
      const birthDate = new Date(year, month - 1, day);
      const today = new Date();

      let ageYears = today.getFullYear() - birthDate.getFullYear();
      let ageMonths = today.getMonth() - birthDate.getMonth();
      let ageDays = today.getDate() - birthDate.getDate();

      if (ageDays < 0) {
        ageMonths--;
        const lastMonth = new Date(
          today.getFullYear(),
          today.getMonth() - 1,
          0
        );
        ageDays += lastMonth.getDate();
      }
      if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
      }

      setDay(String(ageDays));
      setMonth(ageMonths.toString());
      setYear(ageYears.toString());
    } else {
      setDay("--");
      setMonth("--");
      setYear("--");
    }
  }

  return (
    <div className="bg-[#f0f0f0] font-poppins h-screen flex justify-center">
      <div className="bg-white p-[24px] flex flex-col justify-evenly h-[490px] w-[343px] md:h-[680px] md:w-[840px] m-auto rounded-3xl rounded-br-[100px]">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex font-bold text-[#565656] text-xs flex-col w-full"
        >
          <div className="flex flex-row justify-between md:justify-start md:gap-14">
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
          <div className="flex justify-center md:justify-end">
            <button
              type="submit"
              className="h-[60px] w-[60px] top-4 bg-[#844efe] hover:bg-black rounded-full relative"
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
            <span className="text-[#884eff]">{year}</span> years
          </div>
          <div>
            <span className="text-[#884eff]">{month}</span> months
          </div>
          <div>
            <span className="text-[#884eff]">{day}</span> days
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
