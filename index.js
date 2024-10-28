// Questão 1
/* const array = [1, 2, 3, 4];
let duplicado = false;

for (let i = 0; i < array.length; i++) {
	for (let j = i + 1; j < array.length; j++) {
		if (array[i] === array[j]) {
			duplicado = true;
			console.log(duplicado);
			return;
		} else {
			console.log(duplicado);
			return;
		}
	}
}
 */

// Questão 2
/* const array = [1, 2, 4, 5]; // Aqui está faltando o número 3

const n = 5;

const arrayCompleto = (n * (n + 1)) / 2;

const arrayAtual = array.reduce((acc, current) => {
	return acc + current;
});

const valorFaltando = arrayCompleto - arrayAtual;

console.log(`O valor que está faltando é o número ${valorFaltando}`); */

// Questão 3
/* const array = [4, 3, 2, 7, 8, 2, 3, 1]; //Faltando o [5,6]
const n = array.length;

const presence = new Array(n + 1).fill(false);

for (const num of array) {
	if (num >= 1 && num <= n) {
		presence[num] = true;
	}
}

console.log(presence);

const missingNumbers = [];

for (let i = 1; i <= n; i++) {
	if (!presence[i]) {
		missingNumbers.push(i);
	}
}

console.log(missingNumbers); */
