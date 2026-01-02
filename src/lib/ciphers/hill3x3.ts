export const hill3x3Encode = (text: string, matrix: number[][]): string => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const clean = text.toUpperCase().replace(/[^A-Z]/g, "");
    const padded = clean + "X".repeat((3 - clean.length % 3) % 3);

    let result = "";
    for (let i = 0; i < padded.length; i += 3) {
        const v = [
            alphabet.indexOf(padded[i]),
            alphabet.indexOf(padded[i + 1]),
            alphabet.indexOf(padded[i + 2])
        ];

        for (let r = 0; r < 3; r++) {
            let sum = 0;
            for (let c = 0; c < 3; c++) {
                sum += matrix[r][c] * v[c];
            }
            result += alphabet[sum % 26];
        }
    }
    return result;
};

