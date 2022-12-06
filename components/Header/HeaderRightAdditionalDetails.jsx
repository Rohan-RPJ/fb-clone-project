import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  ShareIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { useState, Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { signOut } from "next-auth/react";

const HeaderRightAdditionalDetails = ({ className, iconWidth, iconHeight }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const onHoverHandler = () => {
    setShowDropdown((prevState) => !prevState);
  };

  // useEffect(() => {
  //   document.onclick = (e) => {
  //     e.target.getAttribute("name") !== "dropdown" && setShowDropdown(false);
  //   };
  // }, []);

  return (
    <div className="">
      <ChevronDownIcon
        width={iconWidth}
        height={iconHeight}
        className={`${className}`}
        onClick={() => {
          onHoverHandler();
        }}
        // onMouseEnter={() => onHoverHandler()}
        name="dropdown"
      />

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        show={showDropdown}
      >
        <ul
          className={`${
            showDropdown ? "block" : "hidden"
          } absolute w-auto whitespace-nowrap h-auto bg-slate-50 right-0 top-11 rounded-md z-10 shadow-lg`}
          onMouseLeave={() => onHoverHandler()}
        >
          {[
            { Icon: UsersIcon, text: "Find Friends" },
            { Icon: Cog6ToothIcon, text: "Settings" },
            { Icon: ShareIcon, text: "Share" },
            {
              Icon: ArrowRightOnRectangleIcon,
              text: "Sign Out",
              onClickHandler: () => signOut(),
            },
          ].map(({ Icon, text, onClickHandler }, index, arr) => (
            <li
              key={index}
              className={`flex items-center space-x-1 pl-3 pr-14 py-2 cursor-pointer hover:bg-gray-200 ${
                index !== arr.length - 1
                  ? `${
                      index === 0 ? "rounded-tl-md rounded-tr-md pt-2 pb-2" : ""
                    }`
                  : "rounded-bl-md rounded-br-md"
              }`}
              onClick={() => onClickHandler()}
            >
              <Icon width={20} height={20} className={"text-gray-600"} />
              <p className="text-gray-900">{text}</p>
            </li>
          ))}
        </ul>
      </Transition>
    </div>
  );
};

export default HeaderRightAdditionalDetails;
