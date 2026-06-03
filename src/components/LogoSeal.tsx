interface LogoSealProps {
  /** pixel size of the seal */
  size?: number;
  /** optional extra classes on the wrapper */
  className?: string;
  /** pause the rotating ring (e.g. tiny footer marks) */
  still?: boolean;
}

/**
 * The Menorah logo presented as a living gold seal: a slowly rotating
 * conic-gradient ring with a sweeping sheen, the logo resting at center.
 * Mirrors the "animated emblem" treatment used on the barbershop build.
 */
export default function LogoSeal({ size = 96, className = '', still = false }: LogoSealProps) {
  return (
    <span
      className={`logo-seal ${still ? 'logo-seal--still' : ''} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span className="logo-seal__ring" />
      <span className="logo-seal__sheen" />
      <span className="logo-seal__core">
        <img
          src="/Menorah Logo Transparent.png"
          alt=""
          className="logo-seal__img"
          draggable={false}
        />
      </span>
    </span>
  );
}
