/**
 * @param {string} str
 * @return {number}
 */
let max = 0x7fffffff;
let min = -1 * max - 1;
var myAtoi = function(str) {
  str = str.trim();
  let negative = false;
  let number = "";
  let foundSign = false;
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c.match(/[-+]/)) {
      if (foundSign || number.length) {
        break;
      }
      foundSign = true;
      if (c === "-") {
        negative = true;
      }
    } else if (c.match(/[0-9]/)) {
      number += c;
    } else {
      break;
    }
  }
  if (number.length) {
    number = (negative ? -1 : 1) * Number(number);
    if (number < min) {
      number = min;
    } else if (number > max) {
      number = max;
    }
    return number;
  }
  return 0;
};

// let a;
// a = myAtoi("42");
// a;
// a = myAtoi("   -42");
// a;
// a = myAtoi("4193 with words");
// a;
// a = myAtoi("words and 987");
// a;
// a = myAtoi("-91283472332");
// a;
// a = myAtoi("+-2");
// a;
// a = myAtoi("0-1");
// a;
// a = myAtoi("-5-");
// a;
