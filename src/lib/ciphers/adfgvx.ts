export const adfgvxEncode = (text: string, matrixKey: string, transKey: string): string => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const headers = "ADFGVX";

    const seen = new Set<string>();
    const matrixChars = (matrixKey.toUpperCase().replace(/[^A-Z0-9]/g, "") + alphabet).split("").filter(c => {
        if (seen.has(c)) return false;
        seen.add(c);
        return true;
    });

    const matrix: Record<string, string> = {};
    matrixChars.forEach((char, i) => {
        const r = Math.floor(i / 6);
        const c = i % 6;
        matrix[char] = headers[r] + headers[c];
    });


    const fractioned = text.toUpperCase().replace(/[^A-Z0-9]/g, "").split("").map(c => matrix[c] || "").join("");


    if (!transKey) return fractioned;
    return columnarTranspose(fractioned, transKey);
};

export const adfgvxDecode = (text: string, matrixKey: string, transKey: string): string => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const headers = "ADFGVX";

    const seen = new Set<string>();
    const matrixChars = (matrixKey.toUpperCase().replace(/[^A-Z0-9]/g, "") + alphabet).split("").filter(c => {
        if (seen.has(c)) return false;
        seen.add(c);
        return true;
    });

    const reverseMatrix: Record<string, string> = {};
    matrixChars.forEach((char, i) => {
        const r = Math.floor(i / 6);
        const c = i % 6;
        reverseMatrix[headers[r] + headers[c]] = char;
    });


    const untransposed = untranspose(text, transKey);


    let result = "";
    for (let i = 0; i < untransposed.length; i += 2) {
        const pair = untransposed.slice(i, i + 2);
        result += reverseMatrix[pair] || "";
    }
    return result;
};

const columnarTranspose = (text: string, key: string): string => {
    const kLen = key.length;
    const rows = Math.ceil(text.length / kLen);
    const grid: string[][] = Array.from({ length: rows }, () => Array(kLen).fill(""));

    for (let i = 0; i < text.length; i++) {
        grid[Math.floor(i / kLen)][i % kLen] = text[i];
    }

    const keyOrder = key.split("").map((c, i) => ({ c, i })).sort((a, b) => a.c.localeCompare(b.c));
    let result = "";
    for (const { i } of keyOrder) {
        for (let r = 0; r < rows; r++) {
            if (grid[r][i]) result += grid[r][i];
        }
    }
    return result;
};

const untranspose = (text: string, key: string): string => {
    const kLen = key.length;
    const rows = Math.ceil(text.length / kLen);
    const fullCols = text.length % kLen;
    const keyOrder = key.split("").map((c, i) => ({ c, i })).sort((a, b) => a.c.localeCompare(b.c));

    const grid: string[][] = Array.from({ length: rows }, () => Array(kLen).fill(""));
    let charIdx = 0;

    for (const { i } of keyOrder) {
        const colLen = i < fullCols || fullCols === 0 ? rows : rows - 1;
        for (let r = 0; r < colLen; r++) {
            if (charIdx < text.length) grid[r][i] = text[charIdx++];
        }
    }

    let result = "";
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < kLen; c++) {
            if (grid[r][c]) result += grid[r][c];
        }
    }
    return result;
};
