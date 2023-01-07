import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex flex-1 flex-col bg-[#F7F7F7]">
        <Navbar />
        <Profile />
      </div>
    </div>
  );
}
