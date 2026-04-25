import Link from "next/link";

const DealerNeed = () => {
  return (
    <div className="bg-warning  w-full overflow-hidden ">
      <div
        style={{
          background: `url("/images/shadow.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100vw",
        }}
        className=" max-w-screen-2xl mx-auto pt-2"
      >
        <div>
          <div className=" w-3/4 mx-auto overflow-hidden">
            <div className=" applyDealer text-sm md:text-lg lg:text-xl text-white font-medium">
              ...... সারাদেশে ডিলার নিয়োগ চলছে .......
              <small className="link link-secondary ">
                <Link href="/dashboard/addDealer">আবেদন ফরম</Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerNeed;
