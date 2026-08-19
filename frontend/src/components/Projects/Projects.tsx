import Card from "./Card";
import NFLStatsImg from "../../assets/NFL.png"
import VulGPT from "../../assets/VulGPT.png"
import AniListClone from "../../assets/AniListClone.png"

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto font-mono px-4">
      <div className="py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 tracking-tight leading-tight text-left">
          Projects
        </h1>
        <div className="flex flex-col gap-2">
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
          <Card
            title="AniList Clone"
            description="Integrates the AniList GraphQL API to demonstrate user watchlists and JWT HttpOnly cookie authentication with token blacklisting."
            website=""
            github="https://github.com/TelloCS/anilist-clone-jwt-auth"
            image={AniListClone}
            technologies={['Django', 'React', 'Docker', 'Redis', 'GraphQL']}
          />
        </div>
      </div>
    </div>
  );
};