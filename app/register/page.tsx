"use client";
import { useForm } from "react-hook-form";

const page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
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
    <div className="max-w-md mx-auto mt-24 bg-linear-to-b p-10 from-accent to-white rounded-xl shadow-xl ">
      <div className="text-center pb-10">
        <h1 className="text-2xl uppercase  text-primary">Register now</h1>
        <p>Provide your valid information</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="text-black">
        <div className=" lg:grid lg:grid-flow-col lg:gap-3 mb-5">
          <label className="floating-label">
            <span>First name</span>
            <input
              {...register("fname", {
                required: true,
              })}
              type="text"
              placeholder="Enter your frist name"
              className="input input-bordered bg-transparent border-primary/50  "
            />
            {errors.fname?.type === "required" && (
              <small className=" text-[#ff780a] mt-1 self-end label-text-alt ">
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
              className="input input-bordered bg-transparent border-primary/50  "
            />
            {errors.lname?.type === "required" && (
              <small className=" text-[#ff780a] mt-1 self-end label-text-alt ">
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
            <small className=" text-[#ff780a] mt-1 self-end label-text-alt">
              Email is required
            </small>
          )}
          {errors.email?.type === "pattern" && (
            <small className=" text-[#ff780a] mt-1 self-end label-text-alt">
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
            placeholder="01700 000000"
            className="input w-full input-bordered bg-transparent border-primary/50  "
          />
          {errors.phone?.type === "required" && (
            <small className=" text-[#ff780a] mt-1 self-end label-text-alt ">
              Please enter your phone number
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
        <label className="floating-label mb-10">
          <span className="bg-accent">Confirm Password</span>
          <input
            {...register("confirmPassword", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
              validate: (value) => value === password,
            })}
            type="password"
            placeholder="Password"
            className="input bg-transparent input-bordered border-primary w-full"
          />

          {errors.confirmPassword?.type === "validate" && (
            <small className="text-error mt-2 self-end label-text-alt">
              Password not match
            </small>
          )}
        </label>

        <div className="form-control mt-6">
          <input
            type="submit"
            value="Submit"
            className="btn btn-accent text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default page;
