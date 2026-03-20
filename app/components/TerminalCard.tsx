import { SKILLS } from "@/app/utils/data";
import { KEY_WIDTH } from "@/app/utils/constants";

interface TerminalCardProps {
  isVisible: boolean;
}

export default function TerminalCard(props: TerminalCardProps) {
  return (
    <div
      className={`
        bg-[#0a0a0a] border border-border
        p-5 font-mono text-[0.78rem] leading-[1.85]
        transition-all duration-700 ease-out delay-200
        ${props.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="flex gap-[6px] mb-4">
        <span className="w-[10px] h-[10px] rounded-full bg-coral flex-none" />
        <span className="w-[10px] h-[10px] rounded-full bg-yellow flex-none" />
        <span className="w-[10px] h-[10px] rounded-full bg-teal flex-none" />
      </div>
      <div className="mb-1" style={{ color: "rgba(245,216,0,0.3)" }}>
        {"// skills.txt"}
      </div>
      {SKILLS.map(({ key, values }) => (
        <div key={key} className="flex">
          <span
            className="flex-none"
            style={{
              minWidth: `${KEY_WIDTH}ch`,
              color: "var(--color-yellow)",
            }}
          >
            {key}
          </span>
          <span style={{ color: "rgba(240,236,227,0.75)" }}>{values}</span>
        </div>
      ))}
      <div className="mt-1">
        <span style={{ color: "rgba(240,236,227,0.3)" }}>&gt;</span>
        <span className="inline-block w-[2px] h-[14px] align-middle bg-yellow ml-1 animate-blink"></span>
      </div>
    </div>
  );
}
