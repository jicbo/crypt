export const playfairEncode = (text: string, key: string): string => {
    if (!key) return text;
    const matrix = generateMatrix(key);
    const preparedText = prepareText(text);
    let result = "";

    for (let i = 0; i < preparedText.length; i += 2) {
        const char1 = preparedText[i];
        const char2 = preparedText[i + 1];
        const pos1 = findPosition(matrix, char1);
        const pos2 = findPosition(matrix, char2);

        if (pos1.row === pos2.row) {
            result += matrix[pos1.row][(pos1.col + 1) % 5];
            result += matrix[pos2.row][(pos2.col + 1) % 5];
        } else if (pos1.col === pos2.col) {
            result += matrix[(pos1.row + 1) % 5][pos1.col];
            result += matrix[(pos2.row + 1) % 5][pos2.col];
        } else {
            result += matrix[pos1.row][pos2.col];
            result += matrix[pos2.row][pos1.col];
        }
    }
    return result;
};

export const playfairDecode = (text: string, key: string): string => {
    if (!key) return text;
    const matrix = generateMatrix(key);
    const cleanText = text.toUpperCase().replace(/[^A-Z]/g, "").replace(/J/g, "I");
    let result = "";

    for (let i = 0; i < cleanText.length; i += 2) {
        const char1 = cleanText[i];
        const char2 = cleanText[i + 1];
        const pos1 = findPosition(matrix, char1);
        const pos2 = findPosition(matrix, char2);

        if (pos1.row === pos2.row) {
            result += matrix[pos1.row][(pos1.col + 4) % 5];
            result += matrix[pos2.row][(pos2.col + 4) % 5];
        } else if (pos1.col === pos2.col) {
            result += matrix[(pos1.row + 4) % 5][pos1.col];
            result += matrix[(pos2.row + 4) % 5][pos2.col];
        } else {
            result += matrix[pos1.row][pos2.col];
            result += matrix[pos2.row][pos1.col];
        }
    }
    return result;
};

const generateMatrix = (key: string): string[][] => {
    const cleanKey = key.toUpperCase().replace(/[^A-Z]/g, "").replace(/J/g, "I");
    const seen = new Set<string>();
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    const chars = (cleanKey + alphabet).split("").filter(c => {
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

const prepareText = (text: string): string => {
    let clean = text.toUpperCase().replace(/[^A-Z]/g, "").replace(/J/g, "I");
    let prepared = "";
    for (let i = 0; i < clean.length; i++) {
        prepared += clean[i];
        if (clean[i] === clean[i + 1]) {
            prepared += "X";
        }
    }
    if (prepared.length % 2 !== 0) prepared += "X";
    return prepared;
};

const findPosition = (matrix: string[][], char: string) => {
    for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 5; c++) {
            if (matrix[r][c] === char) return { row: r, col: c };
        }
    }
    return { row: 0, col: 0 };
};
