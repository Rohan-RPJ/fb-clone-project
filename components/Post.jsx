import {
  ChatBubbleBottomCenterIcon,
  HandThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import CustomImage from "./CustomImage";
import ReactPlayer from "react-player";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";
import InputEmoji from "react-input-emoji";
import { useState, useEffect } from "react";

const DynamicReactPlayerForVideo = dynamic(() => import("react-player"), {
  ssr: false,
});

const Post = ({ postData, session }) => {
  const [postComments, setPostComments] = useState(
    postData?.comments ? postData.comments : []
  );
  const [newPostComment, setNewPostComment] = useState("");
  const [showComments, setShowComments] = useState(false);

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
    <div
      className={`bg-white shadow-xl sm:rounded-md w-full h-auto`}
    >
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
            (postData.img || postData.video) ? "block" : "hidden"} h-auto"
          }`}
        >
          <div
            className={`relative w-full ${postData.img ? "h-[600px]" : "h-auto"} overflow-hidden cursor-pointer`}
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
                    ? "600px"
                    : "100%"
                }
                // className={`min-h-[400px] sm:min-h-[500px]`}
              />
            )}
          </div>
        </div>

        {/* Likes/Hearts/... Emojis */}
        {[
          {
            category: "smileys_people",
            name: "Faces...",
          },
        ].map((category, index) => {})}

        <div className="hidden sm:block w-2.5/3 h-[1px] mb-1 sm:mb-1 mx-4 bg-gray-200" />

        {/* Like Comment Share */}
        <div
          className={`basis-0.5/12 flex w-full items-center px-2 py-2 ${
            showComments ? "sm:pb-0" : "sm:pb-2"
          } sm:pt-0`}
        >
          {[
            {
              Icon: HandThumbUpIcon,
              text: "Like",
              onClickHandler: () => {},
            },
            {
              Icon: ChatBubbleBottomCenterIcon,
              text: "Comment",
              onClickHandler: () => {
                setShowComments((prevState) => !prevState);
              },
            },
            {
              Icon: ShareIcon,
              text: "Share",
              onClickHandler: () => {},
            },
          ].map(({ Icon, text, onClickHandler }, index) => {
            return (
              <div
                className="flex items-center justify-center gap-2 w-full py-1 bg-gray-100 sm:bg-white sm:hover:bg-gray-100 rounded-full sm:rounded-md mx-1 mb-0 cursor-pointer"
                key={index}
                onClick={onClickHandler}
              >
                <Icon width={28} height={28} className={`text-gray-800`} />
                <span className={`hidden sm:block text-gray-800`}>{text}</span>
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
          className={`${!showComments && "hidden"} w-full h-auto pl-5 pr-3 pb-3`}
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
