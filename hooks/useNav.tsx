// hooks/useNav.ts
import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";

interface UseNavReturn {
  navbar: boolean;
  navbarLogo: ReactNode;
}

const useNav = (): UseNavReturn => {
  const [navbar, setNavbar] = useState<boolean>(false);

  const [navbarLogo, setNavbarLogo] = useState<ReactNode>(
    <Image width={100} height={100} src="/images/Logo.png" alt="Logo" />,
  );

  const changeBackground = (): void => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const changeLogo = (): void => {
    if (window.scrollY >= 300) {
      setNavbarLogo(
        <Image
          key="scrolled-logo"
          width={100}
          height={100}
          src="/images/Logo.png"
          alt="Logo Scrolled"
        />,
      );
    } else {
      setNavbarLogo(
        <Image
          key="default-logo"
          width={100}
          height={100}
          src="/images/Logo.png"
          alt="Logo Default"
        />,
      );
    }
  };

  useEffect(() => {
    changeLogo();
    window.addEventListener("scroll", changeLogo);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", changeLogo);
    };
  }, []);

  return { navbar, navbarLogo };
};

export default useNav;
