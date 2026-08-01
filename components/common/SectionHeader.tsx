type SectionHeaderProps = {
  id: string;
  badge: string;
  title: string;
  description: string;
  className?: string;
};

export default function SectionHeader({
  id,
  badge,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium tracking-wide text-cyan-300">
        {badge}
      </span>
      <h2 id={id} className="mt-6 text-4xl font-black text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
        {description}
      </p>
    </div>
  );
}
