export const tapCodeEncode = (text: string): string => {
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    const cleanText = text.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, "");

    return cleanText.split("").map(char => {
        const idx = alphabet.indexOf(char);
        const row = Math.floor(idx / 5) + 1;
        const col = (idx % 5) + 1;
        return ".".repeat(row) + " " + ".".repeat(col);
    }).join("   ");
};

export const tapCodeDecode = (text: string): string => {
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    const chunks = text.trim().split(/\s{2,}/);

    return chunks.map(chunk => {
        const parts = chunk.trim().split(/\s+/);
        if (parts.length !== 2) return "";
        const row = parts[0].length;
        const col = parts[1].length;
        const idx = (row - 1) * 5 + (col - 1);
        return alphabet[idx] || "";
    }).join("");
};
