import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaSquareFacebook, FaYoutube } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="bg-linear-to-t from-accent to-white">
      <div className="footer grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-screen-2xl text-black mx-auto  p-10">
        <aside>
          <Image
            src="/images/footer-logo.png"
            height={50}
            width={200}
            alt="Footer Logo"
          />
          <p className="flex flex-row items-center  gap-5">
            <Link href="/">
              <FaSquareFacebook
                className="hover:scale-110 transition-all"
                color="#0B0B9C"
                size={25}
              />
            </Link>
            <Link href="/">
              <FaYoutube
                className="hover:scale-110 transition-all"
                color="red"
                size={30}
              />
            </Link>
            <Link href="/">
              <FcGoogle className="hover:scale-110 transition-all" size={25} />
            </Link>
            <Link href="/">
              <FaLinkedin
                className="hover:scale-110 transition-all"
                color="blue"
                size={25}
              />
            </Link>
          </p>
        </aside>
        <nav className="md:pl-10">
          <h2 className="footer-title opacity-100 text-black">Services</h2>
          <p className="link link-hover">Water Reducer</p>
          <p className="link link-hover">Damp Proofing</p>
          <p className="link link-hover">Exterior Design</p>
          <p className="link link-hover">Weather Coat Sealers</p>
          <p className="link link-hover">Site Planning</p>
        </nav>
        <nav>
          <h2 className="footer-title opacity-100 text-black">Company</h2>
          <Link href="/about" className="link link-hover">
            About us
          </Link>
          <Link href="/contact" className="link link-hover">
            Contact
          </Link>
          <Link href="#" className="link link-hover">
            Jobs
          </Link>
          <Link href="#" className="link link-hover">
            Press kit
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title opacity-100 text-black">Legal</h6>
          <Link href="#" className="link link-hover">
            Terms of use
          </Link>
          <Link href="#" className="link link-hover">
            Privacy policy
          </Link>
          <Link href="#" className="link link-hover">
            Cookie policy
          </Link>
        </nav>
      </div>
      <div className="border-t border-gray-400 max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-10 py-4 sm:py-6">
        <div className="text-center flex justify-between text-sm sm:text-base text-gray-600">
          <p>
            Super FIXIT &copy; {new Date().getFullYear()} &bull; All Rights
            Reserved.
          </p>
          <p>
            Developed by
            <span className="font-semibold hover:text-blue-600 transition-colors ml-2">
              Sagar Edabr
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
