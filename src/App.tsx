// import { useState } from "react";
// import viteLogo from "/vite.svg";

const YEAR_TAG = "year";
const MONTH_TAG = "month";
const DAY_TAG = "day";

function App() {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    console.log(data.get(YEAR_TAG), data.get(MONTH_TAG), data.get(DAY_TAG));
  }

  return (
    <div className="bg-[#f0f0f0] font-poppins h-screen flex justify-center">
      <div className="bg-white p-[24px] flex flex-col justify-evenly h-[490px] w-[343px] m-auto rounded-3xl rounded-br-[100px]">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex font-bold text-[#565656] text-xs flex-row w-full justify-between"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor={DAY_TAG}>DAY</label>
            <input
              type="number"
              name={DAY_TAG}
              id={DAY_TAG}
              className="border-2 rounded-lg h-[52px] w-[85px]"
            />
          </div>
          <div className="flex flex-col  gap-1">
            <label htmlFor="month">MONTH</label>
            <input
              type="number"
              name={MONTH_TAG}
              id={MONTH_TAG}
              className="border-2 rounded-lg h-[52px] w-[85px]"
            />
          </div>
          <div className="flex flex-col  gap-1">
            <label htmlFor={YEAR_TAG}>YEAR</label>
            <input
              type="number"
              name={YEAR_TAG}
              id={YEAR_TAG}
              className="border-2 rounded-lg h-[52px] w-[85px]"
            />
          </div>
          <hr className="relative top-12"></hr>
          <div className="flex justify-center">
            <button
              type="submit"
              className="h-[60px] w-[60px] bg-[#844efe] rounded-full relative"
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
