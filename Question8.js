let nums = [10, 3, 7, 20, 13, 2];
const squares = nums.map(num => num * num);
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
const primeNumbers = nums.filter(isPrime);
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const sortedDescending = [...nums].sort((a, b) => b - a);

console.log("Squares:", squares);
console.log("Prime Numbers:", primeNumbers);
console.log("Sum:", sum);
console.log("Sorted Descending:", sortedDescending);
