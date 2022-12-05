import {
  ChatBubbleBottomCenterIcon,
  HandThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import CustomImage from "./CustomImage";
import ReactPlayer from "react-player";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

const Post = ({ postData }) => (
  <div
    className={`bg-white shadow-xl sm:rounded-md w-full ${
      postData.img && "h-full"
    }  overflow-hidden`}
  >
    <div className="flex flex-col space-y-2 w-full h-full">
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
        <p className="font-semibold text-black text-lg mt-6">
          {postData.message}
        </p>
      </div>
      <div className={`basis-10/12 w-full sm:px-2`}>
        <div
          className={`${
            postData.img ? "block" : postData.video ? "block" : "hidden"
          } relative w-full h-full overflow-hidden cursor-pointer`}
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
            <ReactPlayer
              url={postData.video}
              controls={true}
              width={"100%"}
              height={"100%"}
            />
          )}
        </div>
      </div>

      <div className="w-full h-0.5 mb-2 sm:mb-4 bg-gray-50" />

      <div
        className={`basis-1/12 flex w-full h-full items-center justify-between px-2`}
      >
        {[
          {
            Icon: HandThumbUpIcon,
            text: "Like",
          },
          {
            Icon: ChatBubbleBottomCenterIcon,
            text: "Comment",
          },
          {
            Icon: ShareIcon,
            text: "Share",
          },
        ].map(({ Icon, text }, index) => {
          return (
            <div
              className="flex items-center justify-center gap-2 w-full py-2 bg-gray-100 sm:bg-transparent sm:hover:bg-gray-100 rounded-full sm:rounded-md mx-1 mb-2 cursor-pointer"
              key={index}
            >
              <Icon width={28} height={28} className={`text-gray-800`} />
              <span className={`hidden sm:block text-gray-800`}>{text}</span>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default Post;
