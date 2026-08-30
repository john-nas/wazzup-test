const fifteenMinutesInMilliseconds = 15 * 60 * 1000

const pickupTimeFormatter = new Intl.DateTimeFormat('en-AU', {
  timeZone: 'Australia/Melbourne',
  weekday: 'short',
  hour: 'numeric',
  minute: '2-digit',
})

export type PickupSlot = {
  value: string
  label: string
}

export function createPickupSlots(now = new Date(), slotCount = 12): PickupSlot[] {
  const earliestTime = now.getTime() + fifteenMinutesInMilliseconds
  const firstSlot = Math.ceil(earliestTime / fifteenMinutesInMilliseconds)
    * fifteenMinutesInMilliseconds

  return Array.from({ length: slotCount }, (_, index) => {
    const date = new Date(firstSlot + index * fifteenMinutesInMilliseconds)

    return {
      value: date.toISOString(),
      label: pickupTimeFormatter.format(date),
    }
  })
}
