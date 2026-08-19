import Education from "./Education"
import SocialMediaLinks from "./SocialMediaLinks";

export default function About() {
  return (
    <div className="container mx-auto font-mono px-4">
      <div className="py-12">
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-left">
            Hey! I'm <span className="text-[#D4A8FF]">Jeremy Tello</span>
          </h1>
          <p className="text:lg md:text-xl">
            Based in San Antonio
          </p>
          <p className="text:lg md:text-xl">
            Recent Graduate from
            <a className="text-[#D4A8FF]"  href="https://www.tamusa.edu/">
              <span> Texas A&M University San Antonio</span>
            </a>
          </p>
        </div>
        <SocialMediaLinks />
      </div>
      <Education />
    </div>
  );
};