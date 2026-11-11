import { cn } from "@/lib/utils";
import type { ArtVariant } from "@/lib/types";

type Pattern = "plain" | "rim" | "gold" | "speckle";

interface Props {
  variant?: ArtVariant;
  color: string;
  pattern?: Pattern;
  className?: string;
  shadow?: boolean;
}

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const value = parseInt(full, 16);
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

function mix(hex: string, target: [number, number, number], amount: number) {
  const { r, g, b } = hexToRgb(hex);
  const clamp = (n: number) => Math.max(0, Math.min(255, Math.round(n)));
  return `rgb(${clamp(r + (target[0] - r) * amount)}, ${clamp(
    g + (target[1] - g) * amount,
  )}, ${clamp(b + (target[2] - b) * amount)})`;
}

const lighten = (hex: string, amount: number) => mix(hex, [255, 253, 246], amount);
const darken = (hex: string, amount: number) => mix(hex, [18, 16, 12], amount);

const GOLD = "#ac8547";

function speckles(seed: number) {
  return Array.from({ length: 30 }, (_, i) => {
    const angle = (i * 137.508 + seed) * (Math.PI / 180);
    const radius = 26 + ((i * 53 + seed * 7) % 112);
    return {
      cx: 200 + Math.cos(angle) * radius,
      cy: 200 + Math.sin(angle) * radius,
      r: 0.8 + ((i * 17) % 9) / 8,
      light: i % 3 === 0,
    };
  });
}

function Ornaments({
  uid,
  pattern,
  radius,
  cy = 200,
}: {
  uid: string;
  pattern: Pattern;
  radius: number;
  cy?: number;
}) {
  if (pattern === "gold") {
    return (
      <g>
        <circle
          cx="200"
          cy={cy}
          r={radius}
          fill="none"
          stroke={GOLD}
          strokeWidth="2"
          opacity="0.85"
        />
        <circle
          cx="200"
          cy={cy}
          r={radius - 7}
          fill="none"
          stroke={GOLD}
          strokeWidth="0.8"
          opacity="0.45"
        />
      </g>
    );
  }

  if (pattern === "rim") {
    return (
      <circle
        cx="200"
        cy={cy}
        r={radius}
        fill="none"
        stroke="rgba(58,46,30,0.2)"
        strokeWidth="1"
      />
    );
  }

  if (pattern === "speckle") {
    const dots = speckles(Math.round(radius));
    return (
      <g>
        {dots.map((dot, i) => (
          <circle
            key={`${uid}-dot-${i}`}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill={dot.light ? "rgba(255,252,240,0.5)" : "rgba(60,48,32,0.22)"}
          />
        ))}
      </g>
    );
  }

  return null;
}

