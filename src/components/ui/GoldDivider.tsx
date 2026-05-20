interface GoldDividerProps {
  className?: string;
  centered?: boolean;
  width?: number;
}

export default function GoldDivider({ className = '', centered = false, width = 48 }: GoldDividerProps) {
  return (
    <div
      className={`h-0.5 bg-gold my-4 ${centered ? 'mx-auto' : ''} ${className}`}
      style={{ width, backgroundColor: '#C9A84C' }}
      role="presentation"
    />
  );
}
