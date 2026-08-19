import Card from "./Card";
import { Link } from "react-router";

import NFLStatsImg from "../../assets/NFL.png"
import VulGPT from "../../assets/VulGPT.png"

import { FaArrowRight } from "react-icons/fa";

export default function FeaturedProjects() {
  return (
    <div className="container mx-auto font-mono px-4">
      <div className="py-12">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-left">
            Featured Projects
          </h1>
          <Link to={"/projects"} className="flex items-center gap-2 hover:text-[#D4A8FF]">
            <span className="text-xs sm:text-sm font-semibold">View More</span>
            <FaArrowRight size={12} />
          </Link>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-2">
          <Card
            title="NFL Stats"
            description="Automate weekly seasonal NFL data, player dashboard, and weekly matchups."
            website="https://footballstats.melojello.com/"
            github="https://github.com/TelloCS/nfl-stats"
            image={NFLStatsImg}
            technologies={['Django', 'React', 'Docker', 'Redis', 'Celery', 'Nginx']}
          />
          <Card
            title="VulGPT"
            description="An automated vulnerability management tool using Google OR-Tools to solve for the safest possible package upgrades."
            website=""
            github="https://github.com/TelloCS/VulGPT"
            image={VulGPT}
            technologies={['Django', 'React', 'Docker', 'Redis', 'Celery', 'Ollama', 'Neo4j']}
          />
        </div>
      </div>
    </div>
  );
};