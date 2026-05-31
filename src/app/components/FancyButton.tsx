import { ReactNode, CSSProperties } from 'react'

interface FancyButtonProps {
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  style?: CSSProperties
}

export function FancyButton({
  children,
  onClick,
  type = 'button',
  disabled,
  className = '',
  style,
}: FancyButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`fancy ${className}`}
      style={style}
    >
      <span className="top-key" />
      <span className="text">{children}</span>
      <span className="bottom-key-1" />
      <span className="bottom-key-2" />
    </button>
  )
}
