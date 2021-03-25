// 1
const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 86,
		science: 90,
		english: 75,
		computer: 85
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60
	}
];

// print name and total marks of each student
studentDetails.forEach((student) => {
	console.log(`StudentName: ${student.name}`);
	console.log(`Total Marks: ${student.maths + student.english + student.science + student.computer}`)
})

// print the name of the student whose total marks is highest
let highLow = studentDetails.reduce((acc, student) => {
	let totalMarks = student.computer + student.english + student.science + student.maths;
	return totalMarks > acc.highest ? { ...acc, [student.name]: [totalMarks], highest: [totalMarks] }
		: totalMarks < acc.lowest ? { ...acc, [student.name]: [totalMarks], lowest: [totalMarks] }
			: acc;
}, { highest: 0, lowest: 999 });
console.log(highLow);

// print the average marks of the class in computer subject
let avgComputerMarks = studentDetails.reduce((acc, student) => {
	return acc + student.computer;
}, 0) / studentDetails.length;
console.log(`Avg Computer Marks of the class is: ${avgComputerMarks}`);

const getGrade = (totalMarks) => {
	if (totalMarks > 400 * 0.75) {
		return "A";
	}

	if (totalMarks > 400 * 0.60) {
		return "B";
	}

	if (totalMarks > 400 * 0.35) {
		return "C";
	}

	return "D";
}

// print grades and print total students passed with their name
let classResult = () => {
	return studentDetails.map((student) => {
		let totalMarks = student.computer + student.english + student.maths + student.science;
		let grade = getGrade(totalMarks);
		let result = grade !== "D" ? "PASS" : "FAIL";
		return {
			Name: student.name,
			Grade: grade,
			Result: result
		}
	}).reduce((acc, student) => {
		return student.Result !== "FAIL" ? { ...acc, passCount: acc.passCount + 1, passed: [...acc.passed, student.Name] } : acc;
	}, { passCount: 0, passed: [] });
};
console.log(classResult())

// 2
class Employee {
	constructor(name, id, basicSalary, hraAmount, allowancesAmount) {
		this.name = name;
		this.id = id;
		this.basicSalary = basicSalary;
		this.hraAmount = hraAmount;
		this.allowancesAmount = allowancesAmount;
	}

	getSalary() {
		return 
	}
}

// 3
class BankAccount {

	constructor(name, accNumber, balance, accType, ifscCode) {
		this.name = name;
		this.accNumber = accNumber;
		this.balance = balance;
		this.accType = accType;
		this.ifscCode = ifscCode;
	}

	get Balance() {
		return this.balance;
	}

	get Name() {
		return this.name;
	}

}

let firstCustomer = new BankAccount(
	"Mahesh",
	123345,
	1223424,
	"Savings",
	1321
);
let secondCustomer = new BankAccount(
	"Venkatesh",
	122345,
	1223424,
	"Savings",
	1221
);
let thirdCustomer = new BankAccount(
	"Suresh",
	132245,
	1223424,
	"Savings",
	1241
);
console.log(`
	Account Holder : Balance

	${firstCustomer.Name} : Rs. ${firstCustomer.Balance}
	${secondCustomer.Name} : Rs. ${secondCustomer.Balance}
	${thirdCustomer.Name} : Rs. ${thirdCustomer.Balance}
`);
console.log(`Avg account balance: ${parseInt((firstCustomer.Balance + secondCustomer.balance / thirdCustomer.balance) / 3)}`)

// 4 
const cartItems = [
	{
		id: "101",
		name: "Oreo",
		count: 2,
		price: 30.0,
		discount: 0.18
	},
	{
		id: "102",
		name: "Red Bull",
		count: 1,
		price: 99.0,
		discount: 0.15
	},
	{
		id: "103",
		name: "Dairy Milk Silk",
		count: 3,
		price: 175.0,
		discount: 0.05
	},
	{
		id: "104",
		name: "Pulse Candy Pack",
		count: 1,
		price: 135.0,
		discount: 0.2
	}
];

console.log(`Total Items: ${cartItems.length}`);
const totalPriceDiscount = () => {
	return cartItems.reduce((acc, product) => {
		return { ...acc, price: acc.price + product.price, discountedPrice: acc.discountedPrice + (product.price - (product.price * product.discount)) };
	}, { price: 0, discountedPrice: 0 })
}
console.log(totalPriceDiscount());

const totalCartValue = () => {
	let { discountedPrice } = totalPriceDiscount();
	return discountedPrice + discountedPrice * 0.18;
}
console.log(`Total Cart Value: ${totalCartValue()}`);