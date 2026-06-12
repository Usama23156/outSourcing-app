import Image from "next/image";

export type LogoConcept =
  | "concept-1-bridge"
  | "concept-2-engine"
  | "concept-3-nexus"
  | "concept-4-architect"
  | "concept-5-vector";

interface LogoProps {
  className?: string;
  size?: number;
  concept?: LogoConcept;
}

export function Logo({
  className = "",
  size = 36,
  concept = "concept-5-vector",
}: LogoProps) {
  return (
    <Image
      src={`/logos/${concept}-512.png`}
      alt="Apex Vector logo"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
