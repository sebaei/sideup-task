import Image from "next/image";
import { useState } from "react";
import sideupLogo from "../../public/assets/sideupLogo.jpg";
import disk from "../../public/assets/disk.jpg";

import { sidebarItems } from "../../public/constants";

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col align-center bg-white">
        <Image
          src={sideupLogo}
          alt="logo"
          className="w-full m-auto h-8 object-contain"
        />
        {sidebarItems.map((item, index) => (
          <div key={index} className="flex flex-row">
            <Image src={disk} alt="disk" className="w-5 h-6" />
            <span className="ml-2">{item}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
