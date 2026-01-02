export const rot1Convert = (text: string): string => {
    return text.split("").map(char => {
        if (/[a-zA-Z]/.test(char)) {
            const code = char.charCodeAt(0);
            const base = code >= 97 ? 97 : 65;
            return String.fromCharCode(base + ((code - base + 1) % 26));
        }
        return char;
    }).join("");
};

export const reverseWords = (text: string): string => {
    return text.split(/\s+/).map(w => w.split("").reverse().join("")).join(" ");
};

export const caesarRandom = (text: string, seed: string): string => {
    let shift = 0;
    for (let i = 0; i < seed.length; i++) shift += seed.charCodeAt(i);
    shift = shift % 26;

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return text.split("").map(c => {
        const idx = alphabet.indexOf(c.toLowerCase());
        if (idx === -1) return c;
        const resIdx = (idx + shift) % 26;
        const resChar = alphabet[resIdx];
        return c === c.toUpperCase() ? resChar.toUpperCase() : resChar;
    }).join("");
};
