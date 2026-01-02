export const hexEncode = (text: string): string => {
    return text
        .split("")
        .map((char) => char.charCodeAt(0).toString(16).padStart(2, "0"))
        .join(" ");
};

export const hexDecode = (text: string): string => {
    return text
        .split(/\s+/)
        .filter((hex) => hex.length > 0)
        .map((hex) => String.fromCharCode(parseInt(hex, 16)))
        .join("");
};
