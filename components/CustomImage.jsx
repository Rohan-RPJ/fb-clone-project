import { useState } from "react";
import Image from "next/image";

const CustomImage = ({ src, ...props }) => {
  const [isReady, setIsReady] = useState(false);

  const onLoadCallBack = () => {
    setIsReady(true);
  };

  const { className } = { ...props };
  return (
    <Image
      layout="fill"
      objectFit="cover"
      src={src}
      {...props}
      className={`bg-gray-200 transition duration-1000 ${
        isReady ? "bg-gray-100 blur-0" : "blur-xl"
      } ${className}`}
      onLoadingComplete={onLoadCallBack}
    />
  );
};

export default CustomImage;
