/* ESTRUTURAS DE REPETIÇÃO - FOR

4 + 4 + 4 + 4 = 16
4 * 4 = 16
*/

// for (let i = 0; i < 10; i++){
//     console.log(i)
// }


const students = ['Bruna','Ana','João','Maria','Pedro']
for (let i = 0; i < students.length; i++){
         console.log(`${students[i]} está presente à aula.`)
     }

// Serie Fibonacci
const fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (let i = 2; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci);