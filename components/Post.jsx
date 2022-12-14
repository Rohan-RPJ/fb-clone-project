import {
  ChatBubbleBottomCenterIcon,
  HandThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import  { HandThumbUpIcon as SolidHandThumbUpIcon, HeartIcon, FaceSmileIcon, FireIcon } from "@heroicons/react/24/solid";
import CustomImage from "./CustomImage";
import ReactPlayer from "react-player";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";
import InputEmoji from "react-input-emoji";
import { useState } from "react";

const DynamicReactPlayerForVideo = dynamic(() => import("react-player"), {
  ssr: false,
});

const Post = ({ postData, session }) => {
  const [postComments, setPostComments] = useState(
    postData?.comments ? postData.comments : []
  );
  const [newPostComment, setNewPostComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const [postLiked, setPostLiked] = useState(false);

  const addNewComment = () => {
    if (newPostComment) {
      let newComment = {
        userName: session.user.name,
        userImg: session.user.image,
        comment: newPostComment,
      };
      setPostComments((oldComments) => [newComment, ...oldComments]);
    }
  };

  return (
    <div className={`bg-white shadow-xl sm:rounded-md w-full h-auto`}>
      <div className="flex flex-col space-y-2 w-full h-auto">
        <div className="basis-1/12 p-4">
          <div className="flex space-x-2 items-center mb-4">
            <div className="w-[40px] h-[40px] relative overflow-hidden rounded-full cursor-pointer">
              <CustomImage
                src={postData.profilePhoto}
                className="rounded-full"
                alt="Post User Profile Photo"
                // width={35} height={35}
              />
            </div>
            <div className={`flex items-center justify-between w-full`}>
              <div>
                <p className="font-bold text-black text-sm cursor-pointer">
                  {postData.userName}
                </p>
                <p className="text-slate-400 text-xs">{postData.dateTime}</p>
              </div>
              <EllipsisHorizontalIcon
                width={30}
                height={30}
                className="cursor-pointer text-gray-500 -mt-6 -mr-2 sm:mr-0 sm:-mt-4"
              />
            </div>
          </div>
          <p className={`font-semibold text-black text-lg mt-6 break-all`}>
            {postData.message.length < 100
              ? postData.message
              : postData.message.substring(0, 100) + "..."}
          </p>
        </div>

        <div
          className={`basis-10/12 w-full sm:px-2 ${
            postData.img || postData.video ? "block" : "hidden"
          } h-auto"
          }`}
        >
          <div
            className={`relative w-full ${
              postData.img ? "h-[400px] sm:h-[600px]" : "h-auto"
            } overflow-hidden cursor-pointer`}
          >
            {postData.img && (
              <CustomImage
                src={postData.img}
                alt="Post Image"
                unoptimized={true}
                //  width={200} height={200}
              />
            )}
            {postData.video && (
              <DynamicReactPlayerForVideo
                url={postData.video}
                controls={true}
                width={"100%"}
                height={
                  postData.video.toString().includes("youtu.be")
                    ? "400px"
                    : "100%"
                }
                // className={`min-h-[400px] sm:min-h-[500px]`}
              />
            )}
          </div>
        </div>

        {/* Likes/Hearts/... Emojis */}
        <div className={`flex items-center justify-between px-2 relative`}>
          <div className={`w-full h-5 flex items-center justify-start px-2`}>
            {[
              {
                Icon: SolidHandThumbUpIcon,
                fromGradient: "from-blue-600",
                toGradient: "to-blue-400",
              },
              {
                Icon: HeartIcon,
                fromGradient: "from-red-600",
                toGradient: "to-red-400",
              },
              {
                  Icon: FireIcon,
                  fromGradient: "from-orange-600",
                  toGradient: "to-yellow-400",
              },
              {
                Icon: FaceSmileIcon,
                fromGradient: "from-yellow-600",
                toGradient: "to-yellow-400",
              },
            ].map(({ Icon, fromGradient, toGradient }, index) => {
              return (
                <div
                  className={`peer p-1 bg-gradient-to-r ${fromGradient} ${toGradient} ${index !== 0 && "-ml-1"} shadow-inner rounded-full cursor-pointer`}
                  key={index}
                  onClick={() => { setShowEmojis(true) }}
                >
                  <Icon width={15} height={15} className={`text-white dark:text-white`} />
                </div>
              );
            })}

            <div className={`hidden ${showEmojis && "flex peer-hover:flex hover:flex"} absolute gap-0.5 sm:gap-1.5 items-center justify-start -ml-3 sm:-ml-20`}>
              {[
                {
                  Icon: SolidHandThumbUpIcon,
                  fromGradient: "from-blue-600",
                  toGradient: "to-blue-400",
                },
                {
                  Icon: HeartIcon,
                  fromGradient: "from-red-600",
                  toGradient: "to-red-400",
                },
                {
                  Icon: FireIcon,
                  fromGradient: "from-orange-600",
                  toGradient: "to-yellow-400",
                },
                {
                  Icon: FaceSmileIcon,
                  fromGradient: "from-yellow-600",
                  toGradient: "to-yellow-400",
                },
              ].map(({ Icon, fromGradient, toGradient }, index) => {
                return (
                  <div
                    className={`p-1 bg-gradient-to-r ${fromGradient} ${toGradient} shadow-inner rounded-full cursor-pointer lg:hover:scale-125`}
                    key={index}
                    onClick={() => { setShowEmojis(false) }}
                  >
                    <Icon width={40} height={40} className={`text-white dark:text-white lg:hover:animate-pulse decoration-none`} />
                  </div>
                );
              })}
              </div>
            <p className={`text-gray-500 mx-2`}>3.1M</p>
            </div>

            <p className={`text-gray-500 mx-2 whitespace-nowrap`}>1.1M comments 50K shares </p>
          </div>

        <div className="hidden sm:block w-2.5/3 h-[1px] mb-1 sm:mb-1 mx-4 bg-gray-200" />

        {/* Like Comment Share */}
        <div
          className={`basis-0.5/12 flex w-full items-center px-2 py-2 ${
            showComments ? "sm:pb-0" : "sm:pb-2"
          } sm:pt-0`}
        >
          {[
            {
              Icon: postLiked ? SolidHandThumbUpIcon : HandThumbUpIcon,
              text: "Like",
              onClickHandler: () => { setPostLiked((prev) => !prev) },
              iconStyle: postLiked && "text-blue-500 dark:text-blue-500 origin-bottom group-hover:-rotate-12 hover:-rotate-12",
              textStyle: postLiked && "text-blue-500 dark:text-blue-500 font-semibold",
            },
            {
              Icon: ChatBubbleBottomCenterIcon,
              text: "Comment",
              onClickHandler: () => {
                setShowComments((prevState) => !prevState);
              },
              iconStyle: showComments && "text-black dark:text-white",
              textStyle: showComments && "text-black dark:text-white font-semibold",
            },
            {
              Icon: ShareIcon,
              text: "Share",
              onClickHandler: () => {},
            },
          ].map(({ Icon, text, onClickHandler, iconStyle, textStyle }, index) => {
            return (
              <div
                className="group flex items-center justify-center gap-2 w-full py-1 bg-gray-100 sm:bg-white sm:hover:bg-gray-100 rounded-full sm:rounded-md mx-1 mb-0 cursor-pointer"
                key={index}
                onClick={onClickHandler}
              >
                <Icon width={28} height={28} className={`${iconStyle} transition transform duration-300 rotate-0 text-gray-500`} />
                <span className={`${textStyle} hidden sm:block text-gray-500`}>{text}</span>
              </div>
            );
          })}
        </div>

        <div
          className={`hidden sm:${
            showComments ? "block" : "hidden"
          } w-2.5/3 h-[1px] mb-2 sm:mb-4 mx-4 bg-gray-200`}
        />

        {/* Show Comments */}
        <div
          className={`${
            !showComments && "hidden"
          } w-full h-auto pl-5 pr-3 pb-3`}
        >
          <p className={`text-gray-500 font-semibold`}>
            View Previous Comments
          </p>
          <div
            className={`overflow-y-scroll overflow-x-hidden h-[250px] scrollbar-hide`}
          >
            {postComments.map((userPostComment, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row space-x-1 my-3 mb-4 w-full pr-6"
                >
                  <div className="w-[35px] h-[35px] relative overflow-hidden rounded-full cursor-pointer">
                    <CustomImage
                      src={userPostComment.userImg}
                      className="rounded-full"
                      alt="Post User Profile Photo"
                      // width={35} height={35}
                      unoptimized={true}
                    />
                  </div>

                  <div className="flex flex-col bg-gray-100 w-full px-2 py-1 rounded-2xl">
                    <p className={`text-slate-500 font-semibold`}>
                      {userPostComment.userName}
                    </p>
                    <p className={`text-slate-500 px-2 break-all`}>
                      {userPostComment.comment}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`border-t border-gray-200`}>
            <div className={`flex flex-row items-center mt-2`}>
              <div className="w-[35px] h-[35px] relative overflow-hidden rounded-full cursor-pointer">
                <CustomImage
                  src={session?.user.image}
                  className="rounded-full"
                  alt="Post User Profile Photo"
                  // width={35} height={35}
                  unoptimized={true}
                />
              </div>

              <InputEmoji
                value={newPostComment}
                onChange={setNewPostComment}
                cleanOnEnter
                onEnter={() => addNewComment()}
                placeholder="Write a comment..."
              />
            </div>
            <p className={`text-black text-xs ml-10`}>Press Enter to post.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
