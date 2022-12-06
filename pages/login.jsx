import { getSession, signIn } from "next-auth/react";

const Login = () => {
  signIn();

  return <div>Loading...</div>;
};

export default Login;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/home",
      },
    };
  }

  return {
    props: {},
  };
}
