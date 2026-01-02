export const railFenceEncode = (text: string, rails: number): string => {
	if (rails === 1) return text;
	const fence: string[][] = Array.from({ length: rails }, () => []);
	let rail = 0;
	let direction = 1;

	for (const char of text) {
		fence[rail].push(char);
		rail += direction;
		if (rail === rails - 1 || rail === 0) direction *= -1;
	}

	return fence.flat().join("");
};

export const railFenceDecode = (text: string, rails: number): string => {
	if (rails === 1) return text;
	const fence: (string | null)[][] = Array.from({ length: rails }, () =>
		Array(text.length).fill(null)
	);
	let rail = 0;
	let direction = 1;

	for (let i = 0; i < text.length; i++) {
		fence[rail][i] = "*";
		rail += direction;
		if (rail === rails - 1 || rail === 0) direction *= -1;
	}

	let index = 0;
	for (let r = 0; r < rails; r++) {
		for (let i = 0; i < text.length; i++) {
			if (fence[r][i] === "*" && index < text.length) {
				fence[r][i] = text[index++];
			}
		}
	}

	let result = "";
	rail = 0;
	direction = 1;
	for (let i = 0; i < text.length; i++) {
		result += fence[rail][i];
		rail += direction;
		if (rail === rails - 1 || rail === 0) direction *= -1;
	}

	return result;
};
