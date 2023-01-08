import Image from "next/image";
import notification from "../../public/assets/notification.png";
import sideupLogo from "../../public/assets/sideupLogo.jpg";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import profile from "../../public/assets/profile.png";
import USFlag from "../../public/assets/USFlag.png";
import EgyptFlag from "../../public/assets/EgyptFlag.png";
import { useState } from "react";
import { sidebarItems } from "../../public/constants";
import { PurpleDisk, BlackDisk } from "../../public/constants";
import styles from "../../public/style";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="hidden sm:flex w-[60%] justify-end ml-auto  ">
        <button className="border-2 min-w-[206px] h-[50px] rounded-lg border-[#CB3E90] text-[#CB3E90] px-3  cursor-pointer my-5 mr-5">
          <p className={`${styles.gridTitle}`}>Generate Order Link</p>
        </button>
        <select
          className={`border-2 w-[140px] h-[47px] rounded-lg border-[#CB3E90] text-[#CB3E90] pr-5 cursor-pointer my-5 mr-5 ${styles.gridTitle}`}
        >
          <option>Request</option>
        </select>
        <select
          className={`border-2 w-[158px] h-[47px] rounded-lg border-[#CB3E90] bg-[#CB3E90]  text-white mr-2 my-5 pr-3 cursor-pointer font-poppins ${styles.gridTitle}`}
        >
          <option>New Order</option>
        </select>
        <Image
          src={notification}
          alt="notification"
          className="my-auto cursor-pointer"
        />
        <Image src={profile} alt="profile" className="my-auto cursor-pointer" />
        <div className="hidden md:flex flex-col ">
          <div className="flex cursor-pointer mt-2 mr-5">
            <p className={`${styles.languages}`}>EN |</p>
            <Image
              src={USFlag}
              alt="united states flag"
              className="ml-1.5 h-4 mt-1"
            />
          </div>
          <div className="flex cursor-pointer mt-2 mr-5">
            <p className={`${styles.languages}`}>AR |</p>{" "}
            <Image src={EgyptFlag} alt="egypt flag" />
          </div>
        </div>
      </div>
      <div className="flex sm:hidden justify-evenly items-center bg-white pt-10">
        <Image src={profile} alt="profile" className="my-auto cursor-pointer" />
        <Image
          src={sideupLogo}
          alt="logo"
          className="w-full h-10 object-contain"
        />
        <div
          className={`p-6 cursor-pointer smooth-transition ${
            mobileMenuOpen ? "left-0" : "-left-full"
          }`}
        >
          {mobileMenuOpen ? (
            <RiCloseLine
              className="w-6 h-6 text-black mr-2"
              onClick={() => setMobileMenuOpen(false)}
            />
          ) : (
            <HiOutlineMenu
              className="w-6 h-6 text-black mr-2"
              onClick={() => setMobileMenuOpen(true)}
            />
          )}
        </div>
        <div
          className={`absolute top-0 h-screen w-full  backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
            mobileMenuOpen ? "left-0" : "-left-full"
          }`}
        >
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-row border-transparent cursor-pointer items-center pl-3  ${
                sidebarItems.length - 1 !== index ? "my-3" : "mt-20"
              } active:border-l-[#CB3E90] active:border-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {/* <Image src={disk} alt="disk" className="w-4 h-4" /> */}
              <PurpleDisk />
              <span className={`ml-2  active:text-[#CB3E90]`}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
