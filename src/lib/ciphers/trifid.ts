export const trifidEncode = (text: string, period: number = 5): string => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#";
    const cleanText = text.toUpperCase().replace(/[^A-Z#]/g, "");
    if (!cleanText) return text;

    const coords: number[][] = [[], [], []];
    for (const char of cleanText) {
        const idx = alphabet.indexOf(char);
        coords[0].push(Math.floor(idx / 9));
        coords[1].push(Math.floor((idx % 9) / 3));
        coords[2].push(idx % 3);
    }

    let result = "";
    for (let i = 0; i < cleanText.length; i += period) {
        const currentPeriod = Math.min(period, cleanText.length - i);
        const c1 = coords[0].slice(i, i + currentPeriod);
        const c2 = coords[1].slice(i, i + currentPeriod);
        const c3 = coords[2].slice(i, i + currentPeriod);
        const combined = [...c1, ...c2, ...c3];

        for (let j = 0; j < combined.length; j += 3) {
            const idx = combined[j] * 9 + combined[j + 1] * 3 + combined[j + 2];
            result += alphabet[idx];
        }
    }
    return result;
};

export const trifidDecode = (text: string, period: number = 5): string => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#";
    const cleanText = text.toUpperCase().replace(/[^A-Z#]/g, "");
    if (!cleanText) return text;

    let combined: number[] = [];
    for (const char of cleanText) {
        const idx = alphabet.indexOf(char);
        combined.push(Math.floor(idx / 9));
        combined.push(Math.floor((idx % 9) / 3));
        combined.push(idx % 3);
    }

    const coords: number[][] = [[], [], []];
    let combinedIdx = 0;
    for (let i = 0; i < cleanText.length; i += period) {
        const currentPeriod = Math.min(period, cleanText.length - i);
        const total = currentPeriod * 3;
        const chunk = combined.slice(combinedIdx, combinedIdx + total);
        combinedIdx += total;

        coords[0] = coords[0].concat(chunk.slice(0, currentPeriod));
        coords[1] = coords[1].concat(chunk.slice(currentPeriod, 2 * currentPeriod));
        coords[2] = coords[2].concat(chunk.slice(2 * currentPeriod, 3 * currentPeriod));
    }

    let result = "";
    for (let i = 0; i < cleanText.length; i++) {
        const idx = coords[0][i] * 9 + coords[1][i] * 3 + coords[2][i];
        result += alphabet[idx];
    }
    return result;
};
