interface LogoMarkProps {
  size?: number
  inverse?: boolean
}

export function LogoMark({ size = 28, inverse = false }: LogoMarkProps) {
  const fg = inverse ? '#fff' : '#0a0a0a'
  return (
    <span
      className="inline-flex items-baseline font-display font-bold leading-none tracking-[-0.04em]"
      style={{ fontSize: size, color: fg }}
    >
      D<span className="text-brand">W</span>
    </span>
  )
}

interface WordmarkProps {
  inverse?: boolean
  small?: boolean
}

export function Wordmark({ inverse = false, small = false }: WordmarkProps) {
  const fg = inverse ? '#fff' : '#0a0a0a'
  return (
    <span className="inline-flex items-center gap-[10px]">
      <LogoMark size={small ? 22 : 28} inverse={inverse} />
      <span className="flex flex-col leading-none gap-[2px]">
        <span
          className="font-display font-semibold tracking-[-0.01em]"
          style={{ fontSize: small ? 14 : 16, color: fg }}
        >
          Digital World
        </span>
        <span
          className="font-mono font-medium tracking-[0.12em] uppercase text-brand"
          style={{ fontSize: small ? 9 : 10 }}
        >
          Corporate
        </span>
      </span>
    </span>
  )
}
