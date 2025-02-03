export function PrimeCheck(number) {
  let isPrime = true;
  if (number < 2) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  return isPrime;
}

export const isPerfect = function (num) {
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i + (i !== num / i ? num / i : 0);
    }
  }
  return sum === num && num !== 1;
};

export const isArmstrong = (num) => {
  // program to check an Armstrong number of three digits

  let sum = 0;

  // create a temporary variable
  let temp = num;
  while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
  }
  // check the condition
  if (sum == num) {
    return true;
  } else {
    return false;
  }
};

export const DigitSum = (num) =>
  num
    .toString()
    .split("")
    .reduce((sum, d) => sum + parseInt(d), 0);

export async function funFact(number) {
  try {
    const res = await fetch(`http://numbersapi.com/${number}`);
    return res.text();
  } catch (error) {
    console.log(error);
  }
}
