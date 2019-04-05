// Reverses a string with emojis
function reverse(string) {
	return Array.from(string).reverse().join("")
}

// Returns true for a palindrome, false otherwise
// function palindrome(string) {
// 	let processedContent = string.toLowerCase();
// 	return processedContent === reverse(processedContent);
// }

// returns an array of the username and domain, for uppercase and lowercase
// function emailParts(string) {
// 	let processedContent = string.toLowerCase();
// 	return processedContent.split("@");
// }

// defines a phrase object
function Phrase(content) {
	this.content = content;
}

// returns true if the phrase is a palindrome, false otherwise
this.palindrome = function palindrome() {
	let processedContent = this.content.toLowerCase();
	return processedContent === reverse(processedContent);
}