function reverseWords(s: string): string {
    const reversedWords = s.trim().split(/\s+/).reverse();
    return reversedWords.join(' ');
};
 
console.log(`_${reverseWords('  the sky is blue ')}_`);