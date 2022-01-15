import { ArrayHelper } from './ArrayHelper'

describe('ArrayHelper', () => {
  test('addOrReplace', () => {
    let array = [
      { index: 1, value: "a" },
      { index: 2, value: "b" },
    ]

    // add
    let newArray = ArrayHelper.addOrReplace(array, { index: 3, value: "c" }, (a, b) => a.index === b.index);
    expect(newArray).toHaveLength(3)
    expect(newArray).toContainEqual({ index: 3, value: "c" })

    // replace
    newArray = ArrayHelper.addOrReplace(newArray, { index: 2, value: "d" }, (a, b) => a.index === b.index);
    expect(newArray).toHaveLength(3)
    expect(newArray).toContainEqual({ index: 2, value: "d" })
  })
})