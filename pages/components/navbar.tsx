import Image from "next/image";
import notification from "../../public/assets/notification.png";
import profile from "../../public/assets/profile.png";
import USFlag from "../../public/assets/USFlag.png";
import EgyptFlag from "../../public/assets/EgyptFlag.png";

const Navbar = () => {
  return (
    <div className="flex w-[60%] justify-around ml-auto  ">
      <button className="border-2 rounded-lg border-[#CB3E90] text-[#CB3E90] px-3 cursor-pointer my-5 mr-5">
        Generate Order Link
      </button>
      <select className="border-2 rounded-lg border-[#CB3E90] text-[#CB3E90] px-5 cursor-pointer my-5">
        <option>Request</option>
      </select>
      <select className="border-2 rounded-lg border-[#CB3E90] bg-[#CB3E90]  text-white mr-2 my-5 px-3 cursor-pointer">
        <option>New Order</option>
      </select>
      <Image
        src={notification}
        alt="notification"
        className="mr-2 my-auto cursor-pointer"
      />
      <Image
        src={profile}
        alt="profile"
        className="mr-2 my-auto cursor-pointer"
      />
      <div className="flex flex-col">
        <div className=" cursor-pointer mt-2">
          {" "}
          EN | <Image src={USFlag} alt="united states flag" />
        </div>
        <div className="flex cursor-pointer mt-2">
          {" "}
          AR | <Image src={EgyptFlag} alt="egypt flag" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
