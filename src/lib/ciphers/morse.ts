import { MORSE_CODE_CHARS } from "../constants";

export const encodeMorse = (s: string) => {
	return s
		.toUpperCase()
		.split("")
		.map(char => MORSE_CODE_CHARS[char] || "")
		.join(" ")
}

export const decodeMorse = (s: string) => {
	const words = s.split("/")
	const morseToChar = Object.entries(MORSE_CODE_CHARS).reduce((acc, [char, morse]) => {
		acc[morse] = char
		return acc
	}, {} as Record<string, string>)

	return words
		.map(word =>
			word
				.trim()
				.split(" ")
				.map(code => morseToChar[code] || "")
				.join("")
		)
		.join(" ")
}
