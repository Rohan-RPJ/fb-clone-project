import Image from "next/image";
import CustomImage from "./CustomImage";

const Contact = ({ name, img }) => {
  return (
    <div className="flex items-center justify-start space-x-2 hover:bg-gray-200 px-2 py-2 rounded-md">
      <div className="w-[45px] h-[45px] relative">
        <div className="w-[45px] h-[45px] relative rounded-full overflow-hidden">
          <CustomImage
            src={img}
            // width={40}
            // height={40}
            // layout="fill"
            alt="friend-contact"
            className="rounded-full cursor-pointer"
          />
        </div>
        <div className="h-2.5 w-2.5 bottom-1 right-0 absolute bg-green-500 rounded-full"></div>
      </div>
      <p
        className={`font-semibold text-sm w-30 overflow-hidden text-ellipsis text-gray-600 cursor-pointer`}
      >
        {name}
      </p>
    </div>
  );
};

export default Contact;
