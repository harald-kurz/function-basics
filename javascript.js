function add7(num) {
  return num + 7;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function lastLetter(text) {
  return text.charAt(text.length - 1);
}

console.log(add7(43));
console.log(multiply(2, 3));
console.log(capitalize('lowercase'));
console.log(capitalize('UPPERCASE'));
console.log(capitalize('BoTh'));
console.log(lastLetter("abcd"));
