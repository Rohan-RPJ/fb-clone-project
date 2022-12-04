import { getSession, useSession } from "next-auth/react";
import { FbHome } from "./home";
import { Login } from "./login";
import Link from "next/link";
import protectedRoute from "./../utils/protectedRoute";

const Home = () => {
  const { session } = useSession();

  return <FbHome />;
  
};

export default Home;

export const getServerSideProps = protectedRoute();
