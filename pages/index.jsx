import Header from "../components/Header";
import Sidebar from "./../components/Sidebar";
import Main from "./../components/Main";
import Widgets from "./../components/Widgets";
import { useState } from "react";
import nightwind from "nightwind/helper";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeHandler = () => {
    nightwind.enable(!darkMode);
    setDarkMode((prevState) => !prevState);
  };

  return (
    // <div className={darkMode && "dark"}>
    <div>
      {/* Header */}
      <Header darkMode={darkMode} darkModeHandler={darkModeHandler} />

      <div className="bg-gray-100 grid grid-cols-8 w-full h-screen overflow-auto pb-2 scrollbar-hide">
        <div className="hidden sm:block sm:col-span-1 md:col-span-2 sticky top-0">
          {/* Sidebar */}
          <Sidebar />
        </div>

        <div className="w-full col-span-8 sm:col-span-7 md:col-span-6 lg:col-span-4">
          {/* Main */}
          <Main />
        </div>
        <div className="hidden lg:block lg:col-span-2 sticky top-0">
          {/* Widgets */}
          <Widgets />
        </div>
      </div>
    </div>
  );
};

export default Home;
