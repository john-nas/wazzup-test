type PlantBasedBadgeProps = {
  compact?: boolean
}

function PlantBasedBadge({ compact = false }: PlantBasedBadgeProps) {
  return (
    <span className={`plant-badge${compact ? ' plant-badge--compact' : ''}`}>
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M26.7 5.4C16 6.2 8.4 11.2 7.2 19.7c-.5 3.3 1.2 5.8 4.3 6.3 8.2 1.2 13.8-6.8 15.2-20.6Z" />
        <path d="M6 27c4.3-6.6 9.4-10.4 15.5-13.4" />
      </svg>
      <span>100% plant-based menu</span>
    </span>
  )
}

export default PlantBasedBadge
