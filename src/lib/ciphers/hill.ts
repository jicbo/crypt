export const hill2x2Encode = (text: string, a: number, b: number, c: number, d: number): string => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const cleanText = text.toUpperCase().replace(/[^A-Z]/g, "");
    const paddedText = cleanText.length % 2 === 0 ? cleanText : cleanText + "X";

    let result = "";
    for (let i = 0; i < paddedText.length; i += 2) {
        const p1 = alphabet.indexOf(paddedText[i]);
        const p2 = alphabet.indexOf(paddedText[i + 1]);

        const c1 = (a * p1 + b * p2) % 26;
        const c2 = (c * p1 + d * p2) % 26;

        result += alphabet[c1] + alphabet[c2];
    }
    return result;
};

const modInverse = (n: number, m: number): number => {
    n = ((n % m) + m) % m;
    for (let i = 1; i < m; i++) {
        if ((n * i) % m === 1) return i;
    }
    return 1;
};

export const hill2x2Decode = (text: string, a: number, b: number, c: number, d: number): string => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const det = (a * d - b * c) % 26;
    const invDet = modInverse(det, 26);

    const da = (d * invDet) % 26;
    const db = (-b * invDet % 26 + 26) % 26;
    const dc = (-c * invDet % 26 + 26) % 26;
    const dd = (a * invDet) % 26;

    const cleanText = text.toUpperCase().replace(/[^A-Z]/g, "");
    let result = "";
    for (let i = 0; i < cleanText.length; i += 2) {
        const p1 = alphabet.indexOf(cleanText[i]);
        const p2 = alphabet.indexOf(cleanText[i + 1]);

        const c1 = (da * p1 + db * p2) % 26;
        const c2 = (dc * p1 + dd * p2) % 26;

        result += alphabet[c1] + alphabet[c2];
    }
    return result;
};
