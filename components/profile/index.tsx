import Image from "next/image";
import Header from "./header";
import StatsGrid from "./statsGrid";

const Profile = () => {
  return (
    <section className="px-6">
      <Header />
      <StatsGrid />
    </section>
  );
};

export default Profile;
