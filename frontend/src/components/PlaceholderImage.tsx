interface PlaceholderImageProps {
  label: string;
  width?: string;
  height?: string;
  className?: string;
}

export function PlaceholderImage({
  label,
  width = '100%',
  height = '200px',
  className = '',
}: PlaceholderImageProps) {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        background: '#E2E8F0',
        border: '1px dashed #9CA3AF',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        textAlign: 'center',
        color: '#6B7280',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-caption)',
        lineHeight: 1.4,
      }}
      aria-label={label}
      role="img"
    >
      {label}
    </div>
  );
}
