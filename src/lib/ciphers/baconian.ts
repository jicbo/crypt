const BACONIAN_TABLE: Record<string, string> = {
    'A': 'aaaaa', 'B': 'aaaab', 'C': 'aaaba', 'D': 'aaabb', 'E': 'aabaa',
    'F': 'aabab', 'G': 'aabba', 'H': 'aabbb', 'I': 'abaaa', 'J': 'abaab',
    'K': 'ababa', 'L': 'ababb', 'M': 'abbaa', 'N': 'abbab', 'O': 'abbba',
    'P': 'abbbb', 'Q': 'baaaa', 'R': 'baaab', 'S': 'baaba', 'T': 'baabb',
    'U': 'babaa', 'V': 'babab', 'W': 'babba', 'X': 'babbb', 'Y': 'bbaaa',
    'Z': 'bbaab', ' ': ' '
};

const REVERSE_BACONIAN_TABLE: Record<string, string> = Object.fromEntries(
    Object.entries(BACONIAN_TABLE).map(([k, v]) => [v, k])
);

export const baconianEncode = (text: string): string => {
    return text.toUpperCase().split("").map(char => {
        return BACONIAN_TABLE[char] || char;
    }).join("");
};

export const baconianDecode = (text: string): string => {
    let result = "";
    let i = 0;
    while (i < text.length) {
        if (text[i] === " " || text[i] === "\n" || text[i] === "\r" || text[i] === "\t") {
            result += text[i];
            i++;
            continue;
        }

        const chunk = text.slice(i, i + 5).toLowerCase();
        if (REVERSE_BACONIAN_TABLE[chunk]) {
            result += REVERSE_BACONIAN_TABLE[chunk];
            i += 5;
        } else {
            result += text[i];
            i++;
        }
    }
    return result;
};
