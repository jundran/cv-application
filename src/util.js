// Format camel case words
export function formatFieldName (name) {
	// (?=..) to keep delimiter
	const names = name.split((/(?=[A-Z])/))
	names[0] = names[0].charAt(0).toUpperCase() + names[0].slice(1)
	return names.join(' ')
}

export function capitalize (text) {
	return text.charAt(0).toUpperCase() + text.slice(1)
}
