import { ALPHABET } from "../constants";

export const beaufortConvert = (text: string, key: string): string => {
    if (!key) return text;
    const cleanKey = key.toLowerCase().replace(/[^a-z]/g, "");
    if (cleanKey.length === 0) return text;

    let keyIndex = 0;
    return text
        .split("")
        .map((char) => {
            const isUpper = char === char.toUpperCase();
            const lowerChar = char.toLowerCase();
            const charIdx = ALPHABET.indexOf(lowerChar);

            if (charIdx === -1) return char;

            const keyChar = cleanKey[keyIndex % cleanKey.length];
            const keyIdx = ALPHABET.indexOf(keyChar);

            let resultIdx = (keyIdx - charIdx) % 26;
            if (resultIdx < 0) resultIdx += 26;

            keyIndex++;
            const resultChar = ALPHABET[resultIdx];
            return isUpper ? resultChar.toUpperCase() : resultChar;
        })
        .join("");
};
