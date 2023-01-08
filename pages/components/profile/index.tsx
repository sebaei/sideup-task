import Image from "next/image";
import Header from "./header";
import StatsGrid from "./statsGrid";

const Profile = () => {
  return (
    <section className="mx-5">
      <Header />
      <StatsGrid />
    </section>
  );
};

export default Profile;