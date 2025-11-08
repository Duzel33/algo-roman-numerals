function toRomanLazy(num) {
  output = "";

  let romanNumeralToArabic = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000,
  }

  const romanNumeralPriorityOrder = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

  for(let i = 0; i <= romanNumeralPriorityOrder.length; i++){
    let counter = Math.floor(num / romanNumeralToArabic[romanNumeralPriorityOrder[i]]);
    if(counter > 0){
        // console.log(`counter is equal to ${counter} for index ${romanNumeralPriorityOrder[i]}`);
        num = num - counter * romanNumeralToArabic[romanNumeralPriorityOrder[i]];
        // console.log(`num is equal to ${num} for index ${romanNumeralPriorityOrder[i]}`);
        output += romanNumeralPriorityOrder[i].repeat(counter)
      }
      // console.log(`output is equal to ${output} for index ${i}`);
      // output += output + "," + romanNumeralPriorityOrder[i];
      // console.log(romanNumeralPriorityOrder[i])
      // console.log(output);
    }
    return output;
}

// console.log(toRomanLazy(944));

function toRoman(num) {  
  output = "";

  let romanNumeralToArabic = {
    I : 1,
    IV : 4,
    V : 5,
    IX : 9,
    X : 10,
    XL : 40,
    L : 50,
    C : 100,
    CD : 400,
    D : 500,
    CM : 900,
    M : 1000,
  }

  const romanNumeralPriorityOrder = ['M', 'CM', 'D', 'CD', 'C', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for(let i = 0; i <= romanNumeralPriorityOrder.length; i++){
    let counter = Math.floor(num / romanNumeralToArabic[romanNumeralPriorityOrder[i]]);
    if(counter > 0){
        // console.log(`counter is equal to ${counter} for index ${romanNumeralPriorityOrder[i]}`);
        num = num - counter * romanNumeralToArabic[romanNumeralPriorityOrder[i]];
        // console.log(`num is equal to ${num} for index ${romanNumeralPriorityOrder[i]}`);
        output += romanNumeralPriorityOrder[i].repeat(counter)
      }
      // console.log(`output is equal to ${output} for index ${i}`);
      // output += output + "," + romanNumeralPriorityOrder[i];
      // console.log(romanNumeralPriorityOrder[i])
      // console.log(output);
    }
    return output;
}

module.exports = { toRoman, toRomanLazy };
