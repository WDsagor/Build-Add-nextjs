import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DashboardLayout from "../../components/DashboardLayout";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [imgUrl, setImgurl] = useState();

  const {
    register,

    handleSubmit,
    formState: { isDirty, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fristName: "Sagar",
      lastName: "Edbar",
      email: "sagar@email.com",
      phoneNumber: "01612175249",
      presentAdd: "Null",
      permanentAdd: "Null",
    },
  });
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const url = URL.createObjectURL(e.target.files[0]);
      setImgurl(url);
    }
  };
  // const url = URL.createObjectURL(imgUrl);
  console.log(imgUrl);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <DashboardLayout title={"Profile Page"}>
      <div className="max-w-screen-2x md:mx-auto border rounded-xl relative p-5 mb-12 m-2">
        <h1 className="text-primary font-bold text-2xl py-2">My Profile</h1>
        <hr />
        <button
          onClick={() => setIsEdit(!isEdit)}
          className="btn btn-circle btn-primary btn-outline text-primary capitalize absolute top-2 right-2 z-10">
          {isEdit ? "X" : "Edit"}
        </button>
        <div className="flex flex-col lg:flex-row gap-5 align-top justify-between">
          <div className="max-w-sm flex lg:mr-20 flex-col mx-auto gap-5">
            <label htmlFor="profileImg">
              <div className="avatar p-10">
                <div className=" w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {imgUrl ? (
                    // <img src={imgUrl} />
                    <Image
                      width={300}
                      height={300}
                      src={imgUrl}
                      alt="Adaption"
                    />
                  ) : (
                    <Image
                      width={300}
                      height={300}
                      src="/images/Products-img/A-20-1.jpg"
                      alt="Adaption"
                    />
                  )}
                </div>
              </div>
            </label>
            <input
              className=" hidden cursor-pointer"
              id="profileImg"
              type="file"
              name="profileImg"
              onChange={imageChange}
              disabled={!isEdit}
            />

            {isEdit ? (
              <button className="btn btn-primary w-3/5 mx-auto flex capitalize text-white ">
                Update now
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(!isEdit)}
                className="btn btn-primary w-3/5 mx-auto flex capitalize text-white ">
                Edit profile
              </button>
            )}
          </div>

          <div className="md:w-screen md:max-w-xl py-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className=" text-xl">Personal Information </h1>

              <div className="form-control w-full p-1">
                <label>Frist name</label>
                <input
                  {...register("fristName", {
                    required: true,
                  })}
                  type="text"
                  className="input input-bordered w-full input-ghost disabled:bg-transparent text-xl disabled:text-primary disabled:p-0 disabled:border-hidden disabled:cursor-text"
                  disabled={!isEdit}
                />
                {errors?.fristName?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Frist name is required
                  </small>
                )}
              </div>
              <div className="form-control w-full  p-1">
                <label>Last name</label>
                <input
                  {...register("lastName", {
                    required: true,
                  })}
                  type="text"
                  className="input input-bordered w-full input-ghost disabled:bg-transparent text-xl disabled:text-primary disabled:p-0 disabled:border-hidden disabled:cursor-text"
                  disabled={!isEdit}
                />
                {errors?.lastName?.type === "required" && (
                  <small className=" text-red-500 mt-1 self-end label-text-alt ">
                    Last name is required
                  </small>
                )}
              </div>

              <div className="form-control w-full  p-1">
                <label>Phone number</label>
                <input
                  {...register("phoneNumber", {
                    required: true,
                  })}
                  type="number"
                  className="input input-bordered w-full input-ghost disabled:bg-transparent text-xl disabled:text-primary disabled:p-0 disabled:border-hidden disabled:cursor-text"
                  disabled={!isEdit}
                />
                {errors?.phoneNumber?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Please provide valid mobile number
                  </small>
                )}
              </div>
              <div className="form-control w-full  p-1">
                <label>
                  Email address{" "}
                  <span className=" text-xs text-slate-400">
                    (Can not change this field)
                  </span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="input input-bordered w-full input-ghost disabled:bg-transparent text-xl disabled:text-primary disabled:p-0 disabled:border-hidden disabled:cursor-text"
                  disabled
                />
              </div>

              <div className="form-control w-full p-1">
                <label>Present address</label>
                <textarea
                  {...register("presentAdd", {
                    required: true,
                  })}
                  disabled={!isEdit}
                  className="textarea textarea-bordered  disabled:textarea-ghost max-w-full w-full disabled:bg-transparent text-xl disabled:text-primary disabled:p-0 disabled:border-hidden disabled:cursor-text resize h-28"></textarea>
                {errors?.presentAdd?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Please provide present address
                  </small>
                )}
              </div>
              <div className="form-control w-full p-1">
                <label>Permanent address</label>
                <textarea
                  {...register("permanentAdd", {
                    required: true,
                  })}
                  disabled={!isEdit}
                  className="textarea textarea-bordered  disabled:textarea-ghost max-w-full w-full disabled:bg-transparent text-xl disabled:text-primary disabled:p-0 disabled:border-hidden disabled:cursor-text resize h-28"></textarea>
                {errors?.permanentAdd?.type === "required" && (
                  <small className="  text-red-500 mt-1 self-end label-text-alt ">
                    Please provide permanent address
                  </small>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-5 text-white w-2/5 mx-auto flex "
                disabled={!isDirty}>
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
