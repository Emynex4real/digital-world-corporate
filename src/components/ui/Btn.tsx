import { cn } from '../../lib/cn'
import { Arrow } from './Arrow'

type BtnVariant = 'primary' | 'ink' | 'ghost' | 'ghostDark' | 'link'
type BtnSize    = 'sm' | 'md' | 'lg'

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BtnVariant
  size?: BtnSize
  arrow?: boolean
}

const SIZE: Record<BtnSize, string> = {
  sm: 'px-[14px] py-2 text-[13px] h-[34px]',
  md: 'px-5 py-3 text-[14px] h-11',
  lg: 'px-[26px] py-4 text-[15px] h-[54px]',
}

const VARIANT: Record<BtnVariant, string> = {
  primary:   'bg-brand text-ink border border-brand',
  ink:       'bg-ink text-white border border-ink',
  ghost:     'bg-transparent text-ink border border-line-2',
  ghostDark: 'bg-transparent text-white border border-white/25',
  link:      'bg-transparent text-ink',
}

export function Btn({ children, variant = 'primary', size = 'md', arrow = false, className, ...rest }: BtnProps) {
  const isLink = variant === 'link'
  return (
    <button
      {...rest}
      className={cn(
        'inline-flex items-center gap-[10px] font-sans font-medium rounded-full whitespace-nowrap transition-[transform,background] duration-150',
        VARIANT[variant],
        isLink ? 'p-0 h-auto border-0' : SIZE[size],
        className,
      )}
    >
      {children}
      {arrow && <Arrow />}
    </button>
  )
}
