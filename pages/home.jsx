import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Widgets from "./../components/Widgets";
import Sidebar from "./../components/Sidebar";
import Main from "./../components/Main";
import { useSession, getSession } from "next-auth/react";
import nightwind from "nightwind/helper";

const Home = ({ posts }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // called only once
  useEffect(() => {
    // on Component Mount
    const darkModeFromLocalStg = localStorage.getItem("darkMode");
    if (darkModeFromLocalStg) {
      nightwind.enable(JSON.parse(darkModeFromLocalStg));
      setDarkMode(JSON.parse(darkModeFromLocalStg));
    }

    let timer = setTimeout(() => {
      setIsLoading(() => false);
    }, 1);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // on Component Mount
    localStorage.setItem("darkMode", darkMode);
    nightwind.enable(darkMode);
    // on Component Unmount
    return () => {};
  }, [darkMode]);

  const darkModeHandler = () => {
    setDarkMode((prevState) => !prevState);
  };

  const { data: session } = useSession();

  return (
    <div className={`${isLoading ? "hidden" : "block"} relative`}>
      {/* Header */}
      <Header
        darkMode={darkMode}
        darkModeHandler={darkModeHandler}
        session={session}
        className="fixed top-0 w-full z-10"
      />

      <div className="bg-gray-100 grid grid-cols-8 w-full h-screen overflow-auto pb-2 scrollbar-hide relative top-16 justify-center">
        <div className="hidden sm:block fixed md:w-1/4 h-full overflow-y-scroll scrollbar-hide md:scrollbar-default">
          {/* Sidebar */}
          <Sidebar session={session} />
        </div>

        {/* Since sidebar is fixed, so below div taking required width */}
        <div className="hidden sm:block sm:col-span-1 md:col-span-2"></div>

        <div className="w-full col-span-8 sm:col-span-7 md:col-span-6 lg:col-span-4 px-1 sm:px-10 mb-2">
          {/* Main */}
          <Main session={session} posts={posts} />
        </div>

        <div className="hidden lg:block lg:col-span-2 right-0"></div>

        <div className="hidden lg:block right-0 z-0 fixed h-full w-1/4 pl-8 overflow-y-scroll scrollbar-hide">
          {/* Widgets */}
          <Widgets />
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  // console.log("context", context.resolvedUrl);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    // uname: "hasy",
    // uemail: "hasy@gmail.com",
    // u_add: "bandra",
    // upassword: "23403ws",
  });

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    // body: raw,
    // redirect: "",
  };

  let allPosts = [];

  await fetch(process.env.BASE_URL + "api/getAllPosts", requestOptions)
    .then((response) => response.text())
    .then((result) => (allPosts = JSON.parse(result)))
    .catch((error) => console.log("err while fetching posts: ", error));

  return {
    props: {
      session: session,
      posts: allPosts.posts,
    },
  };
}
