import { ALPHABET } from "../constants";

export const a1z26Encode = (text: string) => {
	return text.split("").map(char => {
		const index = ALPHABET.indexOf(char.toLowerCase())
		if (index === -1) return char
		return index + 1
	}).join("-")
}

export const a1z26Decode = (text: string) => {
	return text.split("-").map(part => {
		const num = parseInt(part)
		if (!isNaN(num) && num >= 1 && num <= 26) {
			return ALPHABET[num - 1]
		}
		return part
	}).join("")
}
