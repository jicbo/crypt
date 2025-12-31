import { ALPHABET } from "../constants";

export const rot13Convert = (text: string) => {
	return text.split("").map(char => {
		const index = ALPHABET.indexOf(char.toLowerCase())
		if (index === -1) return char

		const shiftedIndex = (index + 13) % 26
		const newChar = ALPHABET[shiftedIndex]
		return char === char.toUpperCase() ? newChar.toUpperCase() : newChar
	}).join("")
}
