export const straddlingCheckerboardEncode = (text: string, keys: string, row1: number, row2: number): string => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ./";
    const cleanKeys = keys.toUpperCase().replace(/\s/g, "");



    const board: Record<string, string> = {};
    let keyIdx = 0;


    for (let i = 0; i < 10; i++) {
        if (i === row1 || i === row2) continue;
        board[cleanKeys[keyIdx++]] = i.toString();
    }

    for (let i = 0; i < 10; i++) {
        board[cleanKeys[keyIdx++]] = row1.toString() + i.toString();
    }

    for (let i = 0; i < 10; i++) {
        board[cleanKeys[keyIdx++]] = row2.toString() + i.toString();
    }

    return text.toUpperCase().split("").map(c => board[c] || c).join(" ");
};

export const straddlingCheckerboardDecode = (text: string, keys: string, row1: number, row2: number): string => {
    const cleanKeys = keys.toUpperCase().replace(/\s/g, "");
    const reverseBoard: Record<string, string> = {};
    let keyIdx = 0;

    for (let i = 0; i < 10; i++) {
        if (i === row1 || i === row2) continue;
        reverseBoard[i.toString()] = cleanKeys[keyIdx++];
    }
    for (let i = 0; i < 10; i++) {
        reverseBoard[row1.toString() + i.toString()] = cleanKeys[keyIdx++];
    }
    for (let i = 0; i < 10; i++) {
        reverseBoard[row2.toString() + i.toString()] = cleanKeys[keyIdx++];
    }

    const parts = text.split(/\s+/);
    let result = "";
    let i = 0;

    const digits = text.replace(/\D/g, "");
    while (i < digits.length) {
        const first = digits[i];
        if (parseInt(first) === row1 || parseInt(first) === row2) {
            const pair = digits.slice(i, i + 2);
            result += reverseBoard[pair] || "";
            i += 2;
        } else {
            result += reverseBoard[first] || "";
            i += 1;
        }
    }
    return result;
};
