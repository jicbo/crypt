export const rot5Convert = (text: string): string => {
    return text.split("").map(char => {
        if (/[0-9]/.test(char)) {
            const code = char.charCodeAt(0);
            return String.fromCharCode(48 + ((code - 48 + 5) % 10));
        }
        return char;
    }).join("");
};

export const rot18Convert = (text: string): string => {
    return text.split("").map(char => {
        if (/[0-9]/.test(char)) {
            const code = char.charCodeAt(0);
            return String.fromCharCode(48 + ((code - 48 + 5) % 10));
        }
        if (/[a-zA-Z]/.test(char)) {
            const code = char.charCodeAt(0);
            const base = code >= 97 ? 97 : 65;
            return String.fromCharCode(base + ((code - base + 13) % 26));
        }
        return char;
    }).join("");
};
