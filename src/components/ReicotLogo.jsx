export default function ReicotLogo({ compact = false }) {
  return (
    <a className={`logo ${compact ? 'logo--compact' : ''}`} href="#top" aria-label="Reicot">
      <img src="/reicotLogoGPT.svg" alt="Reicot" />
    </a>
  );
}
