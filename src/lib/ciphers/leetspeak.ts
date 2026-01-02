const LEET_MAP: Record<string, string> = {
    'A': '4', 'B': '8', 'E': '3', 'G': '6', 'I': '1', 'O': '0', 'S': '5', 'T': '7', 'Z': '2'
};

const REVERSE_LEET_MAP: Record<string, string> = Object.fromEntries(
    Object.entries(LEET_MAP).map(([k, v]) => [v, k])
);

export const leetEncode = (text: string): string => {
    return text.toUpperCase().split("").map(char => LEET_MAP[char] || char).join("");
};

export const leetDecode = (text: string): string => {
    return text.toUpperCase().split("").map(char => REVERSE_LEET_MAP[char] || char).join("");
};
