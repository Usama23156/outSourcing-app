import Image from "next/image";

interface RotatingXIconProps {
  size?: number;
  className?: string;
}

export function RotatingXIcon({ size = 28, className = "" }: RotatingXIconProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/x-logo-icon.svg"
        alt=""
        width={size}
        height={size}
        className="motion-safe:[animation:hero-x-spin_4s_linear_infinite]"
      />
    </span>
  );
}
