/* Name: Daniel van Leusen
UCID: 10064708
Assignment 2
SENG 513 Tutorial 01
*/

function getStats(txt) {
	let text1 = txt.toLowerCase();
	let numChars = numberChars(text1);
	let numWords = numberWords(text1);
	let numLines = numberLines(text1);
	let numNonEmptyLines = numberNonEmptyLines(text1);
	let maximumLineLength = maxLineLeng(text1);
	let wordArray = createWordArray(text1);
	let averageLength = averageWordLeng(wordArray);
	let palindromeArray = getPalindrome(wordArray);
	let longestArray = getLongest(wordArray);
	let mostFrequentArray = mostFrequent(wordArray);
	
    return {
        nChars: numChars,
        nWords: numWords,
        nLines: numLines,
        nNonEmptyLines: numNonEmptyLines,
		maxLineLength: maximumLineLength,
        averageWordLength: averageLength,
        palindromes: palindromeArray,
        longestWords: longestArray,
        mostFrequentWords: mostFrequentArray
    };
}

/* nChars: integer 
Will contain the total number of characters in the text1, including all white spaces.
*/
function numberChars(txt){
	//does not count breaks
	numChars = txt.length 
	// include the following line if you do not want to count all the breaks!
	// numChars = txt.length - (txt.match(/\n/gm)||"").length;
	
	// if nothing is entered, then no character
	if (numChars === null){
		numChars = 0;
	}
	return numChars;
}

