export const rot47Convert = (text: string): string => {
    return text.split("").map(char => {
        const code = char.charCodeAt(0);
        if (code >= 33 && code <= 126) {
            return String.fromCharCode(33 + ((code - 33 + 47) % 94));
        }
        return char;
    }).join("");
};
