/*   NUMEROS PRIMOS    */

let number = 7;
let primo = "O número " + number + " é primo";
let noPrimo = "O número " + number + " não é primo";
let result = noPrimo;

for (i = 2; i < number; i++) {
	result = primo;

	if (number % i == 0) {
		result = noPrimo;
		break;		
	}
}

if (number == 2) {
	result = primo;
}

console.log(result);