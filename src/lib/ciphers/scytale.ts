export const scytaleConvert = (text: string, diameter: number, encode: boolean): string => {
    if (diameter <= 1) return text;
    const len = text.length;
    const numCols = diameter;
    const numRows = Math.ceil(len / numCols);

    if (encode) {

        let result = "";
        for (let c = 0; c < numCols; c++) {
            for (let r = 0; r < numRows; r++) {
                const idx = r * numCols + c;
                if (idx < len) {
                    result += text[idx];
                } else {
                    result += " ";
                }
            }
        }
        return result;
    } else {

        let result = "";
        const rows = diameter;
        const cols = Math.ceil(len / rows);
        for (let r = 0; r < cols; r++) {
            for (let c = 0; c < rows; c++) {
                const idx = c * cols + r;
                if (idx < len) {
                    result += text[idx];
                }
            }
        }
        return result.trimEnd();
    }
};
