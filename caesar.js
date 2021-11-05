function splitString(str) {
  return str.split('');
}

function stringToUnicode(arr) {
  return arr.map((x) => x.charCodeAt(0));
}

function addNumToCharCode(arr, num) {
  const moddedNum = num % 26;
  const newArr = arr.map((x) => {
    if (x >= 65 && x <= 90) {
      x = x + moddedNum;
      if (x > 90) {
        return (x = x - 26);
      } else if (x < 65) {
        return (x = x + 26);
      } else {
        return x;
      }
    } else if (x >= 97 && x <= 122) {
      x = x + moddedNum;
      if (x > 122) {
        return (x = x - 26);
      } else if (x < 97) {
        return (x = x + 26);
      } else {
        return x;
      }
    } else {
      return x;
    }
  });
  return newArr;
}

function turnBackToString(arr) {
  const newArr = arr.map((x) => String.fromCharCode(x));
  return newArr;
}

export default function caesar(str, num) {
  const split = splitString(str);
  const charCode = stringToUnicode(split);
  const addedNum = addNumToCharCode(charCode, num);
  const backToString = turnBackToString(addedNum);
  const result = backToString.join('');
  return result;
}
