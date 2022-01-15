export class ArrayHelper {
  static addOrReplace(array, value, comparerBase) {
    const comparer = (typeof comparerBase === 'function') ? comparerBase : (a, b) => a === b;
    const exists = array.some((v) => comparer(v, value));

    let newArray = array
    if (exists) {
      newArray = array.filter((v) => v.index !== value.index);
    }

    if (value.id === null) {
      return newArray
    }

    return newArray.concat(value);
  }
}