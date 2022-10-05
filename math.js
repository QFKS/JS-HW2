let result;
const number1 = parseFloat(prompt('Enter first number: '));
const value = prompt('Enter value ( either +, -, * or / ): ');
const number2 = parseFloat(prompt('Enter second number: '));
switch (value) {
   case '+':
        result = number1 + number2;
       console.log(`${number1} + ${number2} = ${result}`);
       break;

   case '-':
        result = number1 - number2;
       console.log(`${number1} - ${number2} = ${result}`);
       break;

   case '*':
        result = number1 * number2;
       console.log(`${number1} * ${number2} = ${result}`);
       break;

   case '/':
        result = number1 / number2;
       console.log(`${number1} / ${number2} = ${result}`);
       break;

   default:
       console.log('Invalid value');
       break;
   
}
if(result=='Infinity'){
    alert('invalid')
    console.log('invalid')
}