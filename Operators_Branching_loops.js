// 1
const addFiveNumbers = (...numbers) => {
    // console.log(numbers);
    let ret = numbers.reduce((acc, num) => {
        return acc += num;
    }, 0);
    return ret;
}

const sum = addFiveNumbers(1, 2, 3, 4, 5);
console.log(sum);

// 2
const checkOddEven = (number) => number % 2 === 0;
// let userInput = Number(prompt("Enter number:"));
console.log(`${checkOddEven(45) ? "Number is Even" : "Number is odd"}`)


// 3 
const findMinMax = (firstNumber, secondNumber) => {
    if (firstNumber > secondNumber) {
        return `Maximum: ${firstNumber}, Minimum: ${secondNumber}`;
    }
    return `Maximum: ${secondNumber}, Minimum: ${firstNumber}`;
}
const resultMinMax = findMinMax(129, 251);
console.log(resultMinMax);

// 4
const findMaxOfThree = (fstNum, secNum, thdNum) => {
    if ((fstNum > secNum) && (fstNum > thdNum)) {
        return `Maximum is: ${fstNum}`;
    } else if ((secNum > fstNum) && (secNum > thdNum)) {
        return `Maximum is: ${secNum}`;
    }
    return `Maximum is: ${thdNum}`;
}

const maxOfThreeResult = findMaxOfThree(8, 23, 17);
console.log(maxOfThreeResult);

// 5
const findMinOfThree = (fstNum, secNum, thdNum) => {
    if ((fstNum < secNum) && (fstNum < thdNum)) {
        return `Minimum is: ${fstNum}`;
    } else if ((secNum < fstNum) && (secNum < thdNum)) {
        return `Minimum is: ${secNum}`;
    }
    return `Minimum is: ${thdNum}`;
}

const minOfThreeResult = findMinOfThree(8, 23, 17);
console.log(minOfThreeResult);

// 6
const findDays = (month) => {
    if (month < 1 || month > 12) return "Not a valid Month";
    if ((month <= 7)) {
        return month % 2 === 0 ? 'Month has 30 Days' : 'Month has 31 Days';
    }
    return month % 2 === 0 ? 'Month has 31 Days' : 'Month has 30 Days';
}

const days = findDays(8);
console.log(days);

// 1
const fizzBuzz = () => {
    let arr = [];
    for (let i = 1; i <= 100; i++) {

        if ((i % 3 === 0) && (i % 5 === 0)) {
            arr.push('FizzBuzz');
            continue;
        }

        if (i % 3 === 0) {
            arr.push('Fizz');
            continue;
        }

        if (i % 5 === 0) {
            arr.push('Buzz');
            continue;
        }

        arr.push(i);
    }
    return arr;
}
console.log(fizzBuzz());

// 2
let str = "";
for (let i = 0; i < 5; i++) {
    str += "*";
    console.log(str);
}

// 3
const fibonacci = (number) => {

    let fiboArr = [0, 1];
    let prev = result = fiboArr[0];
    let curr = fiboArr[1];
    while(result < number) {
        result = prev + curr;
        prev = curr;
        curr = result;
        fiboArr.push(result);
    }

    return fiboArr;
}
const fiboSeries = fibonacci(21);
console.log(fiboSeries);

// 4
const findFactorial = (number) => {
    let ret = 1;
    for (let i = 1; i <= number; i++) {
        ret = ret * i;
    }
    return ret;
}
console.log(findFactorial(5));

// 5 
const checkPrime = (number) => {

    let isPrime = true;
    for(i = 0; i <= number; i++) {
        if (i === 1 || i === number) continue;
        if(number % i === 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime ? `${number} is Prime` : `${number} is not prime`;
}
let prime = checkPrime(12);
console.log(prime);


// 6
const checkDay = (inputDay) => {
    let day = inputDay.toLowerCase();
    switch(day) {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            return `${day} is not a weekday`;
        case "saturday":
        case "friday":
            return `${day} is a weekday`;
        default:
            return "enter a valid day";
    }
}

const day = checkDay("Tuesday");
console.log(day);
