export const runningKeyConvert = (text: string, runningKey: string, encode: boolean): string => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const cleanKey = runningKey.toUpperCase().replace(/[^A-Z]/g, "");
    const cleanText = text.toUpperCase();

    let keyIdx = 0;
    return cleanText.split("").map(char => {
        const idx = alphabet.indexOf(char);
        if (idx === -1) return char;

        if (keyIdx >= cleanKey.length) return char;

        const kIdx = alphabet.indexOf(cleanKey[keyIdx++]);
        const newIdx = encode
            ? (idx + kIdx) % 26
            : (idx - kIdx + 26) % 26;

        return alphabet[newIdx];
    }).join("");
};
