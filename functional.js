let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string
// Example: "North Dakota" -> "north-dakota"
// function urlify(string) {
// 	return string.toLowerCase().split(/\s+/).join('-');
// }

// urls: imperative version
// function imperativeUrls(elements) {
// 	let urls = [];
// 	elements.forEach(function(element) {
// 		urls.push(element.toLowerCase().split(/\s+/).join("-"));
// 	});
// return urls;
// }
// console.log(imperativeUrls(states));

// urls: imperative version
// function imperativeUrls(elements) {
// 	let urls = [];
// 	elements.forEach(function(element) {
// 		urls.push(urlify(element));
// 	});
// return urls;
// }
// console.log(imperativeUrls(states));

// urls: functional version
// function functionalUrls(elements) {
// 	return elements.map(element => urlify(element));
// }
// console.log(functionalUrls(states));

// urls: use map to make urls
// function functionalUrls(elements) {
// 	return elements.map(element => "https://www.example.com/"+urlify(element));
// }
// console.log(functionalUrls(states));

// singles: Imperative version
// function imperativeSingles(elements) {
// 	let singles = [];
// 	elements.forEach(function(element) {
// 		if (element.split(/\s+/).length === 1) {
// 			singles.push(element);
// 		}
// 	});
// 	return singles;
// }
// console.log(imperativeSingles(states));

// singles: Functional version
// function functionalSingles(elements) {
// 	return elements.filter(element => element.split(/\s+/).length === 1);
// }
// console.log(functionalSingles(states));

// singles: test for string includes
// function functionalSingles(elements) {
// 	return elements.filter(element => element.includes('Dakota'));
// }
// console.log(functionalSingles(states));

// singles: test for regex on the split array being 2
// function functionalSingles(elements) {
// 	return elements.filter(element => element.split(/\s+/).length === 2);
// }
// console.log(functionalSingles(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
// function imperativeSum(elements) {
// 	let total = 0;
// 	elements.forEach(function(n) {
// 		total += n;
// 	});
// 	return total;
// }
// console.log(imperativeSum(numbers));

// sum: Functional solution
// function functionalSum(elements) {
// 	return elements.reduce((total, n) => { return total += n; });
// }
// console.log(functionalSum(numbers));

// lengths: Imperative solution
// function imperativeLengths(elements) {
// 	let lengths = {};
// 	elements.forEach(function(element) {
// 		lengths[element] = element.length;
// 	});
// 	return lengths;
// }
// console.log(imperativeLengths(states));


// lengths: Functional solution
// function functionalLengths(elements) {
// 	return elements.reduce((lengths, element) => {
// 		lengths[element] = element.length;
// 		return lengths;
// 	}, {});
// }
// console.log(functionalLengths(states));

// multiplication: Functional solution
function functionalProduct(elements) {
	return elements.reduce((product, n) => { return product *= n; });
}
console.log(functionalProduct(numbers));