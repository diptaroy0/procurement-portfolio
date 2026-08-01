import AboutInfo from "./AboutInfo";
import AboutHighlights from "./AboutHighlights";

export default function AboutContent() {
  return (
    <div className="max-w-2xl">
      <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-5 py-3 backdrop-blur-sm">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400" />
        <span className="text-sm font-medium tracking-wide text-cyan-300">About Me</span>
      </div>
      <h2 className="text-5xl font-black leading-tight text-white lg:text-6xl">
        Where Engineering<br /><span className="gradient-text">Meets Strategic</span><br />
        <span className="gradient-text">Procurement</span>
      </h2>
      <div className="mt-8 h-1 w-[120px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
      <p className="mt-8 text-lg leading-[2.1rem] text-gray-300">
        I am an Electrical & Electronic Engineer specializing in Procurement, Supply Chain Management, Industrial Automation, ERP-based procurement operations, and international supplier development. My work combines engineering precision with commercial decision-making to build efficient, reliable, and cost-effective supply chain solutions.
      </p>
      <p className="mt-6 text-lg leading-[2.1rem] text-gray-400">
        Throughout my professional career, I have collaborated with more than <span className="font-semibold text-cyan-300">100 international suppliers</span>, managed procurement activities exceeding <span className="font-semibold text-cyan-300">USD&nbsp;3 Million</span>, and contributed to sourcing, negotiation, supplier relationship management, and ERP-driven procurement processes. I am currently pursuing a <span className="font-semibold text-white">Professional MBA in Supply Chain Management</span> at the Bangladesh University of Professionals (BUP).
      </p>
      <div className="mb-5 mt-12"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Core Information</p></div>
      <AboutInfo />
      <div className="mb-5 mt-14"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Career Highlights</p></div>
      <AboutHighlights />
    </div>
  );
}
