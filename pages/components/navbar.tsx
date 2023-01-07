import notification from "../../public/assets/notification.jpg";
import profile from "../../public/assets/profile.jpg";

const Navbar = () => {
  return (
    <div className="flex w-full justify-end">
      <div>Generate Order Link</div>
      <select>Request</select>
      <select>New Order</select>
      <img src={notification} />
      <img src={profile} />
    </div>
  );
};

export default Navbar;
