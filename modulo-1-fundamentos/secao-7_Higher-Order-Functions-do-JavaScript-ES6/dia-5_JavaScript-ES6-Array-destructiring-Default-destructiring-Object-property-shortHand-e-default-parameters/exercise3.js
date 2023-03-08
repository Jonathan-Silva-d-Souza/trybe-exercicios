const greet = (name, msg = 'Hi') => `${msg} ${name}`;

console.log(greet('John'));
console.log(greet('John', 'Good morning'));
console.log(greet('Isabela', 'Oi'));
