# Free Code Camp Javascript Calculator

https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator

> This was tricky challenge. There is a lot of logic that you have to keep in mind. I did about 3 different versions. Luckily my last attempt I made sure to stick to my plan, constantly tested, fixed any issues before moving to another task and took it slow. The only issue I wasn't able to solve was a rounding for 10.7 / 0.2, which I decided to look at the FCC code to solve. All in all I think a calculator app is a great application to build, you can have lots of fun with the design portion and then have a great time exploring the logic.

## TODO:

- Add the id's to pass the FCC tests
- Create unit tests for the following test cases
  - assert 10.7 / 0.2 === 53.5
  - assert 2 / 7 === 0.285714285714
  - assert 9 + 9 / 2 === 13.5
  - assert 9--9 === 18
  - When a user gets a result and the user clicks a number it starts over
  - There is def more but this is all I could think of right now
- Look back at the code as I'm sure there is some refactoring I can do to clean up some of the logic.
- Clean out `console.log`
- Add event listener so the user doesn't have to click the buttons
- Styling
  - Update colors to match a little closer to design
  - Update font
  - Possibly change the buttons into buttons for accessibility
- Add a modal for when a user creates a bad calculation
  - example: `2 + 2 +` or `2 + -`
- Should we allow for additional evals with the equal sign?
  - Example: `2 + 2 = 4` then the user clicks `equal` and it will be `6` then `8`
    - The FCC calculator doesn't do this
    - Current I'm catching this in my try/catch and just logging an error
- Make some notes about the `regex` that I used.

## Some Pseudo

### Numbers

- add number to currentDisplay and equation
- if currendDisplay has number then concat
- if equation has '=' start over

### decimal

- if decimal already in currentDisplay don't allow another
- if currentDisplay === '0' concat the period

### Operators

- Division
  - if "/" is currentDisplay skip
  - concat "/" to equation
  - add "/" to currentDisplay
  - if equation has '=' start over
- Multiplication
  - if "\*" is currentDisplay skip
  - concat "\*" to equation
  - add "\*" to currentDisplay
  - if equation has '=' start over
- Addition
  - if "+" is currentDisplay skip
  - concat "+" to equation
  - add "+" to currentDisplay
  - if equation has '=' start over
- Subtraction
  - if "--" at end of equation skip
  - if "-" at end of equation
    - add "-" to currentDisplay
    - concat "-" to equation
  - concat "-" to equation
  - add "-" to currentDisplay
  - if equation has '=' start over

## Equals

- eval equation and concat solution to current equation seperated by an '='
- example
- equation 9+9/2
- eval(2+2) // returns 13.5
- equation now equals 2+2/9=13.5

## AC

- Clear equation and current

### Some debugging that I did in my JS repl

```javascript
// let operation = /^(\+|-|\*|\/|=|>|<|>=|<=|&|\||%|!|\^|\(|\))$/
// const operation = /^(\+|-|x|\/|\*)$/
// const operation = /(\+|-|x|\/|\*)$/
// const operation = /(\+|-|x|\/|\*)/g
// console.log(operation.test('9+9'))
// console.log(operation.test('+'))
// console.log(operation.test('-'))
// console.log(operation.test('x'))
// console.log(operation.test('/'))
// console.log(operation.test('*'))
// console.log(operation.test('1*1'))
// console.log(operation.test('6'))
// console.log(operation.test('1'))
// console.log(operation.test('2'))
// console.log(operation.test('3'))
// console.log(operation.test('4'))
// console.log(operation.test('5'))
// console.log(operation.test('6'))
// console.log(operation.test('7'))
// console.log(operation.test('8'))
// console.log(operation.test('9'))
// +-/x

// let equation = "9x9"
// console.log(equation.replace("x", "*"))
// console.log(equation.replace(/x/g, "*"))
// console.log(equation)
// console.log(equation.includes("x"))

// console.log(2*2)
// console.log(typeof eval("9--9"))
// let number = '9--9--9-9'
// let number = '9--9'
// let number = '-9--9'
// if (number.includes('--')) {
//   console.log(number.replace(/--/g, '+'))
// }

// console.log(eval(9+9=18-9))

// const operationRegex = /(\+|-|\/|\*)/g;
// console.log(operationRegex.test("9--"));
// let regex = /0|\+|-|\/|\*/g
// let current = '0'
// console.log(regex.test(current))

// let equation = "9--9+12--"
// console.log(equation.slice(-2))
// console.log(equation.includes('--'))
// console.log(equation.replace(/--/g, "+"))
// console.log(equation.slice(0, -2) + "/")
// console.log(equation.slice(-2).replace('--', "/"))
// console.log(equation)

// const regex = /^(\+|-|\/|\*)/;
// console.log(regex.test('/-'))

// let equation = "9+-"
// console.log(equation.slice(0, -2))

// const regex = /\+|-|\/|\*/g;
// console.log(regex.test('/'))

// let equation = "99+9--9"
// console.log(equation.replace(/--/g, "+"))

// let equation = "9-9=0+9"
// // let equation = "9-8"
// console.log(equation.split("=").reverse())

// const modifiedEquation = equation
//   .split("=")
//   .reverse()[0]
//   .replace(/--/g, "+");

// const operationRegex = /^(\+|-|x|\/|\*)$/;
// const operationRegex = /(\+|-|\/|\*)$/;
// const operationRegex = /(\+|-|\/|\*)/g;

// const handleEval = () => {
//   console.log("handleEval");
//   if (equation) {
//     const regex = /\+|-|\/|\*/g;
//     const lastDigit = equation.slice(-1);
//     if (regex.test(lastDigit)) {
//       // We could also clear if they make a mistake instead
//       // handleClear();
//       return;
//     } else {
//       const modifiedEquation = equation.replace(/--/g, "+");
//       try {
//         const evaluation = String(eval(modifiedEquation));
//         setCurrentValue(evaluation);
//         setEquation(equation + "=" + evaluation);
//         setResult(true);
//       } catch (error) {
//         console.log("handleEval error", error);
//       }
//     }
//   }
// };

// const digitRegex = /[0-9]/;
// console.log(digitRegex.test('1'))

// console.log(eval('10.7/0.2'))
// console.log(eval('10.7/0.2').toPrecision(4))
// console.log(eval('153.49999999999999').toPrecision(4))
// console.log(eval('1153.49999999999999').toPrecision(4))
// Math.round(1000000000000 * eval(10.7/0.2)) / 1000000000000

// Rounding?
// 10.7 / 0.2 (FCC gets 53.5 and I get 53.49999999)
// 2/7 should keep its decimal
// 20 + 02 will replace entire value with 2
// 20 + 022 will give 38 and it should be 42
```
