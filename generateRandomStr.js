// 
// generateRandomStr.js
// @ianpasm(kno30826@gmail.com)
// 2018-08-13 11:17:17
// 

function random_str(length) {
  var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  ALPHABET += 'abcdefghijklmnopqrstuvwxyz';
  ALPHABET += '0123456789@#$%^&*()-_=+/\.?!<>|~';
  var str = '';
  for (var i=0; i < length; ++i) {
    var rand = Math.floor(Math.random() * ALPHABET.length);
    str += ALPHABET.substring(rand, rand + 1);
  }
  return str;
}

console.log(random_str(16))
