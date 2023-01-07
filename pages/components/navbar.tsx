import Image from "next/image";
import notification from "../../public/assets/notification.jpg";
import profile from "../../public/assets/profile.jpg";
import USFlag from "../../public/assets/USFlag.jpg";
import EgyptFlag from "../../public/assets/EgyptFlag.jpg";

const Navbar = () => {
  return (
    <div className="flex w-full justify-end">
      <button className="border-2 rounded-lg border-[#CB3E90] text-[#CB3E90] p-4">
        Generate Order Link
      </button>
      <select className="border-2 rounded-lg border-[#CB3E90] text-[#CB3E90]">
        <option>Request</option>
      </select>
      <select className="border-2 rounded-lg border-[#CB3E90] bg-[#CB3E90]  text-white">
        <option>New Order</option>
      </select>
      <Image src={notification} alt="notification" />
      <Image src={profile} alt="profile" />
      <div className="flex flex-col">
        <div>
          EN | <Image src={USFlag} alt="united states flag" />
        </div>
        <div>
          {" "}
          AR | <Image src={EgyptFlag} alt="egypt flag" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
