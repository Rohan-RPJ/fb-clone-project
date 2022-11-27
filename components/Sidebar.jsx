import {
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import CustomImage from "./CustomImage";
import profilePhoto from "./../public/images/profile-pic.jpg";

const Sidebar = () => {
  return (
    <section className="p-1 md:p-6 pt-8 flex-col sm:space-y-8">
      <div className="flex items-center space-x-1 mt-2 mb-4 cursor-pointer">
        <div className="w-[40px] h-[40px] relative overflow-hidden rounded-full flex items-center justify-center">
          <CustomImage
            // width={40}
            // height={40}
            src={profilePhoto}
            className="rounded-full"
          />
        </div>
        <p className="font-semibold hidden md:block text-gray-600">
          Rohan Jain
        </p>
      </div>

      <div className="flex-col space-y-2 sm:space-y-8">
        {[
          {
            Icon: UsersIcon,
            text: "Friends",
          },
          {
            Icon: UserGroupIcon,
            text: "Groups",
          },
          {
            Icon: ShoppingBagIcon,
            text: "MarketPlace",
          },
          {
            Icon: ComputerDesktopIcon,
            text: "Watch",
          },
          {
            Icon: CalendarIcon,
            text: "Events",
          },
          {
            Icon: ClockIcon,
            text: "Memories",
          },
          {
            Icon: ChevronDownIcon,
            text: "See More",
          },
        ].map(({ Icon, text }, index) => {
          return (
            <div className="flex items-center space-x-2 cursor-pointer">
              <Icon
                key={index}
                width={35}
                height={35}
                className="text-blue-500 p-1 md:p-0"
              />
              <span className="font-semibold hidden md:block text-gray-600">{`${text}`}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
