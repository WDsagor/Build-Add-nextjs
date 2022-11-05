import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className=" lg:w-24 w-16">
        <Image width={100} height={100} src="/images/spinnervlll.gif" alt="" />
      </div>
    </div>
  );
};

export default Loading;
