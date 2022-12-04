import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";

const DarkModeToggler = ({ darkMode, darkModeHandler, className }) => (
  <div className={`flex items-center ${className} bg-gray-100 rounded-full`}>
    <MoonIcon
      width={25}
      height={25}
      className={`${
        darkMode && "hidden"
      } text-gray-500 rounded-full p-0.5 cursor-pointer hover:text-violet-400 bg-gradient-to-r hover:from-gray-800 hover:to-gray-400 opacity-60`}
      onClick={() => darkModeHandler()}
    />
    <SunIcon
      width={25}
      height={25}
      className={`${
        !darkMode && "hidden"
      } text-gray-500 rounded-full p-0.5 cursor-pointer hover:text-yellow-400 bg-gradient-to-r hover:from-yellow-500 hover:to-gray-600`}
      onClick={() => darkModeHandler()}
    />
  </div>
);

export default DarkModeToggler;
