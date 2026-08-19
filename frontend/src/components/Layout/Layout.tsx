import Navbar from "../Navbar"
import Footer from "../Footer";
import { Outlet, ScrollRestoration } from "react-router"

export default function Layout() {
  return (
    <div className="bg-[#21222D] text-[#A6AEC8]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
        <ScrollRestoration />
      </main>
      <Footer />
    </div>
  );
};