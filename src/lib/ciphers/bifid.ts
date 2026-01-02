export const bifidEncode = (text: string, period: number = 5): string => {
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    const cleanText = text.toUpperCase().replace(/[^A-Z]/g, "").replace(/J/g, "I");
    if (!cleanText) return text;

    const rows: number[] = [];
    const cols: number[] = [];

    for (const char of cleanText) {
        const idx = alphabet.indexOf(char);
        rows.push(Math.floor(idx / 5));
        cols.push(idx % 5);
    }

    let result = "";
    for (let i = 0; i < cleanText.length; i += period) {
        const chunkRows = rows.slice(i, i + period);
        const chunkCols = cols.slice(i, i + period);
        const combined = [...chunkRows, ...chunkCols];

        for (let j = 0; j < combined.length; j += 2) {
            result += alphabet[combined[j] * 5 + combined[j + 1]];
        }
    }
    return result;
};

export const bifidDecode = (text: string, period: number = 5): string => {
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    const cleanText = text.toUpperCase().replace(/[^A-Z]/g, "");
    if (!cleanText) return text;

    let combined: number[] = [];
    for (const char of cleanText) {
        const idx = alphabet.indexOf(char);
        combined.push(Math.floor(idx / 5));
        combined.push(idx % 5);
    }

    const rows: number[] = Array(cleanText.length).fill(0);
    const cols: number[] = Array(cleanText.length).fill(0);

    let combinedIdx = 0;
    for (let i = 0; i < cleanText.length; i += period) {
        const currentPeriod = Math.min(period, cleanText.length - i);
        for (let j = 0; j < currentPeriod; j++) {
            rows[i + j] = combined[combinedIdx++];
        }
        for (let j = 0; j < currentPeriod; j++) {
            cols[i + j] = combined[combinedIdx++];
        }
    }

    let result = "";
    for (let i = 0; i < cleanText.length; i++) {
        result += alphabet[rows[i] * 5 + cols[i]];
    }
    return result;
};
