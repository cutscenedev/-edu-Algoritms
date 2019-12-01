
const gornerSchema = (x, list, i = 0) => {
  if (i === list.length - 1) {
    return list[i]
  } else {
    return list[i] + x * c(x, list, i + 1)
  }
}
