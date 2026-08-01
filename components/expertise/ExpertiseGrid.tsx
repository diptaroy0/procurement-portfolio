import ExpertiseCard from "./ExpertiseCard";
import { expertise } from "./expertise";

export default function ExpertiseGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6

        md:grid-cols-2

        lg:gap-8

        xl:grid-cols-4
      "
    >
      {expertise.map((item) => (
        <div
          key={item.title}
          className="h-full"
        >
          <ExpertiseCard
            icon={item.icon}
            title={item.title}
            skills={item.skills}
          />
        </div>
      ))}
    </div>
  );
}
