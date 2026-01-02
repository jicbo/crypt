import { ALPHABET } from "../constants";

export const substitutionConvert = (text: string, keyAlphabet: string, encode: boolean): string => {
    if (keyAlphabet.length !== 26) return text;

    const source = encode ? ALPHABET.join("") : keyAlphabet.toLowerCase();
    const target = encode ? keyAlphabet.toLowerCase() : ALPHABET.join("");

    return text
        .split("")
        .map((char) => {
            const isUpper = char === char.toUpperCase();
            const lowerChar = char.toLowerCase();
            const idx = source.indexOf(lowerChar);

            if (idx === -1) return char;

            const resultChar = target[idx];
            return isUpper ? resultChar.toUpperCase() : resultChar;
        })
        .join("");
};

export const generateKeyedAlphabet = (key: string): string => {
    const cleanKey = key.toLowerCase().replace(/[^a-z]/g, "");
    const seen = new Set<string>();
    let result = "";

    for (const char of cleanKey) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }

    for (const char of ALPHABET) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }

    return result;
};
