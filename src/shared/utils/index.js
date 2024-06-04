export const IsArraysEqualByIdWithSet = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false

  const idSet1 = new Set(arr1.map((item) => item.id))
  const idSet2 = new Set(arr2.map((item) => item.id))

  return [...idSet1].every((id) => idSet2.has(id))
}

export const isArraysEqualDeep = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false

  const compareObjects = (obj1, obj2) => {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length) return false

    return keys1.every((key) => {
      const val1 = obj1[key]
      const val2 = obj2[key]

      if (val1 instanceof Object && val2 instanceof Object) {
        return compareObjects(val1, val2)
      }
      return val1 === val2
    })
  }

  return arr1.every((item, index) => compareObjects(item, arr2[index]))
}

export const isObjectEmpty = (object) => {
  for (const prop in object) {
    if (Object.hasOwn(object, prop)) {
      return false
    }
  }

  return true
}

export const isObjectEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }
  for (let key of keys1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!IsArraysEqualByIdWithSet(obj1[key], obj2[key])) {
        return false
      }
    } else if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true
}

export const formatPhoneNumber = (value, countryCode = "+7") => {
  if (!value) return value

  const phoneNumber = value
    .replace(new RegExp(`^\\${countryCode}`), "")
    .replace(/[^\d]/g, "")
    .slice(0, 10)

  if (phoneNumber.length < 1) return ``
  if (phoneNumber.length < 4)
    return phoneNumber.replace(/(\d{1})/, `${countryCode} ($1`)
  if (phoneNumber.length < 7)
    return phoneNumber.replace(/(\d{3})(\d{1})/, `${countryCode} ($1) $2`)
  if (phoneNumber.length < 9)
    return phoneNumber.replace(
      /(\d{3})(\d{3})(\d{1})/,
      `${countryCode} ($1) $2 $3`
    )
  return phoneNumber.replace(
    /(\d{3})(\d{3})(\d{2})(\d{1})/,
    `${countryCode} ($1) $2 $3 $4`
  )
}

export const formatNumber = (value) => {
  if (!value) return value
  const formattedValue = value.replace(/[^\d]/g, "")
  return formattedValue
}

export const formatTimeString = (timeString) => {
  const date = new Date(timeString)
  const hours = date.getHours().toString().padStart(2, "0")
  const minutes = date.getMinutes().toString().padStart(2, "0")
  return `${hours}:${minutes}`
}

