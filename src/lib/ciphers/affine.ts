import { ALPHABET } from "../constants";

const modInverse = (a: number, m: number): number => {
    a = ((a % m) + m) % m;
    for (let x = 1; x < m; x++) {
        if ((a * x) % m === 1) return x;
    }
    return 1;
};

export const affineConvert = (text: string, a: number, b: number, encode: boolean): string => {
    const m = 26;
    const aInv = modInverse(a, m);

    return text
        .split("")
        .map((char) => {
            const isUpper = char === char.toUpperCase();
            const lowerChar = char.toLowerCase();
            const index = ALPHABET.indexOf(lowerChar);

            if (index === -1) return char;

            let resultIndex;
            if (encode) {
                resultIndex = (a * index + b) % m;
            } else {
                resultIndex = (aInv * (index - b)) % m;
            }

            if (resultIndex < 0) resultIndex += m;

            const resultChar = ALPHABET[resultIndex];
            return isUpper ? resultChar.toUpperCase() : resultChar;
        })
        .join("");
};
