/** product: calculate the product of an array of numbers. */

const product = nums =>
  nums.length === 0 ? 1 :
    nums.length === 1 ? nums.at(0) :
      nums[0] * product(nums.slice(1));
//Non-Ternary
// function product(nums) {
//   if (nums.length === 0)
//     return 1;
//   if (nums.length === 1)
//     return nums.at(0);
//   return nums[0] * product(nums.slice(1));
// }


/** longest: return the length of the longest word in an array of words. */

const longest = words =>
  words.length === 0 ? 0 :
    words.length === 1 ? words.at(0).length :
      Math.max(words[0].length, longest(words.slice(1)));
//Non-Ternary
// function longest(words) {
//   if (words.length === 0)
//     return 0;
//   if (words.length === 1)
//     return words.at(0).length;
//   return Math.max(words[0].length, longest(words.slice(1)));
// }

/** everyOther: return a string with every other letter. */

const everyOther = str =>
  str.length === 0 ? '' :
    str[0] + everyOther(str.slice(2));

/** isPalindrome: checks whether a string is a palindrome or not. */

const isPalindrome = str =>
  str.length <= 1 ? true :
    str[0] !== str.at(-1) ? false :
      isPalindrome(str.slice(1, -1));
//Non-Ternary
// function isPalindrome(str) {
//   if (str.length <= 1)
//     return true;
//   if (str[0] !== str.at(-1))
//     return false;
//   return isPalindrome(str.slice(1, -1));
// }

/** findIndex: return the index of val in arr (or -1 if val is not present). */

const findIndex = (arr, val, idx = 0) =>
  idx >= arr.length ? -1 :
    arr[idx] === val ? idx :
      findIndex(arr, val, idx + 1);
//Non-Ternary
// function findIndex(arr, val, idx = 0) {
//   if (idx >= arr.length)
//     return -1
//   if (arr[idx] === val)
//     return idx  
//   return findIndex(arr, val, idx + 1);
// }

/** revString: return a copy of a string, but in reverse. */

const revString = (str, idx = 0) =>
  str.length === 0 ? '' :
    str.at(-1) + revString(str.slice(0, -1));

/** gatherStrings: given an object, return an array of all of the string values. */

const gatherStrings = obj =>
  typeof obj !== 'object' || obj === null ? [] :
    Array.isArray(obj) ? obj.flatMap(gatherStrings) :
      Object.values(obj).flatMap(v => typeof v === 'string' ? [v] :
        gatherStrings(v));

// Non-Ternary
// function gatherStrings(obj) {
//   if (typeof obj !== 'object' || obj === null)
//     return [];
//   if (Array.isArray(obj))
//     return obj.flatMap(gatherStrings);
//   return Object.values(obj).flatMap(v => typeof v === 'string' ? [v] : gatherStrings(v))
// }

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

const binarySearch = (arr, val, start = 0, end = arr.length - 1) =>
  start > end ? -1 :
    (() => {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] === val) return mid;
      return arr[mid] < val ? binarySearch(arr, val, mid + 1, end) :
        binarySearch(arr, val, start, mid - 1);
    })();

// Non-Ternary
// function binarySearch(arr, val, start = 0, end = arr.length - 1) {
//   if (start > end)
//     return -1;
//   const mid = Math.floor((start + end) / 2);
//   if (arr[mid] === val)
//     return mid;
//   if (arr[mid] < val)
//     return binarySearch(arr, val, mid + 1, end);
//   return binarySearch(arr, val, start, mid - 1);
// };


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
