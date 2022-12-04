import { FbHome } from "./home";
import protectedRoute from "./../utils/protectedRoute";

const Index = () => {
  return <FbHome />;
};

export default Index;

export const getServerSideProps = protectedRoute();
