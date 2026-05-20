interface TagProps {
  children: string;
  light?: boolean;
}

export default function Tag({ children, light = false }: TagProps) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 10px',
        borderRadius: '9999px',
        fontSize: '0.6875rem',
        fontWeight: 500,
        fontFamily: 'Inter, sans-serif',
        letterSpacing: '0.04em',
        background: light ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.12)',
        color: light ? '#DDB96A' : '#C9A84C',
        border: `1px solid ${light ? 'rgba(201,168,76,0.3)' : 'rgba(201,168,76,0.2)'}`,
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  );
}
