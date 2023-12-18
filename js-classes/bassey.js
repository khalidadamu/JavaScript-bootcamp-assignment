function getFirstLast(initialArray) {
  let array1 = [];
  array1.push(initialArray[0], initialArray[initialArray.length - 1]);

  return array1;
}

console.log(getFirstLast(["red", "lilac", "indigo", "green", "blue", "ruby"]));
