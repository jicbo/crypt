const NATO_MAP: Record<string, string> = {
    'A': 'Alpha', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo',
    'F': 'Foxtrot', 'G': 'Golf', 'H': 'Hotel', 'I': 'India', 'J': 'Juliett',
    'K': 'Kilo', 'L': 'Lima', 'M': 'Mike', 'N': 'November', 'O': 'Oscar',
    'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango',
    'U': 'Uniform', 'V': 'Victor', 'W': 'Whiskey', 'X': 'X-ray', 'Y': 'Yankee',
    'Z': 'Zulu', '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four',
    '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine'
};

const REV_NATO = Object.fromEntries(Object.entries(NATO_MAP).map(([k, v]) => [v.toUpperCase(), k]));

export const natoEncode = (text: string): string => {
    return text.toUpperCase().split("").map(c => NATO_MAP[c] || c).join(" ");
};

export const natoDecode = (text: string): string => {
    return text.split(/\s+/).map(w => REV_NATO[w.toUpperCase()] || w).join("");
};

export const pigLatinEncode = (text: string): string => {
    return text.split(/\s+/).map(word => {
        if (/^[aeiou]/i.test(word)) return word + "way";
        const match = word.match(/^([^aeiou]+)(.*)$/i);
        if (match) return match[2] + match[1] + "ay";
        return word;
    }).join(" ");
};

export const pigLatinDecode = (text: string): string => {

    return text.split(/\s+/).map(word => {
        if (word.endsWith("way")) return word.slice(0, -3);
        if (word.endsWith("ay")) {
            const sansAy = word.slice(0, -2);

            return sansAy;
        }
        return word;
    }).join(" ");
};
