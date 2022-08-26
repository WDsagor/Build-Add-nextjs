import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import GoogleBtn from "../components/share/GoogleBtn";
import Layout from "../components/Layout";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};
  return (
    <Layout title='Log In'>
    
      <div
        style={{
          background: `url('/images/Carousel-img/grouping.png')`,
          backgroundSize: "cover",
        }}
        className="hero min-h-screen pb-5 mt-10"
      >
        <div className="flex justify-center items-center md:w-[500px] flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-opacity-30 bg-black mt-20 shadow-white">
            <div className="card-body">
              <h1 className="text-2xl font-bold text-center pb-7 text-white">Login now !</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })}
                    type="email"
                    placeholder="Your email"
                    className="input input-bordered bg-black text-white"
                  />
                  {errors.email?.type === "required" && (
                    <small className=" text-[#FFF80A] mt-1 self-end label-text-alt">Email is required</small>
                  )}
                  {errors.email?.type === "pattern" && (
                    <small className="text-[#FFF80A] mt-1 self-end label-text-alt">Your email is invalid</small>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-white">Password</span>
                  </label>
                  <input
                    {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/ })}
                    type="password"
                    placeholder="Password"
                    className="input input-bordered  bg-black text-white"
                  />
                  {errors.password?.type === "required" && (
                    <small className="text-[#FFF80A] mt-2 self-end label-text-alt">Password is required</small>
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
                      <a className=" text-primary font-bold link-hover">Register now !</a>
                    </Link>
                  </p>
                  <Link href="/reset-password" passHref>
                    <a className="label-text-alt text-primary link link-hover"> Forgot password ?</a>
                  </Link>
                </label>
                <div className="form-control mt-6">
                  <input type="submit" value="Login" className="btn btn-primary text-white" />
                </div>
              </form>
              <div className="divider before:bg-white after:bg-white text-white">or login using</div>
              <GoogleBtn />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