/* nWords: integer
Will contain the total number of words in the text1. For example, “Hello, World 1!” contains three words: “Hello”, “World” and “1”.
*/
function numberWords(txt){
	let numWords = 0;
	let index = 0;
	let character = "";
	let nextChar = "";
	let firstChar = txt.charAt(0);

	//checks every character in the text1, if the current character is not a letter/number, and the next one is a letter/number, numWords++ 
	for (index; index < numChars; index++){
		character = txt.charAt(index);
		nextChar = txt.charAt(index + 1);
		
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
	return numWords;
}

/* nLines: integer
Will contain the number of lines in the text1. The only time this will be ‘0’ is when the text1 is empty.
*/
function numberLines(txt){	
	let numLines = (txt.split(/\n/)).length;
	// if nothing is entered, then no line
	if (numChars === 0){
		numLines = 0;
	}
	return numLines;
}

/* nNonEmptyLines: integer
Will contain the number of lines in the text1 containing at least one visible character. We will define
visible character as any character other than whitespace.
*/
function numberNonEmptyLines(txt){
	let numNonEmptyLines = 0;
	return numNonEmptyLines = (txt.match(/^\s*\S/gm)||"").length;
}

/* maxLineLength: integer
Will contain the length of the longest line. Line length will be computed by counting the number of
characters in the line, including any trailing white spaces, except newline ‘\n’.
*/
function maxLineLeng(txt){
	let maximumLineLength = 0;
	let lineArray = txt.split("\n");
	let lineArrayLength = lineArray.length;
	let index = 0;
	
	// checks length for each line, and takes the greatest length
	for (index; index < lineArrayLength; index++){
		if (lineArray[index].length > maximumLineLength){
			maximumLineLength = lineArray[index].length;
		}
	}
	return maximumLineLength;
}

/* Replaces all non-alphanumeric characters to a single space, and place them into a wordArray */
function createWordArray(txt){
	let text2 = txt.replace(/\W+|_/gm, " ");
	text2 = text2.trim();
	let wordArray = text2.split(" ");	
	return wordArray;
}

/* averageWordLength: float
Will contain the average word length in the text1. Example: text1 “Hello, World 1!” would have average
word length equal to (5+5+1)/3 = 3.666666.
*/
function averageWordLeng(wordArray){
	let totalLength = 0;
	let averageLength = 0;
	let index = 0;
	
	// checks length for each word, and takes the average
	for (index; index < wordArray.length; index++){
		totalLength += wordArray[index].length;
	}
	
	return averageLength = totalLength/wordArray.length;
}

/* palindromes: array of strings
Will contain a list of unique palindromes in the text1. Palindrome is a word with length > 2, which reads
the same forward and backwards. Example: “Kayak, mom, MOM, XXx and 10z01 zz” contains 4
unique palindromes: [“kayak”, “mom”, “xxx”, “10x01”]. Palindromes should be reported in the same
order they appear in the text1.
*/
function getPalindrome(wordArray){
	let palindromeArray = [];
	let reversedWordArray = [];
	let index = 0;
	
	// checks each word if is palindrome, if yes, it is added to the palindromeArray
	for (index; index < wordArray.length; index++){
		reversedWordArray[index] = wordArray[index].split('').reverse().join('');
		if ((reversedWordArray[index] === wordArray[index])&&(wordArray[index].length > 2)){
			palindromeArray.push(wordArray[index]);
		}
	}
	
	//checkes if array is empty
	if (palindromeArray[0] === "") palindromeArray = [];
	return palindromeArray;
}

/* longestWords: array of strings
Will contain the 10 longest words in the text1. In case of ties, the secondary sorting criteria should be
alphabetical sorting. Example: “0, XXX, YYYY, AAAA, BBB” will yield a list: [“aaaa”, “yyyy”,
”bbbb”, “xxx”, ”0”].
*/
function getLongest(wordArray){
	let count = {}, word;
	let uniqueArray = [];
	let	sortedLengthArray = [];
	let longestArray = [];
	let index = 0;
	const TEN = 10;
	
	// removes duplicated words from the list
	count = frequencyCounter(wordArray);
	
	// creates a unique array with no duplicates
	for (word in count){
		uniqueArray.push(word);
	}
	
	// sorts by length and then alphabetically (numbers go before letters if they have the same length)
	sortedLengthArray = uniqueArray.sort(function(a,b){return compareLength(a.length, b.length) || compareChar(a, b)});
	
	// takes the first 10 of words in the array
	if (sortedLengthArray.length > TEN){
		for (index; index < TEN; index++){
			longestArray.push(sortedLengthArray[index]);
		}
	} else {
		longestArray = sortedLengthArray;
	}
	
	//checkes if array is empty
	if (longestArray[0] === "") longestArray = [];
	return longestArray;
}

/*	mostFrequentWords: array of strings
Will contain the 10 most frequent words in the text1, concatenated with their respective frequencies.
Use alphabetic sorting to resolve frequency ties. The results will include the corresponding
frequencies appended to the actual words surrounded by brackets. Example: the text1
“The,the,THE,and,AND,and,it,IT” should yield a list [“and(3)”, “the(3)”, “it(2)”].
*/
function mostFrequent(wordArray){
	let count = {}, word;
	let uniqueArray = [];
	let mostFrequentArray = [];
	let	sortedFrequencyArray = [];
	let finalFrequencyResult =[];
	let emptyArray = [];
	let index = 0;
	const TEN = 10;
	
	// removes duplicated words from the list
	count = frequencyCounter(wordArray);
	
	// creates a unique array with no duplicates
	for (word in count){
		uniqueArray.push(word);
	}
	
	// sorts by length and then alphabetically (numbers go before letters if they have the same length)
	sortedFrequencyArray = uniqueArray.sort(function(a,b){return compareFrequency(a, b, count) || compareChar(a, b)});

	// takes the fiSample text.rst 10 of words in the array
	if (sortedFrequencyArray.length > TEN){
		for (index; index < TEN; index++){
			mostFrequentArray.push(sortedFrequencyArray[index]);
		}
	} else{
		mostFrequentArray = sortedFrequencyArray;
	}
	
	index = 0;
	for (index; index < mostFrequentArray.length; index++){
		finalFrequencyResult[index] = mostFrequentArray[index]+"("+count[mostFrequentArray[index]]+")";
	}
	
	// checks if the array is empty
	if (mostFrequentArray[0] === "") finalFrequencyResult = [];
	
	return finalFrequencyResult;
}

/* counts the frequency of a word
*/
function frequencyCounter (array){
	let count = {}, word;
	let index = 0;
	
	// counts the frequency for each word
	for (index; index < array.length; index++){
		word = array[index];
		if (word in count) {
			count[word]++;
		} else {
			count[word] = 1;
		}
	}
	return count;
}

/* compares integers (for length)*/
function compareLength (a, b) {
	if (a > b) return -1;
	if (a < b) return 1;
	return 0;
}

/* compares each character within the word (to sort alphabetically) */
function compareChar (a, b){
	if (a > b) return 1;
	if (a < b) return -1;
	return 0;
}

/* compares frequency for each word */
function compareFrequency(a, b, count){
	return count[b] - count[a];
}