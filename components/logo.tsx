interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 36 }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      role="img"
      aria-label="Apex Vector logo"
      className={className}
    >
      <defs>
        <linearGradient id="av-facet-tl" x1="96" y1="72" x2="196" y2="196" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F4F6F9" />
          <stop offset="38%" stopColor="#3D5A73" />
          <stop offset="100%" stopColor="#0B1F3A" />
        </linearGradient>
        <linearGradient id="av-facet-tr" x1="416" y1="72" x2="316" y2="196" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F4F6F9" />
          <stop offset="28%" stopColor="#E85D4C" />
          <stop offset="100%" stopColor="#3D5A73" />
        </linearGradient>
        <linearGradient id="av-facet-tr-deep" x1="384" y1="128" x2="440" y2="196" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E85D4C" />
          <stop offset="100%" stopColor="#0B1F3A" />
        </linearGradient>
        <linearGradient id="av-facet-bl" x1="128" y1="360" x2="72" y2="260" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A2332" />
          <stop offset="100%" stopColor="#0B1F3A" />
        </linearGradient>
        <linearGradient id="av-facet-br" x1="384" y1="360" x2="440" y2="260" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A2332" />
          <stop offset="55%" stopColor="#3D5A73" />
          <stop offset="100%" stopColor="#0B1F3A" />
        </linearGradient>
        <linearGradient id="av-facet-bc" x1="256" y1="420" x2="256" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B1F3A" />
          <stop offset="100%" stopColor="#3D5A73" />
        </linearGradient>
        <radialGradient id="av-center-void" cx="256" cy="248" r="72" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B1F3A" />
          <stop offset="55%" stopColor="#1A2332" />
          <stop offset="100%" stopColor="#1A2332" />
        </radialGradient>
        <filter id="av-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0B1F3A" floodOpacity="0.28" />
        </filter>
      </defs>

      <g filter="url(#av-soft-shadow)">
        <path d="M256 56 L412 146 L412 318 L256 408 L100 318 L100 146 Z" fill="#0B1F3A" />

        <path d="M256 128 L100 146 L256 248 Z" fill="#0B1F3A" />
        <path d="M256 128 L256 248 L172 196 Z" fill="url(#av-facet-tl)" />

        <path d="M256 128 L412 146 L256 248 Z" fill="url(#av-facet-tr-deep)" />
        <path d="M256 128 L340 196 L256 248 Z" fill="url(#av-facet-tr)" />

        <path d="M256 248 L172 196 L100 318 L256 408 Z" fill="url(#av-facet-bl)" />
        <path d="M256 248 L340 196 L412 318 L256 408 Z" fill="url(#av-facet-br)" />
        <path d="M256 248 L256 408 L340 318 L172 318 Z" fill="url(#av-facet-bc)" />

        <path
          d="M256 188 C244 188 236 198 236 210 C236 222 244 232 256 232 C268 232 276 222 276 210 C276 198 268 188 256 188 Z"
          fill="url(#av-center-void)"
        />
        <path
          d="M256 196 C249 196 244 202 244 210 C244 218 249 224 256 224 C263 224 268 218 268 210 C268 202 263 196 256 196 Z"
          fill="#0B1F3A"
        />

        <path d="M256 128 L340 196" stroke="#F4F6F9" strokeOpacity="0.22" strokeWidth="2" strokeLinecap="round" />
        <path d="M256 128 L172 196" stroke="#F4F6F9" strokeOpacity="0.18" strokeWidth="2" strokeLinecap="round" />
        <path d="M256 248 L340 196" stroke="#E85D4C" strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M256 248 L172 196" stroke="#3D5A73" strokeOpacity="0.65" strokeWidth="2" strokeLinecap="round" />
        <path d="M256 248 L256 408" stroke="#1A2332" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" />
        <path d="M256 56 L412 146" stroke="#F4F6F9" strokeOpacity="0.35" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M412 146 L412 318" stroke="#E85D4C" strokeOpacity="0.42" strokeWidth="2" strokeLinecap="round" />
        <path d="M100 146 L256 56" stroke="#F4F6F9" strokeOpacity="0.28" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}
