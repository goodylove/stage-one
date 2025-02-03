import {
  DigitSum,
  funFact,
  isArmstrong,
  isPerfect,
  PrimeCheck,
} from "../utils/helper.js";

async function getFunNumbers(req, res) {
  let { number } = req.query;

  if (!number || isNaN(number) || !Number.isInteger(Number(number))) {
    return res.status(400).json({ number: "alphabet", error: true });
  }

  let properties = [];
  if (isArmstrong(number)) properties.push("armstrong");
  properties.push(number % 2 === 0 ? "even" : "odd");

  number = parseInt(number);
  const data = {
    number,
    is_prime: PrimeCheck(number),
    is_perfect: isPerfect(number),
    properties,
    digit_sum: DigitSum(number),
    fun_fact: await funFact(number),
  };
  res.status(200).json(data);
}

export default getFunNumbers;
