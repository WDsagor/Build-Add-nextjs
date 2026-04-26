import Image from "next/image";

const WhyChoose = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto w-full py-10 ">
      <h1 className="lg:text-4xl text-2xl text-center py-10 font-bold text-primary">
        WHY CHOOSE US
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-12 text-primary px-5">
        <div className="shadow-xl rounded-xl  bg-amber-100">
          <figure className="px-10 pt-10 flex justify-center bg-primary rounded-xl p-2 shadow-xl">
            <Image
              width={150}
              height={200}
              className=" w-2/6 mx-auto"
              src="/images/certified/certified-image.png"
              alt="Qualified & Certified"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title lg:text-2xl uppercase py-5 font-bold">
              Qualified & Certified
            </h2>
            <p className=" text-justify">
              As a company we are registered and certified by various parts of
              the Government. Building Admixture Chemical pride ourselves on
              assuring all certifications are current and in line with
              Government legislation.
            </p>
          </div>
        </div>
        <div className="shadow-xl rounded-xl  bg-cyan-100">
          <figure className="px-10 pt-10 flex justify-center bg-secondary rounded-xl p-2 shadow-lg">
            <Image
              width={150}
              height={200}
              className=" w-2/6 mx-auto"
              src="/images/certified/Quality.png"
              alt="Quality"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title lg:text-2xl uppercase py-5 font-bold">
              Quality
            </h2>
            <p className=" text-justify">
              We have a team of skilled chemists, under whose supervision our
              chemical prepared. Trust is the most valuable thing to us. we want
              to be the most reliable service and 100% high quality product
              provider in our business, so we want to win your trust as a reward
              of our chemical.
            </p>
          </div>
        </div>
        <div className="shadow-xl rounded-xl bg-pink-100">
          <figure className="px-10 pt-10 flex justify-center bg-accent rounded-2xl shadow-lg p-2">
            <Image
              width={150}
              height={200}
              className=" w-2/6 mx-auto"
              src="/images/certified/trust.png"
              alt="Quality Trust"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title lg:text-2xl uppercase py-5 font-bold">
              Quality Trust
            </h2>
            <p className=" text-justify">
              We believe in result that’s We give high quality product and
              services. Trust is the most valuable thing to us. we want to be
              the most reliable service and high quality product provider in our
              business, so we want to win your trust as a reward of our
              chemical.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
