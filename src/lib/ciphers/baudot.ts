const BAUDOT_TABLE: Record<string, string> = {
    'A': '11000', 'B': '10011', 'C': '01110', 'D': '10010', 'E': '10000',
    'F': '10110', 'G': '01011', 'H': '00101', 'I': '01100', 'J': '11010',
    'K': '11110', 'L': '01001', 'M': '00111', 'N': '00110', 'O': '00011',
    'P': '01101', 'Q': '11101', 'R': '01010', 'S': '10100', 'T': '00001',
    'U': '11100', 'V': '01111', 'W': '11001', 'X': '10111', 'Y': '10101',
    'Z': '10001', ' ': '00100', '\n': '00010'
};

const REV_BAUDOT: Record<string, string> = Object.fromEntries(
    Object.entries(BAUDOT_TABLE).map(([k, v]) => [v, k])
);

export const baudotEncode = (text: string): string => {
    return text.toUpperCase().split("").map(c => BAUDOT_TABLE[c] || "").join(" ");
};

export const baudotDecode = (text: string): string => {
    return text.split(/\s+/).map(c => REV_BAUDOT[c] || "").join("");
};
