import Image from "next/image";
import { useState } from "react";
import sideupLogo from "../../public/assets/sideupLogo.jpg";

import { sidebarItems } from "../../public/constants";
import { PurpleDisk, BlackDisk } from "../../public/constants";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  return (
    <div className="hidden sm:flex flex-col bg-white shadow-xl min-w-[15%] h-[100vh]">
      <Image
        src={sideupLogo}
        alt="logo"
        className="w-full my-10 h-10 object-contain"
      />
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          className={`flex flex-row border-l-2 cursor-pointer items-center pl-3  ${
            sidebarItems.length - 1 !== index ? "my-3" : "mt-20"
          } ${
            activeTab === item ? "border-l-[#CB3E90]" : "border-l-transparent"
          }  `}
          onClick={() => setActiveTab(item)}
        >
          {/* <Image src={disk} alt="disk" className="w-4 h-4" /> */}
          {activeTab === item ? <PurpleDisk /> : <BlackDisk />}

          <span
            className={`ml-2  ${
              activeTab === item ? "text-[#CB3E90]" : "text-black"
            }`}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