function PlateArt({ color, pattern, uid }: { color: string; pattern: Pattern; uid: string }) {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Porcelain plate">
      <defs>
        <radialGradient id={`${uid}-face`} cx="34%" cy="26%" r="82%">
          <stop offset="0%" stopColor={lighten(color, 0.34)} />
          <stop offset="42%" stopColor={color} />
          <stop offset="100%" stopColor={darken(color, 0.2)} />
        </radialGradient>
        <radialGradient id={`${uid}-well`} cx="50%" cy="42%" r="70%">
          <stop offset="0%" stopColor={lighten(color, 0.16)} />
          <stop offset="72%" stopColor={darken(color, 0.04)} />
          <stop offset="100%" stopColor={darken(color, 0.13)} />
        </radialGradient>
        <filter id={`${uid}-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <filter id={`${uid}-tight`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      <ellipse cx="200" cy="338" rx="142" ry="22" fill="#241d12" opacity="0.14" filter={`url(#${uid}-soft)`} />

      <circle cx="200" cy="196" r="166" fill={`url(#${uid}-face)`} />
      <circle cx="200" cy="196" r="165" fill="none" stroke={lighten(color, 0.5)} strokeWidth="1.4" opacity="0.65" />
      <circle cx="200" cy="196" r="150" fill="none" stroke={darken(color, 0.35)} strokeWidth="1" opacity="0.16" />
      <circle cx="200" cy="196" r="122" fill={`url(#${uid}-well)`} />
      <circle cx="200" cy="196" r="121" fill="none" stroke={darken(color, 0.4)} strokeWidth="1" opacity="0.18" />

      <ellipse
        cx="142"
        cy="96"
        rx="70"
        ry="25"
        fill="#fffdf6"
        opacity="0.2"
        transform="rotate(-28 142 96)"
        filter={`url(#${uid}-soft)`}
      />
      <path
        d="M 92 262 C 120 306 168 326 208 324"
        fill="none"
        stroke="#fffdf6"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.18"
        filter={`url(#${uid}-tight)`}
      />
      <ellipse cx="200" cy="196" rx="102" ry="38" fill="#fffdf6" opacity="0.05" transform="rotate(-24 200 196)" />

      <Ornaments uid={uid} pattern={pattern} radius={144} cy={196} />
    </svg>
  );
}

function BowlArt({ color, pattern, uid }: { color: string; pattern: Pattern; uid: string }) {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Porcelain bowl">
      <defs>
        <linearGradient id={`${uid}-body`} x1="18%" y1="8%" x2="82%" y2="96%">
          <stop offset="0%" stopColor={lighten(color, 0.3)} />
          <stop offset="52%" stopColor={color} />
          <stop offset="100%" stopColor={darken(color, 0.24)} />
        </linearGradient>
        <radialGradient id={`${uid}-inside`} cx="50%" cy="70%" r="72%">
          <stop offset="0%" stopColor={lighten(color, 0.2)} />
          <stop offset="55%" stopColor={darken(color, 0.1)} />
          <stop offset="100%" stopColor={darken(color, 0.3)} />
        </radialGradient>
        <filter id={`${uid}-soft`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <filter id={`${uid}-tight`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      <ellipse cx="200" cy="342" rx="132" ry="20" fill="#241d12" opacity="0.16" filter={`url(#${uid}-soft)`} />

      <path
        d="M 62 190 C 64 286 118 338 200 338 C 282 338 336 286 338 190 Z"
        fill={`url(#${uid}-body)`}
      />
      <path
        d="M 82 212 C 92 288 140 322 200 322 C 260 322 308 288 318 212"
        fill="none"
        stroke={darken(color, 0.4)}
        strokeWidth="1"
        opacity="0.12"
      />
      <ellipse cx="200" cy="190" rx="138" ry="54" fill={lighten(color, 0.16)} />
      <ellipse cx="200" cy="194" rx="123" ry="45" fill={`url(#${uid}-inside)`} />
      <ellipse cx="200" cy="214" rx="92" ry="28" fill={lighten(color, 0.12)} opacity="0.35" filter={`url(#${uid}-tight)`} />

      <ellipse cx="200" cy="190" rx="138" ry="54" fill="none" stroke={lighten(color, 0.55)} strokeWidth="1.4" opacity="0.7" />
      <path
        d="M 76 196 C 94 168 140 158 180 160"
        fill="none"
        stroke="#fffdf6"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.3"
        filter={`url(#${uid}-tight)`}
      />
      <path
        d="M 124 268 C 150 300 180 312 196 314"
        fill="none"
        stroke="#fffdf6"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.16"
        filter={`url(#${uid}-tight)`}
      />

      {pattern === "gold" && (
        <ellipse cx="200" cy="190" rx="132" ry="51" fill="none" stroke={GOLD} strokeWidth="2" opacity="0.9" />
      )}
      {pattern === "rim" && (
        <ellipse cx="200" cy="190" rx="126" ry="48" fill="none" stroke={darken(color, 0.5)} strokeWidth="1" opacity="0.25" />
      )}
      {pattern === "speckle" &&
        speckles(7).slice(0, 20).map((dot, i) => (
          <circle
            key={`${uid}-sp-${i}`}
            cx={140 + ((dot.cx - 200) * 0.55 + 60)}
            cy={220 + ((dot.cy - 200) * 0.3 + 40)}
            r={dot.r * 0.8}
            fill={dot.light ? "rgba(255,252,240,0.4)" : "rgba(60,48,32,0.2)"}
          />
        ))}
    </svg>
  );
}

function MugArt({ color, pattern, uid }: { color: string; pattern: Pattern; uid: string }) {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Porcelain mug">
      <defs>
        <linearGradient id={`${uid}-body`} x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor={lighten(color, 0.32)} />
          <stop offset="40%" stopColor={color} />
          <stop offset="78%" stopColor={darken(color, 0.12)} />
          <stop offset="100%" stopColor={darken(color, 0.28)} />
        </linearGradient>
        <linearGradient id={`${uid}-handle`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={lighten(color, 0.22)} />
          <stop offset="100%" stopColor={darken(color, 0.2)} />
        </linearGradient>
        <radialGradient id={`${uid}-inside`} cx="46%" cy="40%" r="70%">
          <stop offset="0%" stopColor={darken(color, 0.18)} />
          <stop offset="70%" stopColor={darken(color, 0.32)} />
          <stop offset="100%" stopColor={darken(color, 0.44)} />
        </radialGradient>
        <filter id={`${uid}-soft`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <filter id={`${uid}-tight`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      <ellipse cx="200" cy="354" rx="104" ry="16" fill="#241d12" opacity="0.16" filter={`url(#${uid}-soft)`} />

      <path
        d="M 286 178 C 348 172 362 292 288 302"
        fill="none"
        stroke={`url(#${uid}-handle)`}
        strokeWidth="30"
        strokeLinecap="round"
      />
      <path
        d="M 292 194 C 330 194 338 270 292 282"
        fill="none"
        stroke={darken(color, 0.32)}
        strokeWidth="15"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M 286 178 C 334 180 340 246 300 274"
        fill="none"
        stroke="#fffdf6"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.25"
        filter={`url(#${uid}-tight)`}
      />

      <path
        d="M 104 148 L 116 318 C 119 340 146 354 200 354 C 254 354 281 340 284 318 L 296 148 Z"
        fill={`url(#${uid}-body)`}
      />
      <ellipse cx="200" cy="148" rx="96" ry="27" fill={lighten(color, 0.28)} />
      <ellipse cx="200" cy="150" rx="82" ry="20" fill={`url(#${uid}-inside)`} />
      <ellipse cx="200" cy="148" rx="96" ry="27" fill="none" stroke={lighten(color, 0.6)} strokeWidth="1.3" opacity="0.7" />

      <path
        d="M 128 190 L 138 312"
        stroke="#fffdf6"
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.22"
        filter={`url(#${uid}-tight)`}
      />
      <path
        d="M 262 200 L 254 312"
        stroke={darken(color, 0.45)}
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.18"
        filter={`url(#${uid}-tight)`}
      />

      {pattern === "gold" && (
        <ellipse cx="200" cy="148" rx="90" ry="24" fill="none" stroke={GOLD} strokeWidth="2" opacity="0.9" />
      )}
      {pattern === "rim" && (
        <ellipse cx="200" cy="148" rx="86" ry="22" fill="none" stroke={darken(color, 0.5)} strokeWidth="1" opacity="0.3" />
      )}
    </svg>
  );
}

function PlatterArt({ color, pattern, uid }: { color: string; pattern: Pattern; uid: string }) {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Porcelain serving platter">
      <defs>
        <radialGradient id={`${uid}-face`} cx="36%" cy="24%" r="86%">
          <stop offset="0%" stopColor={lighten(color, 0.32)} />
          <stop offset="46%" stopColor={color} />
          <stop offset="100%" stopColor={darken(color, 0.22)} />
        </radialGradient>
        <radialGradient id={`${uid}-well`} cx="50%" cy="44%" r="72%">
          <stop offset="0%" stopColor={lighten(color, 0.12)} />
          <stop offset="100%" stopColor={darken(color, 0.14)} />
        </radialGradient>
        <filter id={`${uid}-soft`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <filter id={`${uid}-tight`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      <ellipse cx="200" cy="330" rx="152" ry="20" fill="#241d12" opacity="0.15" filter={`url(#${uid}-soft)`} />
      <g transform="rotate(-9 200 200)">
        <ellipse cx="200" cy="200" rx="178" ry="122" fill={`url(#${uid}-face)`} />
        <ellipse cx="200" cy="200" rx="177" ry="121" fill="none" stroke={lighten(color, 0.5)} strokeWidth="1.3" opacity="0.6" />
        <ellipse cx="200" cy="200" rx="150" ry="96" fill={`url(#${uid}-well)`} />
        <ellipse cx="200" cy="200" rx="149" ry="95" fill="none" stroke={darken(color, 0.42)} strokeWidth="1" opacity="0.16" />
        <ellipse cx="144" cy="152" rx="62" ry="18" fill="#fffdf6" opacity="0.18" filter={`url(#${uid}-soft)`} transform="rotate(-16 144 152)" />
        <Ornaments uid={uid} pattern={pattern} radius={160} cy={200} />
      </g>
    </svg>
  );
}

function SetArt({ color, pattern, uid }: { color: string; pattern: Pattern; uid: string }) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-[4%] top-[2%] h-[72%] w-[72%]">
        <PlateArt color={color} pattern={pattern} uid={`${uid}-p`} />
      </div>
      <div className="absolute bottom-[2%] left-[16%] h-[46%] w-[46%]">
        <BowlArt color={color} pattern={pattern} uid={`${uid}-b`} />
      </div>
      <div className="absolute bottom-[1%] right-[2%] h-[36%] w-[36%]">
        <MugArt color={color} pattern={pattern} uid={`${uid}-m`} />
      </div>
    </div>
  );
}

export default function CeramicArt({
  variant = "plate",
  color,
  pattern = "plain",
  className,
  shadow = true,
}: Props) {
  const uid = `art-${variant}-${color.replace("#", "")}-${pattern}`;
  const art = (() => {
    switch (variant) {
      case "bowl":
        return <BowlArt color={color} pattern={pattern} uid={uid} />;
      case "mug":
        return <MugArt color={color} pattern={pattern} uid={uid} />;
      case "platter":
        return <PlatterArt color={color} pattern={pattern} uid={uid} />;
      case "set":
        return <SetArt color={color} pattern={pattern} uid={uid} />;
      default:
        return <PlateArt color={color} pattern={pattern} uid={uid} />;
    }
  })();

  return (
    <div
      className={cn(
        "relative aspect-square w-full",
        shadow && "drop-shadow-[0_30px_40px_rgba(45,35,20,0.16)]",
        className,
      )}
    >
      {art}
    </div>
  );
}
