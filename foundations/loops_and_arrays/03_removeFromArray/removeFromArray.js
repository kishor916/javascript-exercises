const removeFromArray = function (array, ...args) {
  // Use filter to build a new array with items that are NOT in args
  const newArray = array.filter((item) => !args.includes(item));

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
