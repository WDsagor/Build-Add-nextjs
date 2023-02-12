import Link from "next/link";
import React from "react";

const DelarNeed = () => {
  return (
    <div className="bg-warning mt-[90px] md:mt-[70px] w-full overflow-hidden">
      <div
        style={{
          background: `url("/images/shadow.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className=" max-w-screen-2xl mx-auto pt-5">
        <div>
          <div className=" w-3/4 mx-auto overflow-hidden">
            <div className=" news text-sm md:text-lg lg:text-xl text-white font-medium pt-2">
              ...... সারাদেশে ডিলার নিয়োগ চলছে .......
              <small className="link link-secondary ">
                {" "}
                <Link href="/dashboard/addDealer">
                  <a>আবেদন ফরম</a>
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelarNeed;
