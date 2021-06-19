export default class ArrayHelper {
  static addOrReplace(array, value, comparerBase) {
    const comparer = (typeof comparerBase === 'function') ? comparerBase : (a, b) => a === b;
    const exists = array.some((v) => comparer(v, value));
    // if (exists) {
    //   const newArray = array.filter((v) => v.id !== value.id).concat(value);
    //   return newArray;
    // }
    // const newArray = array.concat(value);
    // return newArray;
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