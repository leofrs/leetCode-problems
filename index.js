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
const array = [1, 2, 4, 5]; // Aqui está faltando o número 3

const n = 5;

const arrayCompleto = (n * (n + 1)) / 2;

const arrayAtual = array.reduce((acc, current) => {
	return acc + current;
});

const valorFaltando = arrayCompleto - arrayAtual;

console.log(`O valor que está faltando é o número ${valorFaltando}`);
