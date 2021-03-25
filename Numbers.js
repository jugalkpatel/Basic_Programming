// 1
const sum = (firstnum, secondnum) => {
    return firstnum + secondnum;
}
const added = sum(20, 40);
console.log(added);

// 2
const calsimpleinterest = (princpalamount, rate, time) => {
    return (princpalamount * time * rate) / 100;
}
const si = calsimpleinterest(100, 6, 2);
console.log(si);

// 3
const calkineene = (mass, velocity) => {
    return 0.5 * mass * velocity * velocity;
}
const massvol = calkineene(55, 3.87);
console.log(massvol);

// 4
const fartocel = (temp) => {
    return (temp - 32) * 5 / 9;
};
const t = fartocel(56);
console.log(t.toFixed(2));

// 5
// area
// periemeter
const measures = (a) => {
    return {area: a * a, perimeter: 4 * a, surfaceArea: 6 * a * a, volume: a * a * a};
}
const cal = measures(5);
console.log({...cal});

// 6 
const calprofit = (cp, sp) => {
    if (cp > sp) return `${cp - sp} loss`;
    return `${sp - cp} profit`;
}
const profit = calprofit(0, 0);
console.log(profit);

// 7 
const sumofn = (n) => {
    let acc = 0;
    for (let i = 0; i <= n; i++) {
        acc = acc + i;
    }
    return acc;
};
const add = sumofn(100);
console.log(add);

// 8
const printodd = (number) => {
    let odds = [];
    for (i = 0; odds.length !== number; i++) {
        if (i % 2 !== 0) odds.push(i);
    }
    return odds;
}
const odd = printodd(4);
odd.forEach((num) => {
    console.log(num);
})

// 9
const countdigits = (string) => {
    let sum = 0;
    for (let i of string) {
        if (!isNaN(i)) sum += Number(i);
    }
    return sum;
}
const stringsum = countdigits("hello12hk34");
console.log(stringsum);

// 10
const revnum = (number) => {

    let strnum = String(number);
    let revnum = "";
    for (let i = strnum.length - 1; i >= 0; i--) {
        revnum += strnum[i];
    }
    return revnum;
}

const reverse = revnum("1234");
console.log(reverse);

// 11
const rotate = (number, rotations) => {
    const numArr = [...number.toString()];
    for (let i = 0; i < rotations; i++) {
        numArr[i] = numArr[i + 1];
    }
    return numArr.join("");
}
const num = rotate(1234, 2);
console.log(num);
// 12
// decimal to binary
const tobinary = (decimal) => {
    let remainder = "";
    let quotient = decimal;
    while (quotient !== 0) {
        remainder += String(quotient % 2);
        quotient = parseInt(quotient / 2);
    }
    return [...remainder].reverse().join("");
}
const inbinary = tobinary(10);
console.log(inbinary);

// octal to decimal
const todecimal = (decimal) => {
    let localdecimal = decimal;
    let result = 0;
    for (let i = 0; i < decimal.toString().length; i++) {
        let digit = localdecimal % 10;
        result += digit * (8 ** i);
        localdecimal = parseInt(localdecimal / 10);
    }
    return result;
}
const indecimal = todecimal(116);
console.log(indecimal);