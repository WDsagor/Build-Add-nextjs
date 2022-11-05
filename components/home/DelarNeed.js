import React from "react";

const DelarNeed = () => {
  // const headerImg = require("/images/shadow.png");
  return (
    <div className="bg-warning mt-[90px] md:mt-[70px]">
      <div
        style={{
          background: `url("/images/shadow.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className=" max-w-screen-2xl mx-auto pt-5"
      >
        <div>
          <div className=" w-3/4 mx-auto overflow-hidden">
            <div className=" news text-sm md:text-lg lg:text-xl text-white font-medium pt-2">
              ...... সারাদেশে ডিলার নিয়োগ চলছে .......
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelarNeed;
