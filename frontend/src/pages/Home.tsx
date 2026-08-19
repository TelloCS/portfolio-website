import About from "../components/About";
import FeaturedProjects from "../components/Projects/FeaturedProjects";

export default function Home() {

  return (
    <div className="bg-[#21222D] text-[#A6AEC8] py-8">
      <About />
      <FeaturedProjects />
    </div>
  );
};