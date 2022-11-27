import React from "react";
import Feeds from "./Feeds";
import Posts from "./Posts";
import PostMyActivity from "./PostMyActivity";

const Main = () => {
  return (
    <section className="flex-col py-4 px-2 sm:px-8">
      <PostMyActivity className="sm:hidden mb-2" />
      <div className="">
        <Feeds />
      </div>
      <PostMyActivity className="hidden sm:block my-4" />
      <Posts className="my-2" />
    </section>
  );
};

export default Main;
