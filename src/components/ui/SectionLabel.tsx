import GoldDivider from './GoldDivider';

interface SectionLabelProps {
  children: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionLabel({ children, centered = false, light = false }: SectionLabelProps) {
  return (
    <div className={`mb-6 ${centered ? 'text-center' : ''}`}>
      <span
        className="eyebrow"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: light ? 'rgba(201,168,76,0.9)' : '#C9A84C',
        }}
      >
        {children}
      </span>
      <GoldDivider centered={centered} />
    </div>
  );
}
