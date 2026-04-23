interface EyebrowProps {
  children: React.ReactNode
  color?: string
}

export function Eyebrow({ children, color = '#d97906' }: EyebrowProps) {
  return (
    <span
      className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase"
      style={{ color }}
    >
      <span className="w-[18px] h-px opacity-60" style={{ background: color }} />
      {children}
    </span>
  )
}
