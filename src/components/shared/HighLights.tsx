import { sub_services, sub_services_heading, sub_services_sub_heading } from "@/modelDataset";
import { AppleStyleCarousel, Card } from "./AppleStyleCarousel";

export function HighLights() {
  const cards = sub_services.map((card, index) => (
    <Card key={card.src} card={card} index={index} identifier="agency" />
  ));

  return (
    <div className="w-full h-full py-4">
      <div className="max-w-7xl pl-4 mx-auto flex flex-col gap-2">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          {sub_services_heading ?? ""}
        </h2>
        <p className="text-base md:text-xl text-white">
          {sub_services_sub_heading ?? ""}
        </p>
      </div>
      <AppleStyleCarousel items={cards} />
    </div>
  );
}


