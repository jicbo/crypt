export const base64Encode = (text: string): string => {
    try {
        return btoa(text);
    } catch (e) {
        return "Error: Text contains non-ASCII characters";
    }
};

export const base64Decode = (text: string): string => {
    try {
        return atob(text);
    } catch (e) {
        return "Error: Invalid Base64 input";
    }
};
