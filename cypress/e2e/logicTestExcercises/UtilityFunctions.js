class UtilityFunctions {
    static isPrime(numberInput) {
        for (var i = 2; i < numberInput; i++) {
            if (numberInput % i === 0) {
                return false;
            }
        }
        return true;
    }

    static sortWords(inputWords) {
        let words = inputWords.split(' ');
        words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        return words.join(' ');
    }

    static isPalindrome(word) {
        var lowRegWord = word.toLowerCase().replace(/[\W_]/g, '');
        var reverseWord = lowRegWord.split('').reverse().join('');
        return lowRegWord === reverseWord;
    }

    static generateFibonacci(n) {
        if (n <= 0) {
            return [];
        }
        let fibonacci = [0];
        if (n > 1) {
            fibonacci.push(1);
        } for (let i = 2; i < n; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
        return fibonacci;
    }

    static findSumPair(numbers, sum) {
        const seenNumbers = new Set();
        for (let i = 0; i < numbers.length; i++) {
            const diff = sum - numbers[i];
            if (seenNumbers.has(diff)) {
                return [diff, numbers[i]];
            }
            seenNumbers.add(numbers[i]);
        }
        return null;
    }
}

module.exports = UtilityFunctions;
