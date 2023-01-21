import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import auth from "./../../config/firebase.init";
import { GetServerSideProps } from "next";
import Loading from "./Loading";

const RequireAuth = ({ children }) => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  // useEffect(() => {
  //   if (!user?.emailVerified) {
  //     router.push("/login", router.asPath);
  //     return;
  //   }
  // }, [router, user]);
  // console.log(user?.emailVerified);
  return <> {children}</>;
};

export default RequireAuth;

export async function getServerSideProps({ user }) {
  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {}, // will be passed to the page component as props
  };
}
