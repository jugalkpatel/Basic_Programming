// 1
const toUpperCase = (string) => {
    return string.toUpperCase();
}
const upperCased = toUpperCase("NeoGCamp");
console.log(upperCased);

// 2
const appendStr = (firstString, secondString) => {
    return firstString + " " + secondString;
}
const appended = appendStr("Good", "Morning");
console.log(appended);

// 3
const getLength = (string) => {
    return string.length;
}
console.log(getLength("NeogCamp"));

// 4
const toNumber = (string) => {
    return !isNaN(string) ? Number(string) : "Not Possible";
}

// 5
const delVowel = (string) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelsRemoved = [...string].filter((char) => !vowels.includes(char));
    return vowelsRemoved.join("");
}
const ret = delVowel("hello, world");
console.log(ret);

// 48 to 57
// 97 to 122
const alphaNumeric = (string) => {
    let localString = string.toLowerCase();
    let numericFlag = false;
    let alphaFlag = false;
    for (let i = 0; i < string.length; i++) {

        if (numericFlag && alphaFlag) break;

        if ((localString.charCodeAt(i) > 97) && (localString.charCodeAt(i) < 122)) {
            alphaFlag = true;
        }

        if ((localString.charCodeAt(i) > 48) && (localString.charCodeAt(i) < 57)) {
            numericFlag = true;
        }
    }
    return numericFlag && alphaFlag ? `${string} is alphaNumeric` : `${string} is not alphanumeric`;
}
console.log(alphaNumeric("jugalpatel12"));

// 7
const findLongSmall = (...strings) => {
    const reducer = (acc, stringItem) => {
        // return (stringItem.length >= acc.longest.length) ? { ...acc, longest: stringItem } 
        //     : (stringItem.length <= acc.smallest.length) ? {...acc, smallest: stringItem }
        //     : acc
        if (stringItem.length > acc.longest.length) {
            acc = { ...acc, longest: stringItem }
        }
        if (stringItem.length < acc.smallest.length) {
            acc = { ...acc, smallest: stringItem }
        }
        return acc;
    }
    return strings.reduce(reducer, { longest: "A", smallest: "99999999" });
}
console.log(findLongSmall("jugal", "patel", "thirdkp"));

// 8
const countConVol = (string) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelsRemoved = [...string].filter((char) => !vowels.includes(char));
    return { consoCount: vowelsRemoved.length, vowelCount: string.length - vowelsRemoved.length };
};
const { consoCount, vowelCount } = countConVol("jugalkpatel");
console.log(consoCount, vowelCount);


// 9
const isGreaterThanSeven = (string) => {
    let counter = 0;
    [...string].forEach(() => {
        counter += 1;
    })
    return counter > 7;
}
console.log(isGreaterThanSeven("hello,"));

// 10
const copySmaller = (firstString, secondString) => {
    if (firstString.length >= secondString.length) return firstString + secondString;
    return secondString + firstString;
};
console.log(copySmaller("neogcamp", "jugalkpatel"));

// 11
const alphaNumeric = (string) => {
    let localString = string.toLowerCase();
    let numericFlag = false;
    let alphaFlag = false;
    let alpaNumric = "";
    for (let i = 0; i < string.length; i++) {

        if (numericFlag && alphaFlag) break;

        if ((localString.charCodeAt(i) > 97) && (localString.charCodeAt(i) < 122)) {
            alphaFlag = true;

        }

        if ((localString.charCodeAt(i) > 48) && (localString.charCodeAt(i) < 57)) {
            numericFlag = true;
        }
    }
    return numericFlag && alphaFlag ? `${string} is alphaNumeric` : `${string} is not alphanumeric`;
}
// 
// cat
// c,a,t,
// 13
const removeTime = (inputString) => {
    return inputString.substr(0, inputString.length - 4);
}
console.log(removeTime("Wed April 15, 7pm"));

// 14
const mask = (inputString) => {
    let subset = inputString.substr(0, inputString.length - 4);
    let masked = ([...subset].map(() => "#")).join("");
    return masked + inputString.substr(inputString.length - 4);
}
console.log(mask("55555555556666"));

// 15
const capitalCase = (inputString) => {
    let counter = 0;
    let str = "";
    let localString = inputString.replaceAll(" ", "");
    for (let i of localString) {
        if (counter < 6) {
            str += i.toUpperCase();
            counter += 1;
        } else {
            str += i;
        }
    }
    console.log("from capital case: ", str);
}
console.log(capitalCase("tic tac toe is a fun game"));

// advanced
// 1
const replaceChars = (inputString, c1, c2) => {
    return inputString.replaceAll(c1, c2);
}
console.log(replaceChars("jugalkpatel", "a", "x"));

// 2
const removeSpaces = (inputString) => {
    return inputString.replaceAll(" ", "");
}
console.log(`String After removing spaces: ${removeSpaces("j a ga la kdk sk")}`)

// 3
const revWordWise = (inputString) => {
    return inputString.split(" ").reverse().join(" ");
}
console.log(revWordWise("Welcome to NeoG Camp"));

// 4
const charCount = (inputString) => {
    return [...inputString].reduce((acc, value) => {
        return acc[value] ? { ...acc, [value]: acc[value] + 1 } : { ...acc, [value]: 1 }
    }, {})
}
console.log(charCount("jugalkpatel"));

// 5
const toggleCase = (inputString) => {
    let str = "";
    for (let i = 0; i < inputString.length; i++) {
        if (i % 2 !== 0) {
            str += inputString[i].toUpperCase();
            continue;
        };
        str += inputString[i].toLowerCase();
    }
    return str;
}
console.log(toggleCase("neogcamp"));

// 6
const removeOccurance = (inputString, word) => {
    return inputString.replaceAll(word, "");
}
console.log(removeOccurance("programming camp are amazing", "programming"));