import { ALPHABET } from "../constants";

export const caesarConvert = (text: string, shift: number) => {
	const l: string[] = text.split("")
	for (let i = 0; i < l.length; i++) {
		if (ALPHABET.indexOf(l[i].toLowerCase()) > -1) {
			const upper = l[i] === l[i].toUpperCase()
			const index = ALPHABET.indexOf(l[i].toLowerCase())
			const newIndex = (index + shift % ALPHABET.length + ALPHABET.length) % ALPHABET.length
			const x = ALPHABET[newIndex]
			l[i] = upper ? x.toUpperCase() : x
		}
	}
	return l.join("")
}
