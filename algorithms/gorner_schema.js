
const gornerSchema = (
  x,
  list,
  i = 0,
) => {
  if (i === list.length - 1) {
    return list[i]
  } else {
    return list[i] + x * gornerSchema(x, list, i + 1)
  }
}

exports = gornerSchema
