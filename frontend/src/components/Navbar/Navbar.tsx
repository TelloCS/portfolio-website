import { Link } from "react-router";
import Resume from "../../pages/Resume";

export default function Navbar() {
  return (
    <div className="h-[80px] text-[#A6AEC8] sticky top-0 z-50 transition-colors duration-200 backdrop-blur-xs">
      <nav className="container mx-auto flex h-full items-center justify-end px-4">
        <ul className="flex items-center justify-center gap-6 font-semibold text-md">
          <li className="hover:underline transition-colors flex items-center hover:border rounded-md border-none">
            <Link to={"/"} className="hover:underline transition-colors flex items-center">
              Home
            </Link>
          </li>
          <li className="hover:underline transition-colors flex items-center hover:border rounded-md border-none">
            <Link to={"/projects"} className="hover:underline transition-colors flex items-center">
              Projects
            </Link>
          </li>
          <li className="hover:underline transition-colors flex items-center hover:border rounded-md border-none">
            <Resume />
          </li>
          <li className="hover:underline transition-colors flex items-center hover:border rounded-md border-none">
            <Link to={"/contact"} className="hover:underline transition-colors flex items-center">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};