import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative flex">
      <Sidebar />
      <div></div>
    </div>
  );
}
