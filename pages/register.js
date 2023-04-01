import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import GoogleBtn from "../components/share/GoogleBtn";
import Head from "next/head";
import Layout from "../components/Layout";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "./../config/firebase.init";
import { toast } from "react-toastify";
import Loading from "./../components/share/Loading";
import { useRouter } from "next/router";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const [passwordEye, setPasswordEye] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const handlePassSee = () => {
    setPasswordEye(!passwordEye);
  };
  const handleConPassSee = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };
  const password = watch("password");
  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      toast.success("Register Successfully, Please Login", {
        position: toast.POSITION.TOP_CENTER,
      });
      toast.info("Verify link sent in your email", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (hookError) {
      switch (hookError?.code) {
        case "auth/email-already-in-use":
          toast.error("Already use email, Provide another email", {
            position: toast.POSITION.TOP_CENTER,
          });
          break;
        default:
          toast.error("something went wrong", {
            position: toast.POSITION.TOP_CENTER,
          });
      }
    }
  }, [hookError, router, user]);

  if (loading || updating) return <Loading></Loading>;

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data?.email, data?.password);
    await updateProfile({ displayName: data.name });

    router.push("/login");

    reset();
  };
  return (
    <Layout title="Register">
      <Head>
        <title>Register - Building Admixture Limited</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        style={{
          background: `url("/images/Carousel-img/grouping.png")`,
          backgroundSize: "cover",
        }}
        className="hero min-h-screen pb-5 mt-16 md:mt-16 ">
        <div className=" flex justify-center items-center md:w-[500px] flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-opacity-30 bg-black mt-20 shadow-white">
            <div className="card-body transition-all">
              <h1 className="text-2xl font-bold text-center pb-7 text-white">
                Register now !
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-white after:content-['*'] after:ml-0.5 after:text-[#FFF80A]">
                      Name
                    </span>
                  </label>
                  <input
                    {...register("name", {
                      required: true,
                    })}
                    type="text"
                    placeholder="Enter your full name"
                    className="input input-bordered bg-black text-white"
                  />
                  {errors.name?.type === "required" && (
                    <small className=" text-[#FFF80A] mt-1 self-end label-text-alt ">
                      Name is required
                    </small>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-white after:content-['*'] after:ml-0.5 after:text-[#FFF80A]">
                      Email
                    </span>
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
                    <small className=" text-[#FFF80A] mt-1 self-end label-text-alt">
                      Your email is invalid
                    </small>
                  )}
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text  text-white after:content-['*'] after:ml-0.5 after:text-[#FFF80A]">
                      Password
                    </span>
                  </label>
                  <div className=" relative flex flex-col">
                    <input
                      {...register("password", {
                        required: true,
                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                      })}
                      type={passwordEye === false ? "password" : "text"}
                      placeholder="Password"
                      className="input input-bordered  bg-black text-white w-full"
                    />

                    <div className="text-xl absolute top-4 right-5">
                      {passwordEye === false ? (
                        <AiFillEyeInvisible onClick={handlePassSee} />
                      ) : (
                        <AiFillEye onClick={handlePassSee} />
                      )}
                    </div>
                    {errors.password?.type === "required" && (
                      <small className=" text-[#FFF80A] mt-2 self-end label-text-alt">
                        Password is required
                      </small>
                    )}
                    {errors.password?.type === "pattern" && (
                      <small className=" text-[#FFF80A] mt-2 self-end label-text-alt">
                        Min 6 character in number, capital and small letter{" "}
                      </small>
                    )}
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-white after:content-['*'] after:ml-0.5 after:text-[#FFF80A]">
                      Confirm Password
                    </span>
                  </label>
                  <div className=" relative flex flex-col">
                    <input
                      {...register("confirm", {
                        required: true,
                        validate: (value) => value === password,
                      })}
                      type={confirmPasswordEye === false ? "password" : "text"}
                      placeholder="Confirm Password"
                      className="input input-bordered  bg-black text-white w-full"
                    />

                    <div className="text-xl absolute top-4 right-5">
                      {confirmPasswordEye === false ? (
                        <AiFillEyeInvisible onClick={handleConPassSee} />
                      ) : (
                        <AiFillEye onClick={handleConPassSee} />
                      )}
                    </div>
                    {errors.confirm?.type === "required" && (
                      <small className=" text-[#FFF80A] mt-2 self-end label-text-alt">
                        Password is required
                      </small>
                    )}
                    {errors.confirm?.type === "validate" && (
                      <small className=" text-[#FFF80A] mt-2 self-end label-text-alt">
                        The passwords do not match
                      </small>
                    )}
                  </div>
                </div>
                <label className="flex flex-1 justify-between py-5">
                  <p className="label-text-alt  text-white">
                    allready registered ?{" "}
                    <Link href="/login">
                      <a className=" text-primary font-bold link-hover">
                        Login
                      </a>
                    </Link>
                  </p>
                </label>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="submit"
                    className="btn btn-primary text-white"
                  />
                </div>
              </form>
              <div className="divider before:bg-white after:bg-white text-white">
                or register using
              </div>
              <GoogleBtn />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
