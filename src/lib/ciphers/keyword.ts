export const keywordEncode = (text: string, keyword: string): string => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const cleanKey = keyword.toUpperCase().replace(/[^A-Z]/g, "");
    const seen = new Set<string>();
    const keyedAlphabet = (cleanKey + alphabet).split("").filter(c => {
        if (seen.has(c)) return false;
        seen.add(c);
        return true;
    }).join("");

    return text.toUpperCase().split("").map(char => {
        const idx = alphabet.indexOf(char);
        return idx === -1 ? char : keyedAlphabet[idx];
    }).join("");
};

export const keywordDecode = (text: string, keyword: string): string => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const cleanKey = keyword.toUpperCase().replace(/[^A-Z]/g, "");
    const seen = new Set<string>();
    const keyedAlphabet = (cleanKey + alphabet).split("").filter(c => {
        if (seen.has(c)) return false;
        seen.add(c);
        return true;
    }).join("");

    return text.toUpperCase().split("").map(char => {
        const idx = keyedAlphabet.indexOf(char);
        return idx === -1 ? char : alphabet[idx];
    }).join("");
};
