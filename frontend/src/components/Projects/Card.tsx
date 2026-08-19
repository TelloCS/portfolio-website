import { memo } from "react";
import Technologies from "./Technologies";

import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

type CardProps = {
  title: string
  github: string
  description: string
  website?: string
  image?: string
  technologies: string[]
}

const Card = ({ title, github, description, website, image, technologies }: CardProps) => {
  return (
    <div className="border rounded-md p-4 h-full flex flex-col">
      <div className="relative overflow-hidden h-40 w-full shrink-0">
        <img className="relative z-0 h-40 w-full object-cover object-top" src={image} alt="" />
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex flex-col py-4">
          <span className="text-lg font-semibold">{title}</span>
          <span>{description}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {technologies.map((tech, index) => (
            <Technologies technology={tech} key={index} />
          ))}
        </div>

        <div className="flex justify-between mt-auto">
          {website ? (
            <span>
              <a className="text-subtext1 hover:text-[#D4A8FF] inline-flex items-center gap-1.5 transition-colors duration-200 text-sm" href={website}>
                <CiGlobe size="16px" />
                <span>Website</span>
              </a>
            </span>
          ) : (
            <div />
          )}
          <span>
            <a className="text-subtext1 hover:text-[#D4A8FF] inline-flex items-center gap-1.5 transition-colors duration-200 text-sm" href={github}>
              <FaGithub size="16px" />
              <span>Source</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);