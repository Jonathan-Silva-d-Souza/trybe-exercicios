const anguloA = 60;
const anguloB = 60;
const anguloC = 60;
let anguloTotal = anguloA + anguloB + anguloC
let todosOsAngulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;
if(todosOsAngulosPositivos){
if(anguloTotal === 180 ){
    console.log("true");
} else {
    console.log(false);
}
}
else{
    console.log("ERROR, NEGATIVE NUMBER FOUND, PLEASE TRY AGAIN")
}