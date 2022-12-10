import userImg1 from "../public/images/elonmusk.jpg";
import userImg2 from "../public/images/jeff.jpg";
import userImg3 from "../public/images/billgates.jpg";
import userImg4 from "../public/images/johnwick.jpg";
import userImg5 from "../public/images/ghostrider.jpg";
import userImg6 from "../public/images/ironman.jpg";
import storyImg1 from "../public/images/elonmusk-story.jpg";
import storyImg2 from "../public/images/jeff-story.jpg";
import storyImg3 from "../public/images/billgates-story.jpg";
import storyImg4 from "../public/images/johnwick-story.jpg";
import storyImg5 from "../public/images/ghostrider-story.jpg";
import storyImg6 from "../public/images/ironman-story.jpg";
import Feed from "./Feed";

const Feeds = () => {
  var stories = [
    {
      userImg: userImg6,
      userStoryImg: storyImg6,
      userName: "Iron Man",
    },
    {
      userImg: userImg4,
      userStoryImg: storyImg4,
      userName: "John Wick",
    },
    {
      userImg: userImg5,
      userStoryImg: storyImg5,
      userName: "Ghost Rider",
    },
    {
      userImg: userImg1,
      userStoryImg: storyImg1,
      userName: "Elon Musk",
    },
    {
      userImg: userImg2,
      userStoryImg: storyImg2,
      userName: "Jeff Bezos",
    },
    {
      userImg: userImg3,
      userStoryImg: storyImg3,
      userName: "Bill Gates",
    },
  ];

  return (
    <div className="flex justify-start h-[200px] md:h-[220px] my-2 sm:my-0 gap-2.5 overflow-x-scroll scrollbar-hide">
      {stories.map((story, index) => (
        <Feed story={story} key={index} />
      ))}
    </div>
  );
};

export default Feeds;
