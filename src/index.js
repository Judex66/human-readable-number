module.exports = function toReadable (number) {

 const numWords = require('num-words');
 const str = numWords(number);
return str;
}
