import { useMemo } from 'react';
import './Button.css';

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false,
  loading = false,
  ...props
}) {
  const buttonClassName = useMemo(
    () => ['button', `button-${variant}`, `button-${size}`, className].filter(Boolean).join(' '),
    [variant, size, className],
  );

  return (
    <button
      {...props}
      type={type}
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
    >
      {loading ? 'Loading…' : children}
    </button>
  );
}
