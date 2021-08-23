const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let strDecode = '';
    let wordMorse = '';
    let wordDecode = '';
    for (let i = 0; i < expr.length; i += 10) {
        for (let j = 0; j < 10; j++) {
            wordMorse = wordMorse + expr[j + i];
        }
        if (wordMorse === '**********') {
            strDecode = strDecode + ' ';
        } else {
            wordDecode = wordMorse.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
            strDecode = strDecode + MORSE_TABLE[wordDecode];
        }
        wordMorse = '';
        wordDecode = '';
    }

    console.log(strDecode);
    return strDecode;
}

module.exports = {
    decode
}