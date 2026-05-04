"use client";
import Image from "next/image";
import { FaHome, FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";
import Certified from "../(home)/Certified";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const page = () => {
  const aboutRef = useRef(null);
  const addressRef = useRef(null);
  const certifiedRef = useRef(null);

  useGSAP(() => {
    // Initial animations
    gsap.fromTo(
      aboutRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
    );

    gsap.fromTo(
      addressRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.3 },
    );

    gsap.fromTo(
      certifiedRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.6 },
    );
  }, []);

  return (
    <main>
      <div className="max-w-screen-2xl mx-auto relative">
        <Image
          width={1080}
          height={500}
          loading="eager"
          className="w-full mx-auto"
          src="/images/About.jpg"
          alt=""
        />

        <div className="card lg:card-side bg-base-100 flex lg:flex-row-reverse lg:justify-between px-3 mt-5 pb-8">
          <div ref={aboutRef} className="lg:w-1/2 lg:pr-24">
            <h2 className="text-3xl font-bold py-5 text-blue-500">About us</h2>
            <p className="p-2 text-justify">
              <span className="font-bold text-primary">Super FIXIT</span> the
              finest quality raw materials are used to produce high quality raw
              materials imported from Germany, South Korea, South Africa,
              Malaysia, China, India. As a result, we have been able to draw the
              market attention to our{" "}
              <span className="font-bold text-primary">Super FIXIT</span>{" "}
              branded admixture within a very short period of time. Also, we are
              actively involved in various construction projects through the
              country.{" "}
              <span className="font-bold text-primary">Super FIXIT</span>{" "}
              Construction Chemical Company Engineering also importing building
              materials to meet the desired level of quality products. It will
              be an obvious to mention that, we have been able to come so far by
              a team of highly dedicated and very energetic young professionals.
              As a result. The level of our customers satisfactions are crossing
              its limits day by day.
            </p>
          </div>

          <div ref={addressRef} className="mt-5 lg:mt-0 lg:pl-24">
            <Image width="200" height="60" src="/images/logo.png" alt="Logo" />
            <h2 className="text-3xl font-bold py-5 text-blue-500">Address</h2>
            <p className="flex items-center">
              <FaHome className="mr-2" />
              <span>
                Haque Tower, Samimbagh, Matuail, Jatrabari, Dhaka-1362.
              </span>
            </p>
            <p>
              <a
                href="mailto:infosuperfixit@gmail.com"
                className="flex items-center"
              >
                <FaEnvelope className="mr-2" />
                <span>infosuperfixit@gmail.com</span>
              </a>
            </p>
            <p>
              <a href="tel:+880 1611117696" className="flex items-center">
                <FaPhoneSquareAlt className="mr-2" />
                <span>+880 1611117696</span>
              </a>
            </p>
          </div>
        </div>

        <div
          ref={certifiedRef}
          style={{
            background: `url("/images/testimg.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="text-white"
        >
          <Certified />
        </div>
      </div>
    </main>
  );
};

export default page;
