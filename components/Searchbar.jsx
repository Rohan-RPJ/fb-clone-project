import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import DarkModeToggler from "./DarkModeToggler";

const Searchbar = ({ className, darkMode, darkModeHandler }) => {
  return (
    <form className="sm:flex items-center sm:space-x-2 bg-gray-100 sm:bg-gray-75 sm:px-1 sm:py-1 md:px-1.5 md:py-1.5 lg:pr-2 lg:py-1.5 rounded-3xl cursor-pointer">
      <MagnifyingGlassIcon
        className={`w-auto sm:w-full text-gray-500 p-0.5 md:w-3/12 ${className}`}
        width={25}
        height={25}
      />
      <input
        type="text"
        className="hidden sm:block text-gray-400 bg-transparent outline-none w-full text-ellipsis text-sm lg:text-lg placeholder-opacity-0 sm:placeholder-opacity-100"
        placeholder="Search Facebook"
      />
      <DarkModeToggler
        darkMode={darkMode}
        darkModeHandler={darkModeHandler}
        className={"hidden sm:block"}
      />
    </form>
  );
};

export default Searchbar;
