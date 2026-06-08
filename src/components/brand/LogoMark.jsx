import { brand } from "../../data/siteData";

export default function LogoMark({ compact = false }) {
  return (
    <div
      aria-label={brand.logoAlt}
      className={`logo-lockup ${compact ? "logo-lockup--compact" : ""}`.trim()}
    >
      <span className={`logo-mark ${compact ? "logo-mark--compact" : ""}`.trim()} aria-hidden="true">
        <span className="logo-mark__globe" />
        <span className="logo-mark__orbit" />
      </span>
      <span className="logo-text">
        <span className="logo-word">
          <span>Intle</span>
          <strong>xpress</strong>
        </span>
        {!compact ? <span className="logo-tagline">Global Courier Solutions</span> : null}
      </span>
    </div>
  );
}
