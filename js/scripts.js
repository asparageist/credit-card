function ccMutator(cardNumber) {
  //https://www.learnhowtoprogram.com/introduction-to-programming-part-time/arrays-and-looping-part-2/practice-credit-card-validator-roman-numerals-or-cryptosquare-part-1
  
  // args: cardNumber <String> (16 digits)
  // return validationMessage: "This card number is not valid." | "This card number is valid."
  // mutation algorithm:
  // - double every other digit, right to left
  // - for each doubled digit, if 2-digit, add together to a single digit number
  // - sum all digits of the previous result
  // - if that sum ends in 0, cardNumber is valid, otherwise invalid
  
  const numNoSpace = cardNumber.replaceAll(" ", "");
  const numArray = numNoSpace.split();
  const numArrayReverse = numArray.reverse();
  const doubledArray = []; //doubled array
  
  for (i = 0; i < numArrayReverse.length; i++) {
    let newNum = numArrayReverse[i];
    if (i % 2 === 0) {
      const doubled = Number(newNum) * 2;
      if (doubled > 9) {
        // add both digits of the 2 digit number together
      }
      // push doubled to doubledArray
    }
 }
  // grandTotal = add together all the numbers within doubledArray
  // if grandTotal ends in 0, card is valid, otherwise invalid
}
  
