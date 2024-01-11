function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const TOTAL_DAYS_BILLED = Math.floor(numDays / 22) * 22;
  const TOTAL_PER_DAY = ratePerHour * 8;
  const TOTAL_DAYS_WIHTOUT_DISCOUNT = numDays % 22;
  const TOTAL_DISCOUNT = (TOTAL_DAYS_BILLED * discount)

  const TOTAL_WITHOUT_DISCOUNT = (TOTAL_DAYS_WIHTOUT_DISCOUNT + (TOTAL_DAYS_BILLED - TOTAL_DISCOUNT)) * TOTAL_PER_DAY

  return Math.ceil(TOTAL_WITHOUT_DISCOUNT)
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42));

