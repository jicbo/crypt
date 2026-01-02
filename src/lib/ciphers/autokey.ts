import { ALPHABET } from "../constants";

export const autokeyConvert = (text: string, key: string, encode: boolean): string => {
    if (!key) return text;
    const cleanKey = key.toLowerCase().replace(/[^a-z]/g, "");
    const cleanText = text.toLowerCase().replace(/[^a-z]/g, "");
    if (!cleanKey || !cleanText) return text;

    let result = "";
    let keyStream = cleanKey;

    if (encode) {
        for (let i = 0; i < cleanText.length; i++) {
            const textIdx = ALPHABET.indexOf(cleanText[i]);
            const keyIdx = ALPHABET.indexOf(keyStream[i]);
            const resIdx = (textIdx + keyIdx) % 26;
            const resChar = ALPHABET[resIdx];
            result += resChar;
            keyStream += cleanText[i];
        }
    } else {
        for (let i = 0; i < cleanText.length; i++) {
            const textIdx = ALPHABET.indexOf(cleanText[i]);
            const keyIdx = ALPHABET.indexOf(keyStream[i]);
            let resIdx = (textIdx - keyIdx) % 26;
            if (resIdx < 0) resIdx += 26;
            const resChar = ALPHABET[resIdx];
            result += resChar;
            keyStream += resChar;
        }
    }


    return result.toUpperCase();
};
