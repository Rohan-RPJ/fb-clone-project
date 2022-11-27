import profilePhoto from "./../public/images/profile-pic.jpg";
import CustomImage from "./CustomImage";
import {
  CameraIcon,
  PaperAirplaneIcon,
  PhotoIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

const PostMyActivity = ({ className }) => {
  const fileInputRef = useRef(null);
  const [fileSrc, setFileSrc] = useState(null);

  const addPost = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const selectFile = () => {
    setFileSrc(null);
    fileInputRef.current?.click();
  };

  const onFileSelect = (e) => {
    if (!e.target.files?.length) {
      return;
    }

    var reader = new FileReader();

    reader.onload = function (e) {
      setFileSrc(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div
      className={`w-full bg-white dark:bg-black p-2 sm:p-4 rounded-xl shadow-md ${className}`}
    >
      <div className="flex items-center space-x-2.5">
        <div className="h-[38px] w-[44px] overflow-hidden relative rounded-full cursor-pointer">
          <CustomImage src={profilePhoto} className="rounded-full" />
        </div>
        <form className="w-full" onClick={(e) => addPost(e)}>
          <input
            className="outline-none w-full bg-gray-100 text-gray-400 rounded-full p-2 sm:p-2.5 sm:pl-4 px-4 text-xs sm:text-sm font-medium"
            type="text"
            placeholder="What's on your mind, Rohan Jain ?"
          />
        </form>
        <PaperAirplaneIcon
          className="hidden sm:block text-blue-500 cursor-pointer w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]"
          width={45}
          height={45}
        />

        <PhotoIcon
          className="sm:hidden text-blue-500 cursor-pointer"
          width={40}
          height={40}
        />
      </div>

      <div className="hidden sm:block w-full h-0.5 my-2 sm:my-4 bg-gray-50" />

      <div className="hidden sm:flex justify-between pt-1 sm:pt-2 px-4 sm:px-8 pb-1 sm:pb-1">
        <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-3 cursor-pointer">
          <VideoCameraIcon
            width={20}
            height={20}
            className="text-red-600 w-full sm:col-span-1"
          />
          <span className="text-xs sm:text-sm sm:col-span-2 text-gray-800">
            Live Video
          </span>
        </div>
        <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-3 cursor-pointer">
          <CameraIcon
            width={20}
            height={20}
            className="text-green-600 w-full sm:col-span-1"
          />
          <span
            className="text-xs sm:text-sm sm:col-span-2  text-gray-800"
            onClick={selectFile}
          >
            Photo/Video
          </span>
          <input
            className="hidden"
            type="file"
            ref={fileInputRef}
            onChange={onFileSelect}
          />
        </div>
        <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-3 cursor-pointer">
          <FaceSmileIcon
            width={22}
            height={22}
            className="text-yellow-600 w-full sm:col-span-1"
          />
          <span className="text-xs sm:text-sm sm:col-span-2  text-gray-800">
            Feeling/Activity
          </span>
        </div>
      </div>

      <div
        className={`${
          fileSrc ? "block" : "hidden"
        } w-full h-[300px] mt-2 overflow-hidden relative`}
      >
        {fileSrc && <CustomImage src={fileSrc} />}
        {/* <CustomImage src={`${fileSrc ? fileSrc : "#"}`} /> */}
      </div>
    </div>
  );
};

export default PostMyActivity;
