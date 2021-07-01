const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let str;
  if (expr.length % 10 !== 0) {
    throw new Error("string must be multiple of 10");
  }

  let temp = [];
  const space = /\*{10}/;

  const encodedStrings = expr.split(space);

  for (let i = 0; i < encodedStrings.length; i++) {
    let str = encodedStrings[i];
    let curWord = [];

    for (let j = 0, step = 10; j < str.length; j += step) {
      let encLetter = str.slice(j, j + step);
      let char = encodeChar(encLetter);
      curWord.push(char);
    }

    temp.push(curWord.join(""));
  }

  return temp.join(" ");
}

function encodeChar(str) {
  while (str.length < 10) {
    str += "0";
  }

  let morseWord = "";

  for (let i = 0; i < str.length; i += 2) {
    const encSlice = str.slice(i, i + 2);
    const decSlice = encSlice === "10" ? "." : encSlice === "11" ? "-" : "";
    morseWord += decSlice;
  }

  return MORSE_TABLE[morseWord];
}

module.exports = {
  decode,
};
