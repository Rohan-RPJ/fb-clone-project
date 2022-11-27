import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  HomeIcon,
  FlagIcon,
  PlayCircleIcon,
  UserGroupIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import {
  BellIcon,
  Squares2X2Icon,
  ChatBubbleOvalLeftEllipsisIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import CustomImage from "./CustomImage";
import logo from "./../public/images/fb-logo.png";
import profilePhoto from "./../public/images/profile-pic.jpg";
import Image from "next/image";
import Searchbar from "./Searchbar";
import DarkModeToggler from "./DarkModeToggler";

const Header = ({ darkMode, darkModeHandler }) => (
  <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 md:p-4 shadow-md bg-white">
    {/* Left */}
    <div className="hidden sm:flex items-center gap-2 w-3/12 md:2.5/12 lg:w-2/12">
      <Image
        src={logo}
        width="35"
        height="35"
        className="rounded-full ring-2 ring-gray-300 p-1 bg-slate-200 cursor-pointer"
      />
      <Searchbar darkMode={darkMode} darkModeHandler={darkModeHandler} />
    </div>
    <div className="flex items-center justify-between sm:hidden pb-2">
      <p className="font-extrabold text-lg  cursor-pointer text-gray-800">
        f a c e b o o k
      </p>

      <div className="flex items-center space-x-2">
        <DarkModeToggler
          darkMode={darkMode}
          darkModeHandler={darkModeHandler}
        />
        <Searchbar className="" />
        <Bars3Icon
          width={25}
          height={25}
          className="lg:hidden text-gray-500 bg-gray-100 rounded-full p-0.5 cursor-pointer"
        />
      </div>
    </div>

    {/* Center */}
    <div className="flex items-center px-2 sm:w-3/5 lg:w-2/5 justify-between gap-10">
      {[
        HomeIcon,
        FlagIcon,
        PlayCircleIcon,
        ShoppingCartIcon,
        UserGroupIcon,
      ].map((Icon, index) => (
        <Icon
          key={index}
          className={`${
            index !== 0 ? "text-gray-500" : "text-blue-500"
          } w-[22px] h-[22px] md:w-[25px] md:h-[25px] cursor-pointer hover:text-blue-500`}
        />
      ))}
    </div>

    {/* Right */}
    <div className="hidden sm:flex items-center gap-3">
      <div className="flex items-center space-x-1 cursor-pointer">
        <div className="w-[40px] h-[40px] relative overflow-hidden rounded-full flex items-center justify-center">
          <CustomImage
            // width={40}
            // height={40}
            src={profilePhoto}
            className="rounded-full"
          />
        </div>

        <p className="font-semibold hidden xl:block text-gray-600">
          Rohan Jain
        </p>
        <ChevronDownIcon
          width={20}
          height={20}
          className="xl:hidden text-gray-600"
        />
      </div>
      <div className="hidden lg:flex items-center justify-between">
        {[
          Squares2X2Icon,
          ChatBubbleOvalLeftEllipsisIcon,
          BellIcon,
          ChevronDownIcon,
        ].map((Icon, index) => (
          <div className={`${index !== 3 ? "mr-2" : "-mr-1"}`}>
            <Icon
              width={"35"}
              height={"35"}
              key={index}
              className="bg-gray-200 rounded-full p-1.5 text-gray-600 cursor-pointer hover:bg-blue-500 hover:text-white"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Header;
