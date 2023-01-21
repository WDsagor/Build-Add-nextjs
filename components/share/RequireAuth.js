import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import auth from "./../../config/firebase.init";
import Loading from "./Loading";

const RequireAuth = ({ children }) => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user?.emailVerified) {
      router.push("/login", router.asPath);
      return;
    }
  }, [router, user]);
  return <> {children}</>;
};

export default RequireAuth;
