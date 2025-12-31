import { ALPHABET } from "../constants";

export const atbashConvert = (text: string) => {
	return text.split("").map(char => {
		const index = ALPHABET.indexOf(char.toLowerCase())
		if (index === -1) return char

		const reversedChar = ALPHABET[ALPHABET.length - 1 - index]
		return char === char.toUpperCase() ? reversedChar.toUpperCase() : reversedChar
	}).join("")
}
