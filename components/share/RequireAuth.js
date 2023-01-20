import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import auth from "./../../config/firebase.init";
import Loading from "./Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user?.emailVerified) {
      router.push("/login", router.asPath);
    }
  }, [router, user, loading]);
  if (loading) {
    return <Loading></Loading>;
  }

  return <>{user?.emailVerified && children}</>;
};

export default RequireAuth;
