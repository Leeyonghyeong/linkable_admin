export const dateFormat = (_date: Date, text: string) => {
  const date = new Date(_date)
  const localDate = new Date(date.setHours(date.getHours() - 9))

  const leftPad = (value: number) => {
    if (value >= 10) {
      return value
    }

    return `0${value}`
  }

  const year = localDate.getFullYear()
  const month = leftPad(localDate.getMonth() + 1)
  const day = leftPad(localDate.getDate())

  return [year, month, day].join(text)
}
