import React from "react";
import { useForm } from "react-hook-form";
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaHome,
  FaEnvelope,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import Layout from "../components/Layout";
// import contactIMG from "/images/contactIMG.jpg";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <Layout title="Contact">
      <div
        style={{
          background: `url("/images/contactIMG.jpg")`,
          backgroundSize: "cover",
        }}
        className=" hero min-h-screen">
        <div className="hero-overlay bg-opacity-80"></div>
        <div className=" max-w-screen-2xl mx-auto">
          <div className=" lg:flex justify-between text-neutral-content">
            <div className="max-w-md justify-start align-middle px-2 lg:mr-20 lg:mt-20">
              <h1 className="mb-5 text-5xl font-bold pt-10">Contact us</h1>
              <p className=" flex items-center">
                <FaHome className="mr-2" />
                <span>73, College Road, Matuail, Jatrabari, Dhaka-1362.</span>
              </p>
              <p>
                <a
                  href="mailto:buildadltd@gmail.com"
                  className=" flex items-center">
                  <FaEnvelope className="mr-2" />
                  <span>buildadltd@gmail.com</span>
                </a>
              </p>
              <p>
                <a href="tel:+8801912085555" className=" flex items-center">
                  <FaPhoneSquareAlt className="mr-2" />
                  <span>+88 01912085555, +88 01912085588</span>
                </a>
              </p>
              <p className="my-5 flex align-middle">
                <a
                  href="https://www.facebook.com/buildingadmixture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-5 btn btn-primary text-white btn-sm">
                  <FaFacebookSquare className="text-lg mr-2" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://wa.me/+8801673040503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-white btn-sm">
                  <FaWhatsappSquare className="text-lg mr-2" />
                  <span>Whatsapp</span>
                </a>
              </p>
            </div>
            <div className="max-w-lg shadow-lg shadow-white rounded-lg mt-14 p-5 mb-5">
              <h2 className=" text-2xl uppercase text-center text-primary">
                Provide your Information
              </h2>
              <p className=" uppercase text-sm pb-10 text-center">
                We are contact as soon as posibale{" "}
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className=" ">
                <div className=" lg:grid lg:grid-flow-col lg:gap-3 ">
                  <div className="form-control">
                    <label className="label ">
                      <span className="label-text text-white after:content-['*'] after:ml-0.5 after:text-[#ff780a]">
                        Frist name
                      </span>
                    </label>
                    <input
                      {...register("fname", {
                        required: true,
                      })}
                      type="text"
                      placeholder="Enter your frist name"
                      className="input input-bordered bg-transparent border-primary/50 text-white mb-3"
                    />
                    {errors.fname?.type === "required" && (
                      <small className=" text-[#ff780a] mt-1 self-end label-text-alt ">
                        Frist name is required
                      </small>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label ">
                      <span className="label-text text-white after:content-['*'] after:ml-0.5 after:text-[#ff780a]">
                        Last name
                      </span>
                    </label>
                    <input
                      {...register("lname", {
                        required: true,
                      })}
                      type="text"
                      placeholder="Enter your last name"
                      className="input input-bordered bg-transparent border-primary/50 text-white mb-3"
                    />
                    {errors.lname?.type === "required" && (
                      <small className=" text-[#ff780a] mt-1 self-end label-text-alt ">
                        Last name is required
                      </small>
                    )}
                  </div>
                </div>
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-white">Company name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Company name"
                    className="input input-bordered bg-transparent border-primary/50 text-white mb-3"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-white after:content-['*'] after:ml-0.5 after:text-[#ff780a]">
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
                    className="input input-bordered bg-transparent border-primary/50 text-white mb-3"
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
                </div>
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-white after:content-['*'] after:ml-0.5 after:text-[#ff780a]">
                      Phone number
                    </span>
                  </label>
                  <input
                    {...register("phone", {
                      required: true,
                    })}
                    type="number"
                    placeholder="+880 1700 000000"
                    className="input input-bordered bg-transparent border-primary/50 text-white mb-3"
                  />
                  {errors.phone?.type === "required" && (
                    <small className=" text-[#ff780a] mt-1 self-end label-text-alt ">
                      Please enter your phone number
                    </small>
                  )}
                </div>
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-white after:content-['*'] after:ml-0.5 after:text-[#ff780a]">
                      Massages
                    </span>
                  </label>
                  <textarea
                    {...register("massages", {
                      required: true,
                    })}
                    type="textarea"
                    placeholder="Type here your massages"
                    className="input h-36 input-bordered bg-transparent border-primary/50 text-white mb-3"
                  />
                  {errors.massages?.type === "required" && (
                    <small className=" text-[#ff780a] mt-1 self-end label-text-alt ">
                      Write your massages
                    </small>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="submit"
                    className="btn btn-primary text-white"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
