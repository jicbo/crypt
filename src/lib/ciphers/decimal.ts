export const decimalEncode = (text: string): string => {
    return text
        .split("")
        .map((char) => char.charCodeAt(0).toString())
        .join(" ");
};

export const decimalDecode = (text: string): string => {
    return text
        .split(/\s+/)
        .filter((dec) => dec.length > 0)
        .map((dec) => String.fromCharCode(parseInt(dec, 10)))
        .join("");
};
