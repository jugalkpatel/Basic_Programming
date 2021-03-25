// Easy
// 1
const calPower = (a, b) => {
    return a ** b;
}
const power = calPower(2, 3);
console.log(power);

// 2
const areaOfHexagon = (length) => {
    let area = ((3 * Math.sqrt(3)) / 2) * Math.pow(length, 2);
    return area;
}
const getArea = areaOfHexagon(10);
console.log(getArea.toFixed(2));

// 3
const numOfWords = (sentence) => {
    return sentence.split(' ').length;
}
const words = numOfWords('We are neoGrammers');
console.log(words);

// 4
const findMin = (...numbers) => {
    return Math.min(...numbers);
}
const min = findMin(3, 5, 9, 1);
console.log(min);

// 5
const findMax = (...numbers) => {
    return Math.max(...numbers);
}
const max = findMax(3, 5, 9, 1);
console.log(max);

// 6
const typeOfTriangle = (firstLength, secondLength, thirdLength) => {
    if (firstLength + secondLength <= thirdLength &&
        firstLength + thirdLength <= secondLength &&
        secondLength + thirdLength <= firstLength) return "not a traingle";
    if ((firstLength === secondLength) && (secondLength === thirdLength)) return "equillateral Triangle";
    if ((firstLength === secondLength) || (firstLength === thirdLength) || (secondLength === thirdLength)) return "isosceles Triangle";

    if ((firstLength !== secondLength) && (secondLength !== thirdLength)) return "Scalen Triangle"

};
const triangle = typeOfTriangle(30, 60, 90);
console.log(triangle);

// Medium
// 1
const arrayLength = (arr) => {
    return arr.length;
}
const length = arrayLength([1, 5, 3, 8, 1]);
console.log(`Length of the array is: ${length}`);

// 2
const indexof = (arr, value) => {
    return arr.indexOf(value);
};
const index = indexof([1, 2, 3, 4, 5, 6], 3);
console.log(`Value is Present at index: ${index}`);

// 3
const replace = (arr, targetValue, value) => {
    return arr.map((val) => {
        return val === targetValue ? val = value : val;
    })
}
const afterReplace = replace([1, 4, 3, 5, 6, 8], 5, 10);
console.log(`Array after replace: ${afterReplace}`);

// 4
const mergeArray = (firstArr, secondArr) => {
    return [...firstArr, ...secondArr];
};
const merge = mergeArray([1, 3, 5], [2, 4, 6]);
console.log(`Array after merge: ${merge}`);

// 5
const charat = (string, index) => {
    return string[index];
}
const char = charat("neoGcamp", 4);
console.log(`charat: ${char}`);

// 6
const minDate = (firstDate, secondDate) => {
    const fDate = firstDate.split("/").reverse();
    const sDate = secondDate.split("/").reverse();
    for (let i = 0; (i < fDate.length) && (i < sDate.length); i++) {
        if (Number(fDate[i]) < Number(sDate[i])) return firstDate;
        return secondDate;
    }
}
const date = minDate('02/05/2021', '24/01/2021');
console.log(date);
// Advanced

// 1
const encodeString = (sentence, shift) => {
    let ret = [...sentence].map((char) => {
        return String.fromCharCode(char.charCodeAt(0) + shift);
    });
    return ret.join("");
}
const encoded = encodeString("neogcamp", 2);
console.log(encoded);

// 2 
const toSentenceCase = (sentence) => {
    const firstCapitalized = sentence.split(" ").map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    });
    return firstCapitalized.join(" ");
}
const capitalSen = toSentenceCase('we are neogrammers');
console.log(capitalSen);

// 3
const sortArray = (array) => {
    const arr = array;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let num = arr[i]
                arr[i] = arr[j];
                arr[j] = num;
            }
        }
    }
    return arr;
}
const sorted = sortArray([100, 83, 32, 9, 45, 61]);
console.log(sorted);

// 4
const reverseCharactersOfWord = (sentence) => {
    const rev = sentence.split(" ").map((item) => {
        return [...item].reverse().join("");
    });
    return rev.join(" ");
}
const revSen = reverseCharactersOfWord('we are neoGrammers');
console.log(revSen);