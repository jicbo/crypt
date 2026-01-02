export const base32Encode = (text: string): string => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    let binary = "";
    for (let i = 0; i < text.length; i++) {
        binary += text.charCodeAt(i).toString(2).padStart(8, '0');
    }

    let result = "";
    for (let i = 0; i < binary.length; i += 5) {
        const chunk = binary.slice(i, i + 5).padEnd(5, '0');
        result += alphabet[parseInt(chunk, 2)];
    }

    while (result.length % 8 !== 0) result += "=";
    return result;
};

export const base32Decode = (text: string): string => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    const clean = text.toUpperCase().replace(/=/g, "");
    let binary = "";
    for (let i = 0; i < clean.length; i++) {
        const val = alphabet.indexOf(clean[i]);
        if (val === -1) continue;
        binary += val.toString(2).padStart(5, '0');
    }

    let result = "";
    for (let i = 0; i < binary.length - (binary.length % 8); i += 8) {
        result += String.fromCharCode(parseInt(binary.slice(i, i + 8), 2));
    }
    return result;
};
