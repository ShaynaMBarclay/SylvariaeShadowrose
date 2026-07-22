import { useMemo } from 'react';

const VARIANTS = [
  'mote--amethyst', 'mote--amethyst', 'mote--amethyst',
  'mote--rose', 'mote--rose',
  'mote--spore',
  'mote--azure',
  'mote--gold',
  'mote--magenta',
  'mote--ice',
];

export default function Motes({ count = 70 }) {
  const motes = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const variant = VARIANTS[Math.floor(Math.random() * VARIANTS.length)];
      const size = Math.random() * 2.8 + 0.7;
      return {
        id: i,
        variant,
        left: Math.random() * 100,
        size,
        driftDuration: Math.random() * 18 + 12,   
        driftDelay: Math.random() * -30,
        twinkleDuration: Math.random() * 2.6 + 1.2, 
        twinkleDelay: Math.random() * -4,
        opacity: Math.random() * 0.5 + 0.5,
        drift: (Math.random() - 0.5) * 140,
      };
    });
  }, [count]);

  return (
    <div className="motes" aria-hidden="true">
      {motes.map((m) => (
        <span
          key={m.id}
          className="mote-track"
          style={{
            left: `${m.left}%`,
            bottom: '-12px',
            animation: `drift ${m.driftDuration}s linear infinite`,
            animationDelay: `${m.driftDelay}s`,
            '--mote-drift': `${m.drift}px`,
          }}
        >
          <span
            className={`mote ${m.variant}`}
            style={{
              width: `${m.size}px`,
              height: `${m.size}px`,
              boxShadow: `0 0 ${m.size * 4}px currentColor, 0 0 ${m.size * 8}px currentColor`,
              animation: `twinkle ${m.twinkleDuration}s ease-in-out infinite`,
              animationDelay: `${m.twinkleDelay}s`,
              '--mote-opacity': m.opacity,
            }}
          />
        </span>
      ))}
    </div>
  );
}