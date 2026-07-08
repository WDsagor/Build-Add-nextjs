"use client";
import GoogleBtn from "@/components/share/GoogleBtn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const page = () => {
  const [passwordEye, setPasswordEye] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);
  const fromRef = useRef(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });
  const handlePassSee = () => {
    setPasswordEye(!passwordEye);
  };
  const handleConPassSee = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
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
  useGSAP(() => {
    // Initial animations
    gsap.fromTo(
      fromRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
    );
  }, []);
  return (
    <div
      className="hero min-h-screen pb-5"
      style={{
        background: `url('/images/Carousel-img/grouping.png')`,
        backgroundSize: "cover",
      }}
    >
      <title>Register | Super FIXIT Ltd</title>
      <div
        ref={fromRef}
        className="max-w-md mx-auto  p-5 sm:p-10 bg-linear-to-b from-accent to-white rounded-xl shadow-xl  "
      >
        <div className="text-center pb-10">
          <h1 className="text-3xl font-bold  text-primary">Register here</h1>
          <p>Provide your valid information</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="text-black">
          <div className="grid lg:grid-flow-col gap-5 mb-5">
            <label className="floating-label">
              <span>First name</span>
              <input
                {...register("fname", {
                  required: true,
                })}
                type="text"
                placeholder="Enter your frist name"
                className="input w-full input-bordered bg-transparent border-primary/50  "
              />
              {errors.fname?.type === "required" && (
                <small className=" text-error mt-1 self-end label-text-alt ">
                  Frist name is required
                </small>
              )}
            </label>
            <label className="floating-label">
              <span>Last name</span>
              <input
                {...register("lname", {
                  required: true,
                })}
                type="text"
                placeholder="Enter your last name"
                className="input w-full input-bordered bg-transparent border-primary/50  "
              />
              {errors.lname?.type === "required" && (
                <small className=" text-error mt-1 self-end label-text-alt ">
                  Last name is required
                </small>
              )}
            </label>
          </div>

          <label className="floating-label mb-5">
            <span>Email</span>
            <input
              {...register("email", {
                required: true,
                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              })}
              type="email"
              placeholder="Your email"
              className="input w-full input-bordered bg-transparent border-primary/50  "
              autoComplete="off"
            />
            {errors.email?.type === "required" && (
              <small className=" text-error mt-1 self-end label-text-alt">
                Email is required
              </small>
            )}
            {errors.email?.type === "pattern" && (
              <small className=" text-error mt-1 self-end label-text-alt">
                Your email is invalid
              </small>
            )}
          </label>

          <label className="floating-label mb-5">
            <span>Phone number</span>
            <input
              {...register("phone", {
                required: true,
              })}
              type="number"
              placeholder="Your contact number"
              className="input w-full input-bordered bg-transparent border-primary/50  "
            />
            {errors.phone?.type === "required" && (
              <small className=" text-error mt-1 self-end label-text-alt ">
                Please enter your phone number
              </small>
            )}
          </label>

          <label className="floating-label mb-5 relative">
            <span>Password</span>
            <input
              {...register("password", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
              })}
              type={passwordEye === false ? "password" : "text"}
              placeholder="Password"
              className="input bg-transparent input-bordered border-primary w-full"
            />
            <div className="text-xl absolute top-3 right-3">
              {passwordEye === false ? (
                <AiFillEyeInvisible onClick={handlePassSee} />
              ) : (
                <AiFillEye onClick={handlePassSee} />
              )}
            </div>
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
          <label className="floating-label mb-10 relative">
            <span>Confirm Password</span>
            <input
              {...register("confirmPassword", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                validate: (value) => value === password,
              })}
              type={confirmPasswordEye === false ? "password" : "text"}
              placeholder="Confirm Password"
              className="input bg-transparent input-bordered border-primary w-full"
            />
            <div className="text-xl absolute top-3 right-3">
              {confirmPasswordEye === false ? (
                <AiFillEyeInvisible onClick={handleConPassSee} />
              ) : (
                <AiFillEye onClick={handleConPassSee} />
              )}
            </div>
            {errors.confirmPassword?.type === "validate" && (
              <small className="text-error mt-2 self-end label-text-alt">
                Password not match
              </small>
            )}
          </label>

          <div className="form-control mt-6">
            <input
              type="submit"
              value="Confirm"
              disabled={!isDirty || !isValid || password !== confirmPassword}
              className="btn w-full btn-accent uppercase "
            />
          </div>
        </form>
        <label className="flex flex-1 justify-between pt-2">
          <small className="label-text-alt">
            All ready registered ?{" "}
            <Link
              href="/login"
              passHref
              className=" text-primary font-bold link-hover"
            >
              Login now
            </Link>
          </small>
        </label>
        <div className="divider">or register using</div>
        <GoogleBtn />
      </div>
    </div>
  );
};

export default page;
