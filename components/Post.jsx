import CustomImage from "./CustomImage";

const Post = ({ postData }) => (
  <div className="bg-white shadow-xl rounded-md w-full h-full overflow-hidden">
    <div className="flex-col space-y-2 w-full h-full">
      <div className="p-4">
        <div className="flex space-x-2 items-center">
          <div className="w-[40px] h-[40px] relative overflow-hidden rounded-full cursor-pointer">
            <CustomImage src={postData.profilePhoto} className="rounded-full" />
          </div>
          <div>
            <p className="font-bold text-black text-sm cursor-pointer">
              {postData.userName}
            </p>
            <p className="text-slate-400 text-xs">{postData.dateTime}</p>
          </div>
        </div>
        <p className="font-semibold text-black text-lg mt-6">
          {postData.message}
        </p>
      </div>
      <div className="w-full h-full relative overflow-hidden cursor-pointer">
        <CustomImage src={postData.img} />
      </div>
    </div>
  </div>
);

export default Post;
