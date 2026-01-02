export const binaryEncode = (text: string): string => {
    return text
        .split("")
        .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
        .join(" ");
};

export const binaryDecode = (text: string): string => {
    return text
        .split(/\s+/)
        .filter((bin) => bin.length > 0)
        .map((bin) => String.fromCharCode(parseInt(bin, 2)))
        .join("");
};
