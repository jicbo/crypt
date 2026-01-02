export const fourSquareEncode = (text: string, key1: string, key2: string): string => {
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    const m1 = generateMatrix("");
    const m2 = generateMatrix(key1);
    const m3 = generateMatrix(key2);
    const m4 = generateMatrix("");

    const cleanText = text.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, "");
    const preparedText = cleanText.length % 2 === 0 ? cleanText : cleanText + "X";

    let result = "";
    for (let i = 0; i < preparedText.length; i += 2) {
        const char1 = preparedText[i];
        const char2 = preparedText[i + 1];

        const pos1 = findPosition(m1, char1);
        const pos2 = findPosition(m4, char2);

        result += m2[pos1.row][pos2.col];
        result += m3[pos2.row][pos1.col];
    }
    return result;
};

export const fourSquareDecode = (text: string, key1: string, key2: string): string => {
    const m1 = generateMatrix("");
    const m2 = generateMatrix(key1);
    const m3 = generateMatrix(key2);
    const m4 = generateMatrix("");

    const cleanText = text.toUpperCase().replace(/[^A-Z]/g, "");
    let result = "";
    for (let i = 0; i < cleanText.length; i += 2) {
        const char1 = cleanText[i];
        const char2 = cleanText[i + 1];

        const pos1 = findPosition(m2, char1);
        const pos2 = findPosition(m3, char2);

        result += m1[pos1.row][pos2.col];
        result += m4[pos2.row][pos1.col];
    }
    return result;
};

const generateMatrix = (key: string): string[][] => {
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    const cleanKey = (key.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, "") + alphabet);
    const seen = new Set<string>();
    const chars = cleanKey.split("").filter(c => {
        if (seen.has(c)) return false;
        seen.add(c);
        return true;
    });

    const matrix: string[][] = [];
    for (let i = 0; i < 5; i++) {
        matrix.push(chars.slice(i * 5, i * 5 + 5));
    }
    return matrix;
};

const findPosition = (matrix: string[][], char: string) => {
    for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 5; c++) {
            if (matrix[r][c] === char) return { row: r, col: c };
        }
    }
    return { row: 0, col: 0 };
};
