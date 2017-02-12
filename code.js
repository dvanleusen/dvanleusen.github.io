// this is just a stub for a function you need to implement

function getStats(txt) {
	let text = txt.toLowerCase();
	/* 
	nChars: integer 
	Will contain the total number of characters in the text, including all white spaces.
	*/
	let numChars = txt.length;
	// if nothing is entered, then no character
	if (numChars === null){
		numChars = 0;
	}

	
	/*
	nWords: integer
	Will contain the total number of words in the text. For example, “Hello, World 1!” contains three words: “Hello”, “World” and “1”.
	*/
	var numWords = 0;
	var index = 0;
	var character = "";
	var nextChar = "";
	var firstChar = text.charAt(0);
	var secondChar = text.charAt(1);

	//checks every character in the text, if the current character is not a letter/number, and the next one is a letter/number, numWords++ 
	for (index; index < numChars; index++){
		character = text.charAt(index);
		nextChar = text.charAt(index + 1);
		
		if ((character < "a" || character >"z")&&(character < "0" || character >"9")){
			if (!((nextChar < "a" || nextChar >"z")&&(nextChar < "0" || nextChar >"9"))){
				numWords ++;
			}	
		}
	}
	
	// if the first character is a letter/num, then we have one additional word
	if (!((firstChar < "a" || firstChar >"z")&&(firstChar < "0" || firstChar >"9"))){
		numWords += 1;
	}

	/*
	nLines: integer
	Will contain the number of lines in the text. The only time this will be ‘0’ is when the text is empty.
	*/
	let numLines = (text.split(/\r\n|\r|\n/)).length;
	// if nothing is entered, then no line
	if (numChars === 0){
		numLines = 0;
	}

	
	/*
	nNonEmptyLines: integer
	Will contain the number of lines in the text containing at least one visible character. We will define
	visible character as any character other than whitespace.
	*/
	let numNonEmptyLines = (text.match(/^\s*\S/gm)||"").length;

	/*
	maxLineLength: integer
	Will contain the length of the longest line. Line length will be computed by counting the number of
	characters in the line, including any trailing white spaces, except newline ‘\n’.
	*/

	/*
	averageWordLength: float / worth 10 points
	Will contain the average word length in the text. Example: text “Hello, World 1!” would have average
	word length equal to (5+5+1)/3 = 3.666666.
	*/

	/*
	palindromes: array of strings / worth 15 points
	Will contain a list of unique palindromes in the text. Palindrome is a word with length > 2, which reads
	the same forward and backwards. Example: “Kayak, mom, MOM, XXx and 10z01 zz” contains 4
	*/

	/*
	unique palindromes: [“kayak”, “mom”, “xxx”, “10x01”]. Palindromes should be reported in the same
	order they appear in the text.
	*/

	/*
	longestWords: array of strings / worth 20 points
	Will contain the 10 longest words in the text. In case of ties, the secondary sorting criteria should be
	alphabetical sorting. Example: “0, XXX, YYYY, AAAA, BBB” will yield a list: [“aaaa”, “yyyy”,
	”bbbb”, “xxx”, ”0”].
	*/

	/*
	mostFrequentWords: array of strings / worth 20 points
	Will contain the 10 most frequent words in the text, concatenated with their respective frequencies.
	Use alphabetic sorting to to resolve frequency ties. The results will include the corresponding
	frequencies appended to the actual words surrounded by brackets. Example: the text
	“The,the,THE,and,AND,and,it,IT” should yield a list [“and(3)”, “the(3)”, “it(2)”].
	*/
    return {
        nChars: numChars,
        nWords: numWords,
        nLines: numLines,
        nNonEmptyLines: numNonEmptyLines,
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

function nWords(txt) {
	
	
}

function nLines(txt) {
	
	
}

function nNonEmptyLines(txt) {
	
	
}

function maxLineLength(txt) {
	
	
}

function averageWordLength(txt) {
	
	
}

function palindromes(txt) {
	
	
}

function longestWords(txt) {
	
	
}

function mostFrequentWords(txt) {
	
	
}