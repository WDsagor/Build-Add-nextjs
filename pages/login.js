import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import GoogleBtn from "../components/share/GoogleBtn";
import Layout from "../components/Layout";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "./../config/firebase.init";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Loading from "./../components/share/Loading";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const [regUser, regLoading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
        case "auth/invalid-email":
          toast.error("Invalid email, please provide a valid email", {
            position: toast.POSITION.TOP_CENTER,
          });
          reset();
          break;
        case "auth/user-not-found":
          toast.error("Please Provide Valid User", {
            position: toast.POSITION.TOP_CENTER,
          });
          reset();
          break;
        case "auth/wrong-password":
          toast.error("Wrong Information", {
            position: toast.POSITION.TOP_CENTER,
          });
          reset();
          break;
        default:
          toast.error("something went wrong", {
            position: toast.POSITION.TOP_CENTER,
          });
          reset();
      }
    }
    if (user && regUser?.emailVerified) {
      toast.success("Log in successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    // else {
    //   // if (regUser) {
    //   //   toast.error("Please Verify Your Email", {
    //   //     position: toast.POSITION.TOP_CENTER,
    //   //   });
    //   router.push("/login");
    //   // }
    // }
  }, [hookError, user, reset, regUser]);

  // console.log(user);

  if (loading || regLoading) return <Loading></Loading>;

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    if (router.asPath != router.pathname) {
      router.push(router.asPath);
    } else if (router.asPath == router.pathname && user) {
      router.push("/");
    } else {
      router.push("/login");
      reset();
    }
  };

  return (
    <Layout title="Log In">
      <div
        style={{
          background: `url('/images/Carousel-img/grouping.png')`,
          backgroundSize: "cover",
        }}
        className="hero min-h-screen pb-5 mt-10">
        <div className="flex justify-center items-center md:w-[500px] flex-col lg:flex-row-reverse">
          <div
            className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-opacity-30 bg-black mt-20 shadow-white"
            data-aos="zoom-in"
            data-aos-duration="1000">
            <div className="card-body">
              <h1 className="text-2xl font-bold text-center pb-7 text-white">
                Login now !
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    })}
                    type="email"
                    placeholder="Your email"
                    className="input input-bordered bg-black text-white"
                  />
                  {errors.email?.type === "required" && (
                    <small className=" text-[#FFF80A] mt-1 self-end label-text-alt">
                      Email is required
                    </small>
                  )}
                  {errors.email?.type === "pattern" && (
                    <small className="text-[#FFF80A] mt-1 self-end label-text-alt">
                      Your email is invalid
                    </small>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-white">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                    })}
                    type="password"
                    placeholder="Password"
                    className="input input-bordered  bg-black text-white"
                  />
                  {errors.password?.type === "required" && (
                    <small className="text-[#FFF80A] mt-2 self-end label-text-alt">
                      Password is required
                    </small>
                  )}
                  {errors.password?.type === "pattern" && (
                    <small className="text-[#FFF80A] mt-2 self-end label-text-alt">
                      Min 6 character in number, capital and small letter{" "}
                    </small>
                  )}
                </div>
                <label className="flex flex-1 justify-between py-5">
                  <p className="label-text-alt text-white">
                    Are you New?{" "}
                    <Link href="/register" passHref>
                      <a className=" text-primary font-bold link-hover">
                        Register now !
                      </a>
                    </Link>
                  </p>
                  <Link href="/reset-password" passHref>
                    <a className="label-text-alt text-primary link link-hover">
                      {" "}
                      Forgot password ?
                    </a>
                  </Link>
                </label>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary text-white"
                  />
                </div>
              </form>
              <div className="divider before:bg-white after:bg-white text-white">
                or login using
              </div>
              <GoogleBtn />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
