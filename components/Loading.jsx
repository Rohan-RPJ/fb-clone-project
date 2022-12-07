import React from "react";

const Loading = ({ load }) => {
  return load ? (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen mx-auto bg-black opacity-40">
      <p className="w-full h-full mx-[50%] mt-[50%] sm:mt-[25%] text-lg font-bold text-white">Loading...</p>
    </div>
  ) : (
    ""
  );
};

export default Loading;
