import React from 'react'

interface ArrowProps {
  size?: number
  className?: string
  style?: React.CSSProperties
}

export function Arrow({ size = 14, className, style }: ArrowProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden className={className} style={style}>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
