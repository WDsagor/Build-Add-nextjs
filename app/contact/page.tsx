"use client";
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaHome,
  FaEnvelope,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
type Inputs = {
  fname: string;
  lname: string;
  companyName: string;
  email: string;
  phone: number;
  massages: string;
};
const page = () => {
  const fromRef = useRef(null);
  const addressRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {};
  useGSAP(() => {
    // Initial animations
    gsap.fromTo(
      fromRef.current,
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
    );

    gsap.fromTo(
      addressRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.3 },
    );
  }, []);
  return (
    <div
      style={{
        background: `url("/images/contactIMG.jpg")`,
        backgroundSize: "cover",
      }}
      className=" hero min-h-screen"
    >
      <div className="hero-overlay "></div>
      <div className=" max-w-screen-2xl mx-auto">
        <div className=" lg:flex justify-between text-primary-content gap-10">
          <div
            ref={addressRef}
            className="max-w-md justify-start align-middle px-2 lg:mr-20 lg:mt-20"
          >
            <h1 className="mb-5 text-5xl font-bold pt-10">Contact us</h1>
            <p className=" flex items-center">
              <FaHome size={20} className="mr-2" />
              <span>Haque Tower, Samimbagh, Matuail,Jatrabari, Dhaka-1362</span>
            </p>
            <p>
              <a
                href="mailto:infosuperfixit@gmail.com"
                className=" flex items-center"
              >
                <FaEnvelope className="mr-2" />
                <span>infosuperfixit@gmail.com</span>
              </a>
            </p>
            <p>
              <a href="tel:+880 1611117696" className=" flex items-center">
                <FaPhoneSquareAlt className="mr-2" />
                <span>+880 1611117696</span>
              </a>
            </p>
            <p className="my-5 flex align-middle">
              <a
                href="https://www.facebook.com/superfixit"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-5 btn btn-primary text-white btn-sm"
              >
                <FaFacebookSquare className="text-lg mr-2" />
                <span>Facebook</span>
              </a>
              <a
                href="https://wa.me/+8801673040503"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-white btn-sm"
              >
                <FaWhatsappSquare className="text-lg mr-2" />
                <span>Whatsapp</span>
              </a>
            </p>
          </div>
          <div
            ref={fromRef}
            className="max-w-2xl shadow-lg bg-linear-to-r from-white  to-pink-200 text-primary rounded-lg mt-14 p-10 mb-5"
          >
            <h2 className=" text-2xl uppercase text-center text-accent">
              Provide your Information
            </h2>
            <p className="text-sm pb-10 text-center">
              We are contact as soon as posibale{" "}
            </p>
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
                <span>Company name</span>
                <input
                  type="text"
                  placeholder="Enter your Company name"
                  {...register("companyName")}
                  className="input input-bordered w-full bg-transparent border-primary/50  "
                />
              </label>

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

              <label className="floating-label mb-5">
                <span>Massages</span>
                <textarea
                  {...register("massages", {
                    required: true,
                  })}
                  placeholder="Type here your massages"
                  className="input w-full h-36 input-bordered bg-transparent border-primary/50  "
                />
                {errors.massages?.type === "required" && (
                  <small className=" text-[#ff780a] mt-1 self-end label-text-alt ">
                    Write your massages
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
        </div>
      </div>
    </div>
  );
};

export default page;
