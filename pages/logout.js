import { getSession, signOut } from "next-auth/react";

const logout = () => {
  return (
    <div>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default logout;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  return {
    props: {},
  };
}
