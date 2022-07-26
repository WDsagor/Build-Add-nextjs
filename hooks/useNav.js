import { useEffect, useState } from "react";
import Image from "next/image";

const useNav = () => {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false);

  //logo scroll when active
  const [navbarLogo, setNavbarLogo] = useState();

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  }, []);

  // logo scroll function
  const changeLogo = () => {
    if (window.scrollY >= 300) {
      setNavbarLogo(
        <span className="flex items-center self-center  font-bold whitespace-nowrap lg:text-2xl text-primary">
          <Image width={50} height={50} src="/images/logo-white.svg" alt="" />
        </span>
      );
    } else {
      setNavbarLogo(
        <span className="flex items-center self-center  font-bold whitespace-nowrap ">
          <Image width={50} height={50} src="/images/logo.svg" alt="" />
        </span>
      );
    }
  };

  useEffect(() => {
    changeLogo();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeLogo);
  }, []);

  return { navbar, navbarLogo };
};

export default useNav;
