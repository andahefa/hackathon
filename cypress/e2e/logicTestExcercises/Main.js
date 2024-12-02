const InputHandler = require('./InputManager');
const UtilityFunctions = require('./UtilityFunctions');

(async () => {
    const handler = new InputHandler();
    const menu = `
    Elige una opción para validar:
    1. Numero primo
    2. Ordenar palabras alfabéticamente
    3. Palindromo
    4. Secuencia de Fibonacci
    5. Suma de dos números
    `;
    const option = await handler.askUser(menu);

    switch (option) {
        case '1':
            const numberInput = await handler.askUser("Introduce un numero para verificar si es primo: ");
            const number = parseInt(numberInput, 10);
            if (!isNaN(number)) {
                if (UtilityFunctions.isPrime(number)) {
                    console.log(`${number} es numero primo`);
                } else {
                    console.log(`${number} no es numero primo`);
                }
            } else {
                console.log("Entrada no valida para el numero");
            }
            break;

        case '2':
            const stringInput = await handler.askUser("Introduce una cadena de palabras para ordenarlas alfabeticamente: ");
            const sortedWords = UtilityFunctions.sortWords(stringInput);
            console.log(`Palabras ordenadas: ${sortedWords}`);
            break;

        case '3':
            const text = await handler.askUser("Introduce un texto para verificar si es un palíndromo: ");
            if (UtilityFunctions.isPalindrome(text)) {
                console.log(`${text} es palindromo`);
            } else {
                console.log(`${text} no es palindromo`);
            }
            break;

        case '4':
            const fibonacciInput = await handler.askUser("Introduce un numero para generar la secuencia de Fibonacci: ");
            const n = parseInt(fibonacciInput, 10);
            if (!isNaN(n)) {
                const fibonacciSequence = UtilityFunctions.generateFibonacci(n);
                console.log(`Secuencia de Fibonacci para ${n}: ${fibonacciSequence}`);
            } else {
                console.log("Entrada no valida para el numero");
            }
            break;

        case '5':
            const numbersInput = await handler.askUser("Introduce una lista de numeros separados por espacios: ");
            const targetInput = await handler.askUser("Introduce el numero objetivo para la suma: ");
            const target = parseInt(targetInput, 10);
            const numbers = numbersInput.split(' ').map(num => parseInt(num, 10));

            if (!isNaN(target)) {
                const pair = UtilityFunctions.findSumPair(numbers, target);
                if (pair) {
                    console.log(`Par encontrado: (${pair[0]}, ${pair[1]})`);
                } else {
                    console.log("No se encontro ningun par");
                }
            } else {
                console.log("Entrada no valida para el numero objetivo");
            }
            break;

        default:
            console.log("Opción no reconocida. Por favor, elige una opción valida del menu");
            break;
    }

    handler.close();
})();
