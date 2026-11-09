// Part 1: Predict the Output

   // Problem 1 ---> 10,20 due to the scoping, 1st x deals with the local and the 2nd deals with the global

   // Problem 2 ---> 1 only bacuase we cant use let in if scope

   // Problem 3 ---> 2 because the function canot add 1 times

   // Problem 4 ---> 5 just an addition

   // Problem 5 ---> hi only مش عارف اشرح بقي

   // Problem 6 ---> checking..  , small

   // 1. Even or Odd
function isEven(n) {
    return n % 2 === 0;
}

for (let i = 1; i <= 20; i++) {
    if (isEven(i)) {
        console.log(i);
    }
}

// 2. Biggest of Three
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

console.log(maxOfThree(3, 9, 5));   // 9
console.log(maxOfThree(10, 2, 7));  // 10
console.log(maxOfThree(4, 4, 8));   // 8

// 3. Grade
function getGrade(degree) {
    if (degree < 0 || degree > 100) return "Invalid degree";
    if (degree >= 85) return "Excellent";
    if (degree >= 75) return "Very Good";
    if (degree >= 65) return "Good";
    if (degree >= 50) return "Pass";
    return "Fail";
}

// 4. Calculator ----> i asked ai
function calculate(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': 
            if (b === 0) return "Cannot divide by zero";
            return a / b;
        case '%': 
            if (b === 0) return "Cannot divide by zero";
            return a % b;
        default: return "Unknown operator";
    }
}

// 5. Sum of a Range
function sumRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

// 6. Factorial
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("Factorial(5):", factorial(5));  // 120

// 7. Power with a Default       ---->عملت search
function power(base, exponent = 2) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
console.log("Power(3):", power(3));  // 9

// 8. Count the Digits
function countDigits(num) {
  if (num === 0) return 1;
  let count = 0;
  while (num > 0) {
    num = (num - (num % 10)) / 10;
    count++;
  }
  return count;
}
console.log("CountDigits(12345):", countDigits(12345)); // 5


// 9. Prime Numbers .....





// 10. Arrow Functions .....   ----> مش عارف اشتغل منغير {} زي ما مطلوب
