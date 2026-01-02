export const portaConvert = (text: string, key: string): string => {
    if (!key) return text;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const cleanKey = key.toUpperCase().replace(/[^A-Z]/g, "");
    if (!cleanKey) return text;

    return text.toUpperCase().split("").map((char, i) => {
        const charIdx = alphabet.indexOf(char);
        if (charIdx === -1) return char;

        const keyChar = cleanKey[i % cleanKey.length];
        const keyIdx = Math.floor(alphabet.indexOf(keyChar) / 2);

        let resIdx;
        if (charIdx < 13) {
            resIdx = (charIdx + keyIdx) % 13 + 13;
        } else {
            resIdx = (charIdx - keyIdx - 13 + 13) % 13;
        }

        return alphabet[resIdx];
    }).join("");
};
