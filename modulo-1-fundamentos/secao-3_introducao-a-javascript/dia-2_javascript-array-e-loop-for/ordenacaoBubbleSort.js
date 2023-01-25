/*
pt 1: Ordem crescente:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  for (let index = 1; index < numbers.length; index += 1){
    for (let indexDois = 0; indexDois < index; indexDois += 1){
        if (numbers[index] < numbers[indexDois]){
            let position = numbers[index];
            numbers[index] = numbers[indexDois];
            numbers[indexDois] = position;
        }
    }
  }
  console.log(numbers);
  
*/

/*
pt 2: Ordem decrescente:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index = 1; index < numbers.length; index += 1){
    for(let indexTwo = 0; indexTwo < index; indexTwo += 1){
        if(numbers[index] > numbers[indexTwo]){
            let position = numbers[index];
            numbers[index] = numbers[indexTwo];
            numbers[indexTwo] = position;
        }
    }
}
console.log(numbers)
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
for(let index = 0; index < numbers.length; index += 1){
    if(index + 1 < numbers.length ){
        newNumbers.push(numbers[index] * numbers[index +1]) ;
    } else {
        newNumbers.push(numbers[index] * 2) ;
    }
}

console.log(newNumbers);