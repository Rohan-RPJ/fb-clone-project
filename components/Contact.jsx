import Image from "next/image";
import CustomImage from "./CustomImage";

const Contact = ({ name, img }) => {
  return (
    <div className="flex items-center justify-end pr-14 space-x-2">
      <div className="w-[45px] h-[45px] relative">
        <div className="w-[45px] h-[45px] relative rounded-full overflow-hidden">
          <CustomImage
            src={img}
            layout="fill"
            objectFit="cover"
            className="rounded-full cursor-pointer"
          />
        </div>
        <div className="h-2.5 w-2.5 bottom-1 right-0 absolute bg-green-500 rounded-full"></div>
      </div>
      <p
        className={`font-semibold text-sm w-20 overflow-hidden text-ellipsis text-gray-600 cursor-pointer`}
      >
        {name}
      </p>
    </div>
  );
};

export default Contact;
