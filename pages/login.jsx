import { getSession, signIn } from "next-auth/react";

const login = () => {
  return (
    <div>
      <button onClick={() => signIn()}>Login</button>
    </div>
  );
};

export default login;

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
    props: {
      
    },
  };
};