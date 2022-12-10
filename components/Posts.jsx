import Post from "./Post";

const Posts = ({ className, posts, session }) => {
  return (
    <div
      className={`flex-col space-y-2 md:space-y-6 w-full ${
        posts && "h-[600px] sm:h-[800px]"
      } ${className}`}
    >
      {posts &&
        posts
          .map((postData, index) => <Post postData={postData} key={index} session={session} />)
          .reverse()}
    </div>
  );
};

export default Posts;
