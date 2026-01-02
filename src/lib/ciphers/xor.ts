export const xorConvert = (text: string, key: string): string => {
    if (!key || key.length === 0) return text;

    return text
        .split("")
        .map((char, i) => {
            const charCode = char.charCodeAt(0);
            const keyCode = key.charCodeAt(i % key.length);
            return String.fromCharCode(charCode ^ keyCode);
        })
        .join("");
};
