// import { useState } from "react";
// import viteLogo from "/vite.svg";

function App() {
  return (
    <div className="bg-[#f0f0f0] font-poppins h-screen flex justify-center">
      <div className="bg-white p-[24px] flex flex-col justify-evenly h-[490px] w-[343px] m-auto rounded-3xl rounded-br-[100px]">
        <form
          action=""
          className="flex font-bold text-[#565656] text-xs flex-row w-full justify-between"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="day">DAY</label>
            <input
              type="number"
              id="day "
              className="border-2 rounded-lg h-[52px] w-[85px]"
            />
          </div>
          <div className="flex flex-col  gap-1">
            <label htmlFor="month">MONTH</label>
            <input
              type="number"
              id="moth"
              className="border-2 rounded-lg h-[52px] w-[85px]"
            />
          </div>
          <div className="flex flex-col  gap-1">
            <label htmlFor="year">YEAR</label>
            <input
              type="number"
              id="year"
              className="border-2 rounded-lg h-[52px] w-[85px]"
            />
          </div>
        </form>
        <hr className="relative top-12"></hr>
        <div className="flex justify-center">
          <button className="h-[60px] w-[60px] bg-[#844efe] rounded-full relative">
            <img
              src="/icon-arrow.svg"
              alt=""
              className="h-6 absolute right-[18px] top-[18px]
            "
            />
          </button>
        </div>
        <div className="text-[50px] font-extrabold italic ">
          <div>
            {" "}
            <span className="text-[#884eff]">38</span> years
          </div>
          <div>
            {" "}
            <span className="text-[#884eff]">3 </span> months
          </div>
          <div>
            {" "}
            <span className="text-[#884eff]">26</span> days
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
