import React from "react";
import Feeds from "./Feeds";
import Posts from "./Posts";
import PostMyActivity from "./PostMyActivity";
import { useState } from "react";
import {
  BookOpenIcon,
  PlayCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

const Main = ({ session, posts }) => {
  const [allPosts, setAllPosts] = useState(posts);

  const addPostHandler = (post) => {
    setAllPosts((oldPosts) => [...oldPosts, post]);
  };

  return (
    <section className="flex-col py-4 sm:px-8 mt-1 sm:mt-3">
      <PostMyActivity
        className="sm:hidden mt-3.5 mb-1"
        session={session}
        addPostHandler={addPostHandler}
      />
      <div className={`bg-white sm:rounded-md pb-1 sm:pb-4 px-2 sm:px-4`}>
        <div className="hidden sm:flex items-center w-full justify-between pt-1 gap-1">
          {[
            {
              Icon: BookOpenIcon,
              text: "Stories",
            },
            {
              Icon: PlayCircleIcon,
              text: "Reels",
            },
            {
              Icon: VideoCameraIcon,
              text: "Rooms",
            },
          ].map(({ Icon, text }, index) => (
            <div
              className={`flex items-center justify-center gap-2 py-3 w-full h-full rounded-md ${
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
              <span className={``}>{text}</span>
            </div>
          ))}
        </div>

        <div className="w-full h-0.5 mb-2 sm:mb-4 bg-gray-50" />

        <Feeds />
      </div>
      <PostMyActivity
        className="hidden sm:block my-4"
        session={session}
        addPostHandler={addPostHandler}
      />
      <Posts className="my-2" posts={allPosts} session={session} />
    </section>
  );
};

export default Main;
