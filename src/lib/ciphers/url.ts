export const urlEncode = (text: string): string => encodeURIComponent(text);
export const urlDecode = (text: string): string => {
    try {
        return decodeURIComponent(text);
    } catch (e) {
        return "Error: Invalid URL encoding";
    }
};
