import profilePicture from "../../public/assets/profilePicture.jpg";
import singleOrder from "../../public/assets/singleOrder.jpg";
import bulkOrder from "../../public/assets/bulkOrder.jpg";
import Image from "next/image";
import { profileIcons } from "../../public/constants";

const Profile = () => {
  return (
    <>
      <div className="flex justify-evenly">
        <div className="w-[40%] flex bg-white p-4 rounded-lg shadow-xl">
          <Image src={profilePicture} alt="profile" />
          <p>Welcome Back, John Doe</p>
        </div>
        <div className="w-[20%] flex bg-white p-4 rounded-lg shadow-xl">
          <Image src={singleOrder} alt="single" />
          <select>
            <option>Single Order</option>
          </select>
        </div>
        <div className="w-[20%] flex bg-white p-4 rounded-lg shadow-xl">
          <Image src={bulkOrder} alt="bulk" />
          <p>Bulk Order</p>
        </div>
      </div>
      <div className="flex flex-1 justify-evenly">
        {profileIcons.map((icon, index) => (
          <Image key={index} src={icon} alt="icon" className="object-contain" />
        ))}
      </div>
    </>
  );
};

export default Profile;
