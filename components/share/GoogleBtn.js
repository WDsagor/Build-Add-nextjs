import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import auth from "../../config/firebase.init";

const GoogleBtn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const router = useRouter();
  useEffect(()=>{
    if (user) {
      toast.success("Log in successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
    } 
  },[user])
  const onSubmit = async () => {
    await signInWithGoogle()
    if (router.asPath != router.pathname) {
      router.push(router.asPath);
    } else if (router.asPath == router.pathname && user) {
      router.push("/");
    } else {
      router.push("/login");
     
    }
  };
  
  return (
    <div className="form-control mt-2">
      <div onClick={()=>onSubmit()} className="btn btn-primary text-white">
      <FaGoogle size={30} className=' text-red-400 mr-2 rounded-full bg-white p-1'> </FaGoogle>
      <span className=" normal-case text-lg font-normal"> Google</span>
      </div>
    </div>
  );
};

export default GoogleBtn;
