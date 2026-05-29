"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";

import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
// import auth from "./../config/firebase.init";
// import { useRouter } from "next/router";
// import { toast } from "react-toastify";
// import Loading from "./../components/share/Loading";
import GoogleBtn from "@/components/share/GoogleBtn";
import { useRouter } from "next/router";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //   const [signInWithEmailAndPassword, user, loading, hookError] =
  //     useSignInWithEmailAndPassword(auth);
  //   const [regUser, regLoading] = useAuthState(auth);
  //   const router = useRouter();

  //   useEffect(() => {
  //     if (hookError) {
  //       switch (hookError?.code) {
  //         case "auth/invalid-email":
  //           toast.error("Invalid email, please provide a valid email", {
  //             position: toast.POSITION.TOP_CENTER,
  //           });
  //           reset();
  //           break;
  //         case "auth/user-not-found":
  //           toast.error("Please Provide Valid User", {
  //             position: toast.POSITION.TOP_CENTER,
  //           });
  //           reset();
  //           break;
  //         case "auth/wrong-password":
  //           toast.error("Wrong Information", {
  //             position: toast.POSITION.TOP_CENTER,
  //           });
  //           reset();
  //           break;
  //         default:
  //           toast.error("something went wrong", {
  //             position: toast.POSITION.TOP_CENTER,
  //           });
  //           reset();
  //       }
  //     }
  //     if (user && regUser?.emailVerified) {
  //       toast.success("Log in successfully", {
  //         position: toast.POSITION.TOP_CENTER,
  //       });
  //     }
  //     // else {
  //     //   // if (regUser) {
  //     //   //   toast.error("Please Verify Your Email", {
  //     //   //     position: toast.POSITION.TOP_CENTER,
  //     //   //   });
  //     //   router.push("/login");
  //     //   // }
  //     // }
  //   }, [hookError, user, reset, regUser]);

  //   // console.log(user);

  //   if (loading || regLoading) return <Loading></Loading>;

  const onSubmit = async () => {
    // await signInWithEmailAndPassword(data.email, data.password);
    // if (router.asPath != router.pathname) {
    //   router.push(router.asPath);
    // } else if (router.asPath == router.pathname && user) {
    //   router.push("/");
    // } else {
    //   router.push("/login");
    //   reset();
    // }
  };

  return (
    <div
      style={{
        background: `url('/images/Carousel-img/grouping.png')`,
        backgroundSize: "cover",
      }}
      className="hero min-h-screen pb-5"
    >
      <div className="flex justify-center max-w-md w-full items-center p-2 ">
        <div className="rounded-xl w-full shadow-xl mt-20 bg-linear-to-t from-white  to-accent p-10 ">
          <div className="">
            <h1 className="text-2xl uppercase text-primary text-center ">
              Login now !
            </h1>
            <p className="mb-10 text-center">Provide your login credential</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="floating-label mb-10">
                <span className="bg-accent">Your Email</span>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                  type="email"
                  placeholder="Your email"
                  className="input w-full border-primary bg-transparent input-bordered"
                />
                {errors.email?.type === "required" && (
                  <small className=" text-error mt-1 self-end label-text-alt">
                    Email is required
                  </small>
                )}
                {errors.email?.type === "pattern" && (
                  <small className="text-error mt-1 self-end label-text-alt">
                    Your email is invalid
                  </small>
                )}
              </label>

              <label className="floating-label mb-10">
                <span className="bg-accent">Password</span>
                <input
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                  })}
                  type="password"
                  placeholder="Password"
                  className="input bg-transparent input-bordered border-primary w-full"
                />
                {errors.password?.type === "required" && (
                  <small className="text-error mt-2 self-end label-text-alt">
                    Password is required
                  </small>
                )}
                {errors.password?.type === "pattern" && (
                  <small className="text-error mt-2 self-end label-text-alt">
                    Min 6 character in number, capital and small letter{" "}
                  </small>
                )}
              </label>

              <input
                type="submit"
                value="Login"
                className="btn btn-primary text-white uppercase w-full"
              />
              <div className="flex justify-between">
                <label className="flex flex-1 justify-between pt-5">
                  <small className="label-text-alt">
                    Are you New?{" "}
                    <Link
                      href="/register"
                      passHref
                      className=" text-primary font-bold link-hover"
                    >
                      Register now !
                    </Link>
                  </small>
                </label>
                <Link
                  href="/reset-password"
                  passHref
                  className=" text-sm text-slate-400 link link-hover"
                >
                  {" "}
                  Forgot password ?
                </Link>
              </div>
            </form>
            <div className="divider">or login using</div>
            <GoogleBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
