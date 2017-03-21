// O - string "The total meal cost is totalCost dollars" where totalCost is a rounded integer
// I - mealCost, tipPercent, taxPercent
// C
// E
// example:
// main(12.00, 20, 8) => "The total meal cost is 15 dollars."


function main(mealCost, tipPercent, taxPercent) {
  var totalCost = mealCost + tipPercent/100*mealCost + taxPercent/100*mealCost;
  totalCost = Math.round(totalCost)
  return `The total meal cost is ${totalCost} dollars.`
}

console.log(main(12.00, 20, 8));
