import Image from "next/image";
import profilePicture from "../../../public/assets/profilePicture.jpg";
import { profileIcons } from "../../../public/constants";
import styles from "../../../public/style";
import { SVG } from "../svgs";

const Header = () => {
  return (
    <>
      <div className="hidden lg:flex w-full">
        <div
          className={`flex items-center w-[48%] h-[80px] bg-white p-4 rounded-lg shadow-lg `}
        >
          <Image src={profilePicture} alt="profile" className="my-auto" />
          <p className={`${styles.header} ml-5`}>Welcome Back, John Doe</p>
        </div>
        <div className="flex justify-start items-center w-[21%] h-[80px] bg-white pl-3 rounded-lg shadow-lg mx-auto cursor-pointer">
          {SVG.Single}
          <select className={`${styles.gridTitle} ml-2`}>
            <option>Single Order</option>
          </select>
        </div>
        <div className="flex justify-center items-center w-[21%] h-[80px] bg-white p-2 rounded-lg shadow-lg cursor-pointer">
          {SVG.Bulk}
          <p className={`${styles.gridTitle} ml-2`}>Bulk Order</p>
        </div>
      </div>
      <div className="hidden md:flex flex-1 justify-between my-5">
        {profileIcons.map((icon, index) => (
          <Image key={index} src={icon} alt="icon" className="object-contain" />
        ))}
      </div>

      <div className="flex flex-col sm:hidden mt-4">
        <div className="flex justify-center items-center w-full h-[80px] bg-white p-4 rounded-lg shadow-lg">
          <Image src={profilePicture} alt="profile" className="my-auto" />
          <p className="text-[24px] ml-5">Welcome Back, John Doe</p>
        </div>
        <div className="flex justify-evenly my-4">
          {profileIcons.slice(0, 4).map((icon, index) => (
            <Image
              key={index}
              src={icon}
              alt="icon"
              className="object-contain"
            />
          ))}
        </div>
      </div>

      <div className="fixed sm:hidden right-5">
        <div className="grid gap-2 grid-cols-2">
          <div className="bg-white rounded-full p-2">{SVG.Bulk}</div>
          <div className="bg-white rounded-full p-2">{SVG.Plane}</div>
          <div className="bg-white rounded-full p-2">{SVG.Single}</div>
          <div className="bg-blue-500 rounded-full p-2 flex justify-center">
            {SVG.Plus}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
