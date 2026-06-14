import Image from "next/image";

export type LogoConcept =
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
  concept = "original-enhanced-1",
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
