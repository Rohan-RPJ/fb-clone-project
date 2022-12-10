import React from "react";
import logo from "./../public/images/fb-logo.png";
import Image from "next/image";

const Loading = ({ load }) => {
  return load ? (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen mx-auto bg-black dark:bg-black opacity-80">
      {/* <p className="w-full h-full mx-[50%] mt-[50%] sm:mt-[25%] text-lg font-bold text-white">Loading...</p> */}
      <Image
          src={logo}
          width="100"
          height="100"  
          className="rounded-full mx-auto my-[50%] sm:mt-[25%]"
          alt="Loading Facebook..."
        />
    </div>
  ) : (
    ""
  );
};

export default Loading;
