import SocialMediaLinks from "../About/SocialMediaLinks";

export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between container mx-auto font-mono p-4 text-xs gap-4 sm:gap-0">
      <span>&copy; 2026 Jeremy Tello</span>
      <SocialMediaLinks />
    </div>
  );
};