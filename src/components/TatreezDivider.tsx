type TatreezDividerProps = {
  pattern: 'walls' | 'zigzag'
  dark?: boolean
}

function TatreezDivider({ pattern, dark = false }: TatreezDividerProps) {
  return (
    <div
      className={`tatreez-divider tatreez-divider--${pattern}${dark ? ' tatreez-divider--dark' : ''}`}
      aria-hidden="true"
    />
  )
}

export default TatreezDivider
