import Post from "./Post";

const Posts = ({ className, posts }) => {
  return (
    <div
      className={`flex-col space-y-4 md:space-y-6 w-full ${
        posts && "h-[800px]"
      } ${className}`}
    >
      {posts &&
        posts
          .map((postData, index) => <Post postData={postData} key={index} />)
          .reverse()}
    </div>
  );
};

export default Posts;
