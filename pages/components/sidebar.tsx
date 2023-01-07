import { useState } from "react";
import sideupLogo from "../../public/assets/sideupLogo.jpg";
import disk from "../../public/assets/sideupLogo.jpg";

import { sidebarItems } from "../../public/assets/constants";

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col align-center bg-white">
        <img src={sideupLogo} alt="logo" className="w-14 h-8 object-contain" />
        {sidebarItems.map((item, index) => (
          <div key={index} className="flex flex-row">
            <img src={disk} className="w-4 h-4" />
            <span className="ml-2">{item}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
