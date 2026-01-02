export const columnarEncode = (text: string, key: string): string => {
    if (!key || key.length === 0) return text;
    const cleanText = text.replace(/\s+/g, "");
    const numCols = key.length;
    const numRows = Math.ceil(cleanText.length / numCols);

    const grid: string[][] = Array.from({ length: numRows }, () =>
        Array(numCols).fill("")
    );

    for (let i = 0; i < cleanText.length; i++) {
        grid[Math.floor(i / numCols)][i % numCols] = cleanText[i];
    }


    const keyOrder = key
        .split("")
        .map((char, index) => ({ char, index }))
        .sort((a, b) => a.char.localeCompare(b.char));

    let result = "";
    for (const { index } of keyOrder) {
        for (let r = 0; r < numRows; r++) {
            if (grid[r][index]) {
                result += grid[r][index];
            }
        }
    }

    return result;
};

export const columnarDecode = (text: string, key: string): string => {
    if (!key || key.length === 0) return text;
    const numCols = key.length;
    const numRows = Math.ceil(text.length / numCols);

    const keyOrder = key
        .split("")
        .map((char, index) => ({ char, index }))
        .sort((a, b) => a.char.localeCompare(b.char));

    const grid: string[][] = Array.from({ length: numRows }, () =>
        Array(numCols).fill("")
    );

    let charIdx = 0;
    for (const { index } of keyOrder) {
        for (let r = 0; r < numRows; r++) {

            if (r * numCols + index < text.length && charIdx < text.length) {
                grid[r][index] = text[charIdx++];
            }
        }
    }

    let result = "";
    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
            if (grid[r][c]) {
                result += grid[r][c];
            }
        }
    }

    return result;
};
