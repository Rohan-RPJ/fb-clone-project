import CustomImage from "./CustomImage";

const Feed = ({ story }) => (
  <div className="h-full rounded-2xl">
    <div className="w-[110px] h-full rounded-2xl overflow-hidden relative cursor-pointer transition transform duration-500 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
      <CustomImage
        src={story.userStoryImg}
        className="rounded-2xl"
        alt="User Story Image"
        //  width={35} height={35}
      />
      <div className="w-[110px] h-full z-10 fixed hover:bg-black dark:hover:bg-black opacity-30 rounded-2xl" />
      <div className="w-[44px] h-[44px] top-2 left-2 relative rounded-full z-20 overflow-hidden">
        <CustomImage
          src={story.userImg}
          className="rounded-full top-0 left-0 absolute border-4 border-blue-400"
          alt="User Image"
          // width={35} height={35}
        />
      </div>
      <div className="bottom-0 absolute p-2">
        <p className="text-white dark:text-white text-sm font-semibold">
          {story.userName}
        </p>
      </div>
    </div>
  </div>
);

export default Feed;
