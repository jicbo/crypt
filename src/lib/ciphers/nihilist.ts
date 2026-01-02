export const nihilistEncode = (text: string, keyword: string, numericKey: string): string => {
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    const matrixChars = (keyword.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, "") + alphabet);
    const seen = new Set<string>();
    const chars = matrixChars.split("").filter(c => {
        if (seen.has(c)) return false;
        seen.add(c);
        return true;
    });

    const posMap: Record<string, number> = {};
    chars.forEach((c, i) => {
        const r = Math.floor(i / 5) + 1;
        const col = (i % 5) + 1;
        posMap[c] = r * 10 + col;
    });

    const cleanText = text.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, "");
    const textNums = cleanText.split("").map(c => posMap[c]);

    const cleanNumericKey = numericKey.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, "");
    const keyNums = cleanNumericKey.split("").map(c => posMap[c]);

    return textNums.map((num, i) => num + keyNums[i % keyNums.length]).join(" ");
};

export const nihilistDecode = (text: string, keyword: string, numericKey: string): string => {
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    const matrixChars = (keyword.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, "") + alphabet);
    const seen = new Set<string>();
    const chars = matrixChars.split("").filter(c => {
        if (seen.has(c)) return false;
        seen.add(c);
        return true;
    });

    const posMap: Record<string, number> = {};
    const revMap: Record<number, string> = {};
    chars.forEach((c, i) => {
        const r = Math.floor(i / 5) + 1;
        const col = (i % 5) + 1;
        const val = r * 10 + col;
        posMap[c] = val;
        revMap[val] = c;
    });

    const cleanNumericKey = numericKey.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, "");
    const keyNums = cleanNumericKey.split("").map(c => posMap[c]);

    return text.split(/\s+/).map((s, i) => {
        const encryptedNum = parseInt(s);
        if (isNaN(encryptedNum)) return s;
        const originalNum = encryptedNum - keyNums[i % keyNums.length];
        return revMap[originalNum] || "?";
    }).join("");
};
