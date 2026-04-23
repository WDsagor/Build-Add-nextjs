import { FaFacebookF, FaYoutube, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="bg-[#05554C] top-0 z-50 w-full">
      <div className="max-w-screen-2xl mx-auto md:flex justify-around items-center">
        <div className="flex justify-center text-xl py-1">
          {/* Facebook - Use <a> not <Link> */}
          <a
            href="https://www.facebook.com/superfixit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 mx-3 cursor-pointer"
          >
            <FaFacebookF />
          </a>

          {/* YouTube - Add your actual YouTube URL */}
          <a
            href="https://www.youtube.com/@yourchannel" // ← CHANGE THIS to your real URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-400 mx-3 text-2xl cursor-pointer"
          >
            <FaYoutube />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+8801673040503"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500 mx-3 cursor-pointer"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="flex text-white align-middle flex-row justify-center text-xs md:text-sm pb-1">
          {/* Phone */}
          <a href="tel:+880 1611117696" className="hover:text-yellow-300">
            HOTLINE +880 1611117696
          </a>

          {/* Email */}
          <a
            href="mailto:infosuperfixit@gmail.com"
            className="group flex justify-center hover:text-yellow-300 ml-5"
          >
            <FaEnvelope className="text-white mr-2 cursor-pointer sm:text-xs md:text-lg group-hover:text-yellow-300" />
            <span>infosuperfixit@gmail.com</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default TopHeader;
