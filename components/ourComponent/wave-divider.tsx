interface WaveDividerProps {
  className?: string;
  fill?: string;
}

export function WaveDivider({
  className,
  fill = "#f4f4f4",
}: WaveDividerProps) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 1280 140"
        preserveAspectRatio="none"
        className="block h-[70px] w-full sm:h-[100px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={fill}>
          <path
            d="M1280 0l-266 91.52a72.59 72.59 0 0 1-30.76 3.71L0 0v140h1280z"
            fillOpacity="0.5"
          />
          <path d="M1280 0l-262.1 116.26a73.29 73.29 0 0 1-39.09 6L0 0v140h1280z" />
        </g>
      </svg>
    </div>
  );
}
