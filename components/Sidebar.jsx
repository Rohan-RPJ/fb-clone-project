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

const Sidebar = ({ session }) => {
  return (
    <section className="p-1 md:pt-6 md:pl-2 pt-8 pr-0 flex-col sm:space-y-4">
      <div className="flex items-center space-x-1 mt-2 mb-4 cursor-pointer pt-0 pb-2 px-2">
        <div className="w-[40px] h-[40px] relative overflow-hidden rounded-full flex items-center justify-center">
          <CustomImage
            // width={40}
            // height={40}
            src={session?.user.image}
            alt="User Image"
            className="rounded-full"
          />
        </div>
        <p className="font-semibold hidden sm:block text-gray-600 text-sm md:text-base w-24 truncate">
          {session?.user.name}
        </p>
      </div>

      <div className="flex-col space-y-1">
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
            <div
              key={index}
              className="flex items-center space-x-1 md:space-x-3 cursor-pointer md:hover:bg-gray-200 p-1 md:px-2 md:py-4 rounded-md"
            >
              <Icon
                width={28}
                height={28}
                className="text-blue-500 p-1 md:p-0"
              />
              <span className="font-semibold hidden sm:block sm:text-xs md:text-base text-gray-600">{`${text}`}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
