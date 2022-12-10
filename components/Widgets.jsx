import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import userImg1 from "../public/images/elonmusk.jpg";
import userImg2 from "../public/images/jeff.jpg";
import userImg3 from "../public/images/billgates.jpg";
import userImg4 from "../public/images/johnwick.jpg";
import userImg5 from "../public/images/ghostrider.jpg";
import userImg6 from "../public/images/ironman.jpg";
import Contact from "./Contact";

const Widgets = () => {
  return (
    <section className="flex-col p-2 pr-4 pt-6 justify-end w-full h-full">
      <div className="flex items-center justify-between space-x-2">
        <p className="text-lg text-gray-500 font-semibold">Contacts</p>
        <div className={`flex items-center justify-end gap-6`}>
          <VideoCameraIcon
            width={20}
            height={20}
            className="cursor-pointer text-gray-500"
          />
          <MagnifyingGlassIcon
            width={20}
            height={20}
            className="cursor-pointer text-gray-500"
          />
          <EllipsisHorizontalIcon
            width={20}
            height={20}
            className="cursor-pointer text-gray-500"
          />
        </div>
      </div>
      <div className="flex-col space-y-1 mt-6">
        {[
          {
            userImg: userImg1,
            userName: "Elon Musk",
          },
          {
            userImg: userImg2,
            userName: "Jeff Bezos",
          },
          {
            userImg: userImg3,
            userName: "Bill Gates",
          },
          {
            userImg: userImg4,
            userName: "John Wickkkkkkkkk",
          },
          {
            userImg: userImg5,
            userName: "Ghost Rider",
          },
          {
            userImg: userImg6,
            userName: "Iron Man",
          },
        ].map(({ userImg, userName }, index) => (
          <Contact img={userImg} name={userName} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Widgets;
