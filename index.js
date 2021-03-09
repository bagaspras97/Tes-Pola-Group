const name = 'hannah';
const tes = 'bagas';

const checkPalindrome = (value) => {
  let result = '';
  if (value.split('').reverse().join('') === value) {
    result = 'betul ini Palindrome';
    return result;
  }
  return value;
};
console.log(checkPalindrome(name));
