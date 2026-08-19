import { memo } from "react";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <a className="text-subtext1 hover:text-[#D4A8FF] inline-flex items-center gap-1.5 transition-colors duration-200 text-md" href="https://www.linkedin.com/in/jeremy-tello-1897a62aa/">
        <FaLinkedinIn size="16px" />
        <span>LinkedIn</span>
      </a>
      <span className="text-surface1 text-xs">|</span>
      <a className="text-subtext1 hover:text-[#D4A8FF] inline-flex items-center gap-1.5 transition-colors duration-200 text-md" href="https://github.com/TelloCS">
        <FaGithub size="16px" />
        <span>GitHub</span>
      </a>
      <span className="text-surface1 text-xs">|</span>
      <a className="text-subtext1 hover:text-[#D4A8FF] inline-flex items-center gap-1.5 transition-colors duration-200 text-md" href="mailto:jeremytello31@gmail.com">
        <IoIosMail size="16px" />
        <span>Email</span>
      </a>
    </div>
  )
}

export default memo(SocialMediaLinks);