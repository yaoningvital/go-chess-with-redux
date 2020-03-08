export function getDefaultChesses () {
  let defaultChesses = []
  for (let i = 0; i < 19; i++) {
    let rowArr = []
    for (let j = 0; j < 19; j++) {
      rowArr.push(null)
    }
    defaultChesses.push(rowArr)
  }
  return defaultChesses
}