import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

const styles = {
  primary: {
    background: '#C9A84C',
    color: '#0A1535',
    border: '2px solid #C9A84C',
  },
  outline: {
    background: 'transparent',
    color: '#C9A84C',
    border: '2px solid #C9A84C',
  },
  ghost: {
    background: 'transparent',
    color: 'rgba(248,247,243,0.9)',
    border: '2px solid rgba(248,247,243,0.4)',
  },
};

const hoverStyles = {
  primary: { background: '#DDB96A', borderColor: '#DDB96A' },
  outline: { background: '#C9A84C', color: '#0A1535' },
  ghost: { background: 'rgba(248,247,243,0.1)', borderColor: 'rgba(248,247,243,0.8)' },
};

const sizes = {
  sm: { padding: '8px 20px', fontSize: '0.8125rem' },
  md: { padding: '12px 28px', fontSize: '0.9375rem' },
  lg: { padding: '16px 36px', fontSize: '1rem' },
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    ...styles[variant],
    ...sizes[size],
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    letterSpacing: '0.03em',
    borderRadius: '6px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    opacity: disabled ? 0.5 : 1,
    transition: 'all 0.2s ease',
    textDecoration: 'none',
  };

  const content = (
    <motion.span
      style={baseStyle}
      whileHover={!disabled ? hoverStyles[variant] : undefined}
      whileTap={!disabled ? { scale: 0.97 } : undefined}
      className={className}
    >
      {children}
    </motion.span>
  );

  if (to) return <Link to={to} style={{ textDecoration: 'none' }}>{content}</Link>;
  if (href) return <a href={href} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">{content}</a>;
  return <button type={type} onClick={onClick} disabled={disabled} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>{content}</button>;
}
