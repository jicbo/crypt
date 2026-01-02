export const gronsfeldConvert = (text: string, key: string, encode: boolean): string => {
    if (!key || !/^\d+$/.test(key)) return text;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const keyDigits = key.split("").map(Number);
    let keyIndex = 0;

    return text.toUpperCase().split("").map(char => {
        const idx = alphabet.indexOf(char);
        if (idx === -1) return char;

        const shift = keyDigits[keyIndex % keyDigits.length];
        keyIndex++;

        const newIdx = encode
            ? (idx + shift) % 26
            : (idx - shift + 26) % 26;

        return alphabet[newIdx];
    }).join("");
};
