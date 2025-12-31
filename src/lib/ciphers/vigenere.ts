import { ALPHABET } from "../constants";

export const vigenereConvert = (text: string, key: string, encrypt: boolean) => {
	if (!key) return text
	let result = ""
	let keyIndex = 0
	const cleanKey = key.toLowerCase().split("").filter(char => ALPHABET.includes(char))

	if (cleanKey.length === 0) return text

	for (let i = 0; i < text.length; i++) {
		const char = text[i]
		const charLower = char.toLowerCase()
		const alphaIndex = ALPHABET.indexOf(charLower)

		if (alphaIndex === -1) {
			result += char
			continue
		}

		const keyChar = cleanKey[keyIndex % cleanKey.length]
		const keyShift = ALPHABET.indexOf(keyChar)

		let newIndex
		if (encrypt) {
			newIndex = (alphaIndex + keyShift) % ALPHABET.length
		} else {
			newIndex = (alphaIndex - keyShift + ALPHABET.length) % ALPHABET.length
		}

		const newChar = ALPHABET[newIndex]
		result += char === char.toUpperCase() ? newChar.toUpperCase() : newChar
		keyIndex++
	}
	return result
}
