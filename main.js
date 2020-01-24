const text = document.querySelector('textarea');
const scramble = document.querySelector('.scramble');
const decrypt = document.querySelector('.decrypt');
const textResult = document.querySelector('.alert');
const hidden = document.querySelector('.hidden');
const copy = document.querySelector('.copy');

const scrambleText = input => {
  let words = input.value.toLowerCase();
  if (words.length < 4) {
    return 'Enter a message with 4 or more characters to encrypt!';
  }
  return words.split('').reverse().map(w => {
    if (w === 'a') {
      return '^';
    } else if (w === 'e') {
      return '@';
    } else if (w === ' ') {
      return ':';
    } else if (w === 'i') {
      return '$';
    } else if (w === 'o') {
      return '~';
    } else if (w === 'u') {
      return '%';
    } else if (w === 't') {
      return '|';
    } else if (w === 'r') {
      return '`';
    } else if (w === 's') {
      return '}';
    } else if (w === 'n') {
      return '_';
    } else if (w === 'l') {
      return '[';
    } else if (w === 'h') {
      return ']';
    } else if (w === 'd') {
      return '{';
    } else if (w === 'y') {
      return '*';
    } else if (w === 'b') {
      return '/';
    } else if (w === 'f') {
      return 'a';
    } else if (w === 'c') {
      return 'e';
    } else if (w === 'g') {
      return 'i';
    } else if (w === 'j') {
      return 'o';
    } else if (w === 'k') {
      return 'u';
    } else if (w === 'm') {
      return '#';
    } else if (w === 'p') {
      return '&';
    } else if (w === 'q') {
      return '+';
    } else if (w === 'v') {
      return '<';
    } else if (w === 'w') {
      return '>';
    } else if (w === 'x') {
      return '"';
    } else if (w === 'z') {
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

/*const unscrambleText = input => {
  let wordsArr = input.textContent.split(' ');
  return wordsArr.map(word => {
    return word.split('').reverse().join('')
  }).join(' ')
};*/

const decryptText = input => {
  let words = input.value.toLowerCase();
  if (words.length < 4) {
    return 'Enter a message with 4 or more characters to decrypt!';
  }
  return words.split('').reverse().map(w => {
    if (w === '^') {
      return 'a';
    } else if (w === '@') {
      return 'e';
    } else if (w === ':') {
      return ' ';
    } else if (w === '$') {
      return 'i';
    } else if (w === '~') {
      return 'o';
    } else if (w === '%') {
      return 'u';
    } else if (w === '|') {
      return 't';
    } else if (w === '`') {
      return 'r';
    } else if (w === '}') {
      return 's';
    } else if (w === '_') {
      return 'n';
    } else if (w === '[') {
      return 'l';
    } else if (w === ']') {
      return 'h';
    } else if (w === '{') {
      return 'd';
    } else if (w === '*') {
      return 'y';
    } else if (w === '/') {
      return 'b';
    } else if (w === 'a') {
      return 'f';
    } else if (w === 'e') {
      return 'c';
    } else if (w === 'i') {
      return 'g';
    } else if (w === 'o') {
      return 'j';
    } else if (w === 'u') {
      return 'k';
    } else if (w === '#') {
      return 'm';
    } else if (w === '&') {
      return 'p';
    } else if (w === '+') {
      return 'q';
    } else if (w === '<') {
      return 'v';
    } else if (w === '>') {
      return 'w';
    } else if (w === '"') {
      return 'x';
    } else if (w === '=') {
      return 'z';
    } else {
      return w;
    }
  }).join('')
  /*return words.split(' ').map(word => {
    return word.split('').reverse().join('')
  }).join(' ')*/
};

decrypt.addEventListener('click', (e) => {
  e.preventDefault();
  decryptText(text);
  hidden.classList.remove('hidden');
  textResult.textContent = decryptText(text);
  console.log(decryptText(text));
});

const copyCommand = () => {
  const range = document.createRange();
  range.selectNode(textResult);
  console.log(range);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Copied! " + textResult.textContent);
  console.log("Copied the following text successfully : " + textResult.textContent);
};

copy.addEventListener('click', copyCommand);
