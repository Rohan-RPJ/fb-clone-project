import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  HomeIcon,
  FlagIcon,
  PlayCircleIcon,
  UserGroupIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import CustomImage from "../CustomImage";
import logo from "./../../public/images/fb-logo.png";
import Image from "next/image";
import Searchbar from "../Searchbar";
import DarkModeToggler from "../DarkModeToggler";
import HeadersRightIconsLayout from "./HeadersRightIconsLayout";
import HeaderRightAdditionalDetails from "./HeaderRightAdditionalDetails";
import HeaderRightNotificationDetails from "./HeaderRightNotificationDetails";
import HeaderRightMessengerDetails from "./HeaderRightMessengerDetails";
import HeaderRightOtherAppsDetails from "./HeaderRightOtherAppsDetails";

const Header = ({ darkMode, darkModeHandler, session, className }) => {
  return (
    <section
      className={`flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-4 md:p-2 shadow-md bg-white ${className}`}
    >
      {/* Left */}
      <div className="hidden sm:flex items-center gap-2 w-3/12">
        <Image
          src={logo}
          width="35"
          height="35"
          className="rounded-full ring-2 ring-gray-300 p-1 bg-slate-200 cursor-pointer"
          alt="facebook"
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
          <HeadersRightIconsLayout>
            <HeaderRightAdditionalDetails
              iconWidth={25}
              iconHeight={25}
              className="lg:hidden text-gray-500 bg-gray-100 rounded-full p-0.5 cursor-pointer"
            />
          </HeadersRightIconsLayout>
        </div>
      </div>

      {/* Center */}
      <div className="flex items-center px-5 lg:px-2 sm:w-3/5 lg:w-2/5 justify-between gap-2">
        {[
          HomeIcon,
          FlagIcon,
          PlayCircleIcon,
          ShoppingCartIcon,
          UserGroupIcon,
        ].map((Icon, index) => (
          <div
            className={`flex items-center justify-center py-2 w-full rounded-md px-2 ${
              index !== 0
                ? "text-gray-500 hover:bg-gray-200"
                : "text-blue-500 border-b-4 border-blue-500 rounded-none"
            } cursor-pointer`}
            key={index}
          >
            <Icon
              key={index}
              className={`w-[22px] h-[22px] md:w-[30px] md:h-[30px]`}
            />
          </div>
        ))}
      </div>

      {/* Right */}
      <div className="hidden sm:flex items-center justify-end gap-4 lg:w-3/12">
        <div className="flex items-center space-x-1 cursor-pointer">
          <div className="w-[40px] h-[40px] relative overflow-hidden rounded-full flex items-center justify-center">
            <CustomImage
              // width={40}
              // height={40}
              src={session?.user.image}
              className="rounded-full"
              alt="User Image"
            />
          </div>

          <p className="font-semibold hidden xl:block text-gray-600">
            {session?.user.name}
          </p>
          <ChevronDownIcon
            width={20}
            height={20}
            className="xl:hidden text-gray-600"
          />
        </div>

        <div className="hidden lg:flex items-center justify-between">
          {[
            HeaderRightOtherAppsDetails,
            HeaderRightMessengerDetails,
            HeaderRightNotificationDetails,
            HeaderRightAdditionalDetails,
          ].map((HeaderRightBody, index) => (
            <HeadersRightIconsLayout key={index}>
              <HeaderRightBody
                index={index}
                iconWidth={"35"}
                iconHeight={"35"}
                className="bg-gray-200 rounded-full p-1.5 text-gray-600 cursor-pointer hover:bg-blue-500 hover:text-white"
              />
            </HeadersRightIconsLayout>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
