const text = document.querySelector('textarea');
const scramble = document.querySelector('.scramble');
const unscramble = document.querySelector('.unscramble');
const decrypt = document.querySelector('.decrypt');
const textResult = document.querySelector('.alert');
const hidden = document.querySelector('.hidden');

const scrambleText = input => {
  let words = input.value.toLowerCase();
  if(words.length < 4) {
    return 'Enter a message with 4 or more characters to encrypt!';
  }
  return words.split('').reverse().map(w => {
    if(w === 'a') {
      return '^';
    } else if(w === 'e') {
      return '@';
    } else if(w === ' ') {
      return ':';
    } else if(w === 'i') {
      return '$';
    } else if(w === 'o') {
      return '~';
    } else if(w === 'u') {
      return '%';
    } else if(w === 't') {
      return '|';
    } else if(w === 'r') {
      return '`';
    } else if(w === 's') {
      return '}';
    } else if(w === 'n') {
      return '_';
    } else if(w === 'l') {
      return '[';
    } else if(w === 'h') {
      return ']';
    } else if(w === 'd') {
      return '{';
    } else if(w === 'y') {
      return '*';
    } else if(w ==='b') {
      return '/';
    } else if(w === 'f') {
      return 'a';
    } else if(w === 'c') {
      return 'e';
    } else if(w === 'g') {
      return 'i';
    } else if(w === 'j') {
      return 'o';
    } else if(w === 'k') {
      return 'u';
    } else if(w === 'm') {
      return '#';
    } else if(w === 'p') {
      return '&';
    } else if(w === 'q') {
      return '+';
    } else if(w === 'v') {
      return '<';
    } else if(w === 'w') {
      return '>';
    } else if(w === 'x') {
      return '"';
    } else if(w === 'z') {
      return '=';
    } else {
      return w;
    }
  }).join('')
  /*return words.split(' ').map(word => {
    return word.split('').map(w => {
      return word.indexOf(w) % 2 === 0 ? w.toUpperCase() : w.toLowerCase();
    }).reverse().join('')
  }).join(' ')*/
};
console.log(scrambleText(text));
scramble.addEventListener('click', (e) => {
  e.preventDefault();
  scrambleText(text);
  console.log(scrambleText(text));
  hidden.classList.remove('hidden');
  textResult.textContent = scrambleText(text);
});

const unscrambleText = input => {
  let wordsArr = input.textContent.split(' ');
  return wordsArr.map(word => {
    return word.split('').reverse().join('')
  }).join(' ')
};

unscramble.addEventListener('click', (e) => {
  e.preventDefault();
  textResult.textContent = unscrambleText(textResult).toLowerCase();
});

const decryptText = input => {
  let words = input.value;
  /*return words.split(' ').map(word => {
    return word.split('').reverse().join('')
  }).join(' ')*/
};

decrypt.addEventListener('click', (e) => {
  e.preventDefault();
  decryptText(text);
  textResult.textContent = decryptText(text);
})
