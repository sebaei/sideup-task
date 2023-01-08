import Image from "next/image";
import notification from "../../public/assets/notification.png";
import profile from "../../public/assets/profile.png";
import USFlag from "../../public/assets/USFlag.png";
import EgyptFlag from "../../public/assets/EgyptFlag.png";

const Navbar = () => {
  return (
    <div className="flex w-[60%] justify-end ml-auto  ">
      <button className="border-2 w-[206px] h-[47px] rounded-lg border-[#CB3E90] text-[#CB3E90] px-3 cursor-pointer my-5 mr-5">
        <p>Generate Order Link</p>
      </button>
      <select className="border-2 w-[140px] h-[47px] rounded-lg border-[#CB3E90] text-[#CB3E90] pr-5 cursor-pointer my-5 mr-5">
        <option>Request</option>
      </select>
      <select className="border-2 w-[158px] h-[47px] rounded-lg border-[#CB3E90] bg-[#CB3E90]  text-white mr-2 my-5 pr-3 cursor-pointer">
        <option>New Order</option>
      </select>
      <Image
        src={notification}
        alt="notification"
        className="my-auto cursor-pointer"
      />
      <Image src={profile} alt="profile" className="my-auto cursor-pointer" />
      <div className="flex flex-col">
        <div className="flex cursor-pointer mt-2 p-2">
          {" "}
          EN |
          <Image
            src={USFlag}
            alt="united states flag"
            className="ml-1.5 h-4 mt-1"
          />
        </div>
        <div className="flex cursor-pointer mt-2 p-2">
          {" "}
          AR | <Image src={EgyptFlag} alt="egypt flag" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
