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
import ReactPlayer from "react-player";
import Loading from './Loading';

const PostMyActivity = ({ className, session, addPostHandler }) => {
  const fileInputRef = useRef(null);
  const postActivityFormRef = useRef(null);
  const [fileSrc, setFileSrc] = useState(null);
  const [postImage, setPostImage] = useState(null);
  const [postVideo, setPostVideo] = useState(null);
  const [postMessage, setPostMessage] = useState(null);
  const [showPostMsgInputErr, setShowPostMsgInputErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const addPost = (e) => {
    e.preventDefault();

      if (!postMessage) {
        setShowPostMsgInputErr(true);
        return;
      }
  
      setShowPostMsgInputErr(false);
  
      let newPost = {
        profilePhoto: session.user.image,
        userName: session.user.name,
        dateTime:
          new Date().toLocaleDateString() +
          ", " +
          new Date().toLocaleTimeString(),
        message: postMessage,
      };
      if (postImage) newPost.img = URL.createObjectURL(postImage);
      else if (postVideo) newPost.video = URL.createObjectURL(postVideo);
  
      setPostMessage(null);
      setPostImage(null);
      setPostVideo(null);
      setFileSrc(null);
      postActivityFormRef.current?.reset();

      setLoading(true);
      setTimeout(() => {
        addPostHandler(newPost);

        setTimeout(() => setLoading(false), 1000)
        
      }, 1000)
  };

  const selectFile = () => {
    fileInputRef.current?.click();
  };

  const onFileSelect = (e) => {
    if (!e.target.files?.length) {
      return;
    }

    setFileSrc(null);
    setPostImage(null);
    setPostVideo(null);

    var reader = new FileReader();

    reader.onload = function (e) {
      setFileSrc(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);

    if (isFileImage(e.target.files[0]))
      setPostImage((prevImg) => e.target.files[0]);
    else if (isFileVideo(e.target.files[0]))
      setPostVideo((prevVid) => e.target.files[0]);
  };

  const isFileImage = (file) => {
    return file && file["type"].split("/")[0] === "image";
  };

  const isFileVideo = (file) => {
    return file && file["type"].split("/")[0] === "video";
  };

  return (
    <>
    <Loading load={loading} />
    <div
      className={`w-full bg-white dark:bg-black p-2 sm:p-4 sm:rounded-md shadow-md ${className}`}
    >
      <div className="flex items-center space-x-2.5">
        <div className="h-[38px] w-[44px] overflow-hidden relative rounded-full cursor-pointer">
          <CustomImage
            src={session.user.image}
            className="rounded-full"
            alt="User Image"
            // width={35} height={35}
          />
        </div>
        <form
          className="w-full flex relative"
          onSubmit={(e) => addPost(e)}
          ref={postActivityFormRef}
        >
          <input
            className={`${
              showPostMsgInputErr
                ? "focus:outline outline-1 outline-red-400"
                : "focus:outline outline-1 outline-blue-500"
            } w-full bg-gray-100 text-slate-500 rounded-full p-2 sm:p-2.5 sm:pl-4 px-4 text-xs sm:text-sm font-medium`}
            type="text"
            placeholder={`What's on your mind, ${
              session.user.name?.split(" ")[0]
            } ?`}
            onChange={(e) => {
              if (e.target.value) {
                setShowPostMsgInputErr(false);
              }
              setPostMessage(e.target.value);
            }}
          />
          <PaperAirplaneIcon
            className="hidden sm:block absolute right-0 text-blue-500 w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] z-0"
            width={45}
            height={45}
          />
          <input
            type="submit"
            className={`bg-transparent cursor-pointer z-10 w-[30px] h-[30px] sm:w-[48px] sm:h-[45px] rounded-full`}
            value=""
          />
        </form>

        <PhotoIcon
          className="sm:hidden text-blue-500 cursor-pointer"
          width={40}
          height={40}
          onClick={selectFile}
        />
      </div>

      <div className="hidden sm:block w-full h-0.5 my-2 sm:my-4 bg-gray-50" />

      <div className="hidden sm:flex justify-between pt-1 sm:pt-2 px-4 sm:px-8 pb-1 sm:pb-1">
        <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-3 cursor-pointer items-center">
          <VideoCameraIcon
            width={25}
            height={25}
            className="text-red-500 w-full sm:col-span-1"
          />
          <span className="text-xs sm:text-sm sm:col-span-2 text-gray-800">
            Live Video
          </span>
        </div>
        <div
          className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-3 cursor-pointer items-center"
          onClick={selectFile}
        >
          <CameraIcon
            width={25}
            height={25}
            className="text-green-600 w-full sm:col-span-1"
          />
          <span className="text-xs sm:text-sm sm:col-span-2 text-gray-800">
            Photo/Video
          </span>
          <input
            className="hidden"
            type="file"
            ref={fileInputRef}
            onChange={onFileSelect}
          />
        </div>
        <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-3 cursor-pointer items-center">
          <FaceSmileIcon
            width={25}
            height={25}
            className="text-yellow-600 w-full sm:col-span-1"
          />
          <span className="text-xs sm:text-sm sm:col-span-2 text-gray-800">
            Feeling/Activity
          </span>
        </div>
      </div>

      <div
        className={`${fileSrc ? "block" : "hidden"} w-full ${
          postImage ? "h-[400px] sm:h-[500px]" : postVideo && "h-full"
        } mt-2 overflow-hidden relative`}
      >
        {fileSrc && postImage && (
          <CustomImage src={fileSrc} alt="New Post Image" />
        )}
        {fileSrc && postVideo && (
          <ReactPlayer
            url={fileSrc}
            controls={true}
            width={"100%"}
            height={"100%"}
          />
        )}
      </div>
    </div>
    </>
  );
};

export default PostMyActivity;
