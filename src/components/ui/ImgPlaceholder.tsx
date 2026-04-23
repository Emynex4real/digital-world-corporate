import { cn } from '../../lib/cn'

type Tone = 'warm' | 'cool' | 'ink' | 'brand' | 'paper'

interface ImgPlaceholderProps {
  label: string
  ratio?: string
  tone?: Tone
  className?: string
  style?: React.CSSProperties
  rounded?: string
}

const TONES: Record<Tone, { bg: string; fg: string; dot: string }> = {
  warm:  { bg: '#f0ece5', fg: '#8a7e6b', dot: '#c9bfaa' },
  cool:  { bg: '#e8ecef', fg: '#6d7a84', dot: '#b7c2cb' },
  ink:   { bg: '#1a1a1a', fg: '#8a8a8a', dot: '#3a3a3a' },
  brand: { bg: '#fef3e3', fg: '#b26a08', dot: '#f7c87a' },
  paper: { bg: '#fafaf7', fg: '#9a9a9a', dot: '#dcd8d0' },
}

export function ImgPlaceholder({
  label,
  ratio = '4/3',
  tone = 'warm',
  className,
  style,
  rounded = '10px',
}: ImgPlaceholderProps) {
  const t = TONES[tone]
  return (
    <div
      className={cn('relative w-full overflow-hidden', className)}
      style={{
        aspectRatio: ratio,
        background: t.bg,
        color: t.fg,
        borderRadius: rounded,
        backgroundImage: `radial-gradient(${t.dot} 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
        ...style,
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-[14px_16px]">
        <div className="font-mono text-[10px] tracking-[0.12em] uppercase opacity-70">Image ▢</div>
        <div className="font-mono text-[11px] tracking-[0.02em] opacity-85">{label}</div>
      </div>
    </div>
  )
}
