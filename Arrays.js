// 1
const exmAry = [10, 4, 5, 2, 5, 6, 9];
const sumOfArray = (ary) => {
    return ary.reduce((num, acc) => num + acc);
}
console.log(sumOfArray(exmAry));

// 2
const findAvg = (ary) => {
    return ary.reduce((num, acc) => num + acc) / ary.length;
}
console.log(findAvg(exmAry).toFixed(2));

// 3
const maxMin = (ary) => {
    const ret = ary.reduce((acc, val) => {
        // console.log({...acc});
        return val > acc.max ? { ...acc, max: val }
            : val < acc.min ? { ...acc, min: val }
                : acc

    }, { max: 0, min: 999 });
    return ret;
}
console.log(maxMin(exmAry));

// 4
const find_Median_Mode = (ary) => {
    let modeCount = {};
    let ret = ary.reduce((acc, val) => {
        return { ...acc, [val]: acc[val] ? acc[val] + 1 : 1 };
    }, modeCount);
    let retMode = "";
    for (let i in ret) {
        if (ret[i] > retMode) {
            retMode = i;
        }
    }
    // console.log(parseInt(ary.length / 2));
    return { median: ary[parseInt(ary.length / 2)], mode: retMode };
}
const result = find_Median_Mode(exmAry);
console.log({ result });

// 5
const sum_Of_Arrays = (firstAry, secondAry) => {
    const combined = firstAry.concat(secondAry);
    return combined.reduce((acc, num) => acc + num);
}
console.log(sum_Of_Arrays([3, 5, 2, 9, 4], [6, 2, 8, 1, 3]));

// 6
// find number of consonants and vowels in a string.
const count_Con_Vol = (ary) => {
    let ret = ary.map((string) => {
        return {
            [string]: [...string].reduce((acc, char) => {
                return ["a", "e", "o", "i", "u"].includes(char) ? { ...acc, vowel: acc.vowel + 1 } : { ...acc, consonent: acc.consonent + 1 };
            }, { vowel: 0, consonent: 0 })
        }
    })
    console.log(ret);
}
count_Con_Vol(["redux", "react", "neogcamp", "hello", "world"]);

// 7
const shiftX = (suppliedAry, x) => {
    let ary = suppliedAry;
    for (let i = 0; i < x; i++) {
        let last = ary[ary.length - 1];
        for (let i = ary.length - 1; i > 0; i--) {
            ary[i] = ary[i - 1];
        }
        ary[0] = last;
    }
    return ary;
}
console.log(`from shifting elements: ${shiftX([3,4,5,6], 3)}`);

// 8
const newMatrix = (rows, cols) => {
    let matrix = new Array(rows);
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(cols);
    }
    return matrix;
}
let firstMatrix =  [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

let secondMatrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let resultMatrix = newMatrix(3, 3);
for (let i = 0; (i < firstMatrix.length && i < secondMatrix.length); i++) {
    for (let j = 0; (j < firstMatrix[i].length && j < secondMatrix[i].length); j++) {
        resultMatrix[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
    }
}
console.log(resultMatrix);

const transposeMatrix = (matrix, rows, cols) => {
    let trasposed = newMatrix(rows, cols);
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            trasposed[j][i] = matrix[i][j];
        }
    }
    return trasposed;
} 
let getTransposedMatrix = transposeMatrix(firstMatrix, 3, 3);
console.log("Initial Matrix: ", firstMatrix);
console.log("Transposed Matrix: ", getTransposedMatrix);