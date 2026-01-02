import { ALPHABET } from "../constants";

export const otpConvert = (text: string, key: string, encode: boolean): string => {
    const cleanText = text.toUpperCase();
    const cleanKey = key.toUpperCase().replace(/[^A-Z]/g, "");

    if (cleanKey.length < cleanText.replace(/[^A-Z]/g, "").length) {
        return "Error: Key must be at least as long as the plaintext characters.";
    }

    let keyIdx = 0;
    return cleanText.split("").map(char => {
        const idx = ALPHABET.indexOf(char.toLowerCase());
        if (idx === -1) return char;

        const kChar = cleanKey[keyIdx++];
        const kIdx = ALPHABET.indexOf(kChar.toLowerCase());

        const resIdx = encode
            ? (idx + kIdx) % 26
            : (idx - kIdx + 26) % 26;

        return ALPHABET[resIdx].toUpperCase();
    }).join("");
};
