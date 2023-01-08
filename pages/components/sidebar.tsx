import Image from "next/image";
import { useState } from "react";
import sideupLogo from "../../public/assets/sideupLogo.jpg";
import disk from "../../public/assets/disk.jpg";

import { sidebarItems } from "../../public/constants";
// import { Disk } from "../../public/constants";

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col bg-white shadow-xl min-w-[229px]">
      <Image
        src={sideupLogo}
        alt="logo"
        className="w-full my-10 h-10 object-contain"
      />
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          className={`flex flex-row items-center ml-3  ${
            sidebarItems.length - 1 !== index ? "my-3" : "mt-20"
          }`}
        >
          <Image src={disk} alt="disk" className="w-4 h-4" />
          {/* <Disk fill={"#CB3E90"} /> */}
          <span className={`ml-2  active:text-[#CB3E90]`}>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
