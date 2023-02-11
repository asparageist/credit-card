function ccValidator(number) {
  let numNoSpace = number.replaceAll(" ", "");
  let numArray = numNoSpace.split("");
  let numArrayReverse = numArray.reverse();
  numArrayReverse.unshift("0", "0");
  let output = numArrayReverse.map(
    (num, index) => (index % 2 === 0 ? num * 2 : num)
    //                   condition   ?    true : false
  );
  output.splice(0, 2);

  for (i = 0; i < output.length; i++) {
    let newNum = output[i];
    console.log(newNum);
    if (newNum > 9) {
      output = newNum[0] + newNum[1];
      console.log(output);
    } else {
      output = newNum;
      console.log(output);
    }
  }
}