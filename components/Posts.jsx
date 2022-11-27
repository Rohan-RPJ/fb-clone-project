import Post from "./Post";
import userImg1 from "../public/images/elonmusk.jpg";
import userImg2 from "../public/images/jeff.jpg";
import userImg3 from "../public/images/billgates.jpg";
import userImg4 from "../public/images/johnwick.jpg";
import userImg5 from "../public/images/ghostrider.jpg";
import postImg1 from "../public/images/elonmusk-post.jpg";
import postImg2 from "../public/images/jeff-post.jpg";
import postImg3 from "../public/images/billgates-post.jpg";
import postImg4 from "../public/images/johnwick-post.jpg";
import postImg5 from "../public/images/ghostrider-post.jpg";

const Posts = ({ className }) => {
  return (
    <div
      className={`flex-col space-y-4 md:space-y-6 w-full h-[500px] ${className}`}
    >
      {[
        {
          profilePhoto: userImg1,
          userName: "Elon Musk",
          dateTime: "20/11/2022, 04:54:45",
          message: "Whats up Elon Musk!!",
          img: postImg1,
        },
        {
          profilePhoto: userImg2,
          userName: "Jeff Bezos",
          dateTime: "20/11/2022, 04:54:45",
          message: "2nd Richest Person ?",
          img: postImg2,
        },
        {
          profilePhoto: userImg3,
          userName: "Bill Gates",
          dateTime: "20/11/2022, 04:54:45",
          message: "Windows 11 is the future ?!",
          img: postImg3,
        },
        {
          profilePhoto: userImg4,
          userName: "John Wick",
          dateTime: "20/11/2022, 04:54:45",
          message: "John Wick 3 comming soon...",
          img: postImg4,
        },
        {
          profilePhoto: userImg5,
          userName: "Ghost Rider",
          dateTime: "20/11/2022, 04:54:45",
          message: "Lets Ride it!!!",
          img: postImg5,
        },
      ]
        .map((postData, index) => <Post postData={postData} key={index} />)
        .reverse()}
    </div>
  );
};

export default Posts;
