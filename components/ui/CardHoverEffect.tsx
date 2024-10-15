import { cn } from "@/lib/utils";
import { useState } from "react";
import SkillItem from "./SkillItem";

interface Skill {
  title: string;
  skills: string[];
}

interface HoverEffectProps {
  items: Skill[];
  className?: string;
}

const HoverEffect = ({ items, className }: HoverEffectProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-2",
        className
      )}
    >
      {/* Map over big cards (e.g., "Web Dev") */}
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Big Card */}
          <Card>
            <CardTitle>{item.title}</CardTitle>

            {/* Map over the smaller skill items inside the big card */}
            <div className="grid grid-cols-3 gap-2">
              {item.skills.map((skill, skillIdx) => (
                <SkillItem key={skillIdx} title={skill} />
              ))}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default HoverEffect;

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-bd border border-purple-500 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 shadow-purple-400 shadow-2xl",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

export const CardTitle = ({ className, children }: CardTitleProps) => {
  return (
    <h4 className={cn("text-font text-2xl font-bold tracking-wider mt-1 mb-4 text-center", className)}>
      {children}
    </h4>
  );
};
