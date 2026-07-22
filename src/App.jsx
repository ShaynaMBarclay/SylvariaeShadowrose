import { useState } from 'react';
import Motes from './Motes';
import sylv from './assets/sylv.PNG';
import './styles/layout.css';
import './styles/content.css';
import './styles/effects.css';

const PORTRAIT = sylv;


const ASPECTS = [
  {
    name: 'Void Preservation',
    desc: 'The Void can twist flesh, but it can also trap things in a state of eternal, unchanging stasis. She uses her dark magic like a cosmic preservative, locking her youth and beauty in place so she never ages. She can change almost every aspect of her appearance at will. This allows her to offer "healing" services as well, though quite taboo, her power could tip the scales between life and death.',
  },
  {
    name: 'Harvesting Dark Flora',
    desc: 'Azeroth is filled with flowers infused with dark energies. She seeks out these plants. She views the Void not as a weapon, but as a fertilizer for rare, beautiful, and deadly mutations.',
  },
  {
    name: 'Crazy Cat Lady',
    desc: 'She carries around a few small trinkets, that also dub as cat toys. She always has a kitty near. She owns a cat cafe in her home.',
    forbidden: true,
  },
];

function Flower() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <ellipse cx="12" cy="5" rx="3.1" ry="4.6" />
        <ellipse cx="12" cy="19" rx="3.1" ry="4.6" />
        <ellipse cx="5" cy="12" rx="4.6" ry="3.1" />
        <ellipse cx="19" cy="12" rx="4.6" ry="3.1" />
        <ellipse cx="7.2" cy="7.2" rx="4.3" ry="2.9" transform="rotate(-45 7.2 7.2)" />
        <ellipse cx="16.8" cy="16.8" rx="4.3" ry="2.9" transform="rotate(-45 16.8 16.8)" />
        <ellipse cx="16.8" cy="7.2" rx="4.3" ry="2.9" transform="rotate(45 16.8 7.2)" />
        <ellipse cx="7.2" cy="16.8" rx="4.3" ry="2.9" transform="rotate(45 7.2 16.8)" />
      </g>
      <circle cx="12" cy="12" r="2.6" fill="var(--moon-ivory)" />
    </svg>
  );
}

export default function App() {

  const [loaded, setLoaded] = useState(false);

  return (
    <div className="page">
      <div className="stage">
        <section className="portrait">
          <div className="portrait__aura" aria-hidden="true" />
          <div className="portrait__frame">
            {PORTRAIT ? (
              <img
  className={`portrait__img${loaded ? ' is-loaded' : ''}`}
  src={PORTRAIT}
  alt="Portrait of Sylvariae Shadowrose"
  onLoad={() => setLoaded(true)}
/>
            ) : (
              <div className="portrait__placeholder" role="img" aria-label="Portrait placeholder">
                <span className="portrait__placeholder-sigil">✶</span>
                <span className="portrait__placeholder-label">her portrait</span>
              </div>
            )}
          </div>
        </section>

        <section className="content">
          <div className="ornament" aria-hidden="true">
            <span className="ornament__line" />
            <span className="ornament__flower">
              <Flower />
            </span>
            <span className="ornament__line ornament__line--right" />
          </div>

          <h1 className="title">
            Sylvariae
            <span className="title__glow">Shadowrose</span>
          </h1>

          <p className="epithet">
            She studied the void deeply during her time locked inside the Suramar barrier, a power she obsessed over and yearned to conquer. Though the void now whispers constantly, fighting causes emotional chaos. She prefers the quiet peace of her dark garden. Though when needed, her power is devestating.
          </p>

          <hr className="divider" />

          <ul className="aspects">
            {ASPECTS.map((a) => (
              <li key={a.name} className={`aspect${a.forbidden ? ' aspect--forbidden' : ''}`}>
                <span className="aspect__mark" aria-hidden="true">
                  <Flower />
                </span>
                <div className="aspect__name">{a.name}</div>
                <p className="aspect__desc">{a.desc}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <footer className="footer">
        <a className="signature" href="https://planetshay.xyz/" target="_blank" rel="noreferrer">
          <span className="signature__glyph" aria-hidden="true">
            <svg viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="12" r="6" fill="currentColor" opacity="0.9" />
              <ellipse cx="16" cy="12" rx="11" ry="3.2" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(-18 16 12)" />
              <path className="signature__star" d="M31 5 L31.8 7.2 L34 8 L31.8 8.8 L31 11 L30.2 8.8 L28 8 L30.2 7.2 Z" fill="#dfe4f0" />
              <path className="signature__star signature__star--sm" d="M36 14 L36.5 15.5 L38 16 L36.5 16.5 L36 18 L35.5 16.5 L34 16 L35.5 15.5 Z" fill="#dfe4f0" />
              <path className="signature__star signature__star--sm" d="M6 4 L6.5 5.5 L8 6 L6.5 6.5 L6 8 L5.5 6.5 L4 6 L5.5 5.5 Z" fill="#dfe4f0" />
            </svg>
          </span>
          <span className="signature__text">
            Want your own character page? <span className="signature__site">planetshay.xyz</span>
          </span>
        </a>

        <span className="footer__divider" aria-hidden="true" />

        <p className="credit">
          Art by <span className="credit__name">@darkladyiwase</span>
          <span className="credit__amp"> &amp; </span>
          <span className="credit__name">@fxk_art</span>
        </p>
      </footer>

      <Motes count={80} />
      <div className="vignette" aria-hidden="true" />
    </div>
  );
}