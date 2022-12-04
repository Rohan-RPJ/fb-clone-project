import { getSession } from "next-auth/react";

const protectedRoute = () => {
  return async function getServerSideProps(context) {
    const session = await getSession(context);
    // console.log("context", context.resolvedUrl);
    if (!session) {
      return {
        redirect: {
          destination: "/login",
        },
      };
    }

    return {
      props: {
        session: session,
      },
    };
  };
};

export default protectedRoute;
