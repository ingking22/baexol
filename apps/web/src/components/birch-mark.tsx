/** Decorative birch-branch "X" — the BAEXOL mark, abstracted as line art. */
export function BirchMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id="birch" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d6dae1" />
          <stop offset="0.5" stopColor="#9aa0aa" />
          <stop offset="1" stopColor="#d6dae1" />
        </linearGradient>
      </defs>
      <g
        stroke="url(#birch)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* main crossing branches */}
        <path d="M64 56 L336 344" />
        <path d="M336 56 L64 344" />

        {/* twigs — branch 1 (↘) */}
        <path d="M108 103 L86 84" />
        <path d="M108 103 L128 88" />
        <path d="M150 148 L172 134" />
        <path d="M236 240 L214 254" />
        <path d="M280 287 L302 274" />
        <path d="M280 287 L266 311" />

        {/* twigs — branch 2 (↙) */}
        <path d="M292 103 L314 84" />
        <path d="M292 103 L272 88" />
        <path d="M250 148 L228 134" />
        <path d="M164 240 L186 254" />
        <path d="M120 287 L98 274" />
        <path d="M120 287 L134 311" />

        {/* fine end fans */}
        <path d="M64 344 L52 360" />
        <path d="M64 344 L80 358" />
        <path d="M336 344 L348 360" />
        <path d="M336 344 L320 358" />
      </g>
    </svg>
  );
}

/** Compact birch-X glyph for the nav lockup. Inherits `currentColor`. */
export function BirchGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 4 L19 20" />
        <path d="M19 4 L5 20" />
        <path d="M5 4 L3.2 5.8 M5 4 L7 3.2" />
        <path d="M19 4 L20.8 5.8 M19 4 L17 3.2" />
        <path d="M5 20 L3.2 18.2 M5 20 L7 20.8" />
        <path d="M19 20 L20.8 18.2 M19 20 L17 20.8" />
      </g>
    </svg>
  );
}
