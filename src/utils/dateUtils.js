export const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export function toMonthYear(date) {
 return `${monthNames[date.getMonth()]} ${date.getFullYear()}`
}
