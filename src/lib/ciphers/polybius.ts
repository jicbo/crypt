import { ALPHABET } from "../constants";

export const polybiusEncode = (text: string): string => {
    const square: Record<string, string> = {};
    const grid = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    let idx = 0;
    for (let r = 1; r <= 5; r++) {
        for (let c = 1; c <= 5; c++) {
            square[grid[idx++]] = `${r}${c}`;
        }
    }

    return text
        .toUpperCase()
        .split("")
        .map((char) => {
            if (char === "J") return square["I"];
            return square[char] || char;
        })
        .join(" ");
};

export const polybiusDecode = (text: string): string => {
    const reverseSquare: Record<string, string> = {};
    const grid = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    let idx = 0;
    for (let r = 1; r <= 5; r++) {
        for (let c = 1; c <= 5; c++) {
            reverseSquare[`${r}${c}`] = grid[idx++];
        }
    }

    return text
        .split(/\s+/)
        .map((part) => {
            if (part.length === 2 && /^[1-5]{2}$/.test(part)) {
                return reverseSquare[part];
                part.split("").forEach((char, i) => {
                });
            }
            return part;
        })
        .join("");
};
