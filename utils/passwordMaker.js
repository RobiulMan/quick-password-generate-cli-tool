const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const sybmols = '!@#$%^&*_-+=()[]';

const passwordMaker = (length = 8, hasNumber = true, hasSymbols = true) => {
  let chars = alpha;
  hasNumber ? (chars += numbers) : '';
  hasSymbols ? (chars += sybmols) : '';

  return generatepassword(length, chars);
};

const generatepassword = (length, chars) => {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

module.exports = passwordMaker;
