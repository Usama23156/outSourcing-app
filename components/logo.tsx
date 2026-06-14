import Image from "next/image";

export type LogoConcept =
  | "hero-mountain-node"
  | "slash-concept-01-connection"
  | "slash-concept-02-growth"
  | "slash-concept-03-talent-network"
  | "slash-concept-04-performance"
  | "slash-concept-05-direction"
  | "slash-concept-06-execution"
  | "slash-concept-07-scale"
  | "slash-concept-08-infrastructure"
  | "slash-concept-09-global"
  | "slash-concept-10-future"
  | "original-enhanced-1"
  | "original-enhanced-2"
  | "original-enhanced-3"
  | "original-enhanced-4"
  | "original-enhanced-5"
  | "original-enhanced-6"
  | "original-enhanced-7";

interface LogoProps {
  className?: string;
  size?: number;
  concept?: LogoConcept;
}

export function Logo({
  className = "",
  size = 36,
  concept = "hero-mountain-node",
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
