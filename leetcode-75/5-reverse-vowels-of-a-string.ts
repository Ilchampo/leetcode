/*
    https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75

    Given a string s, reverse only all the vowels in the string and return it.
    The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

    Runtime
    52ms
    Beats 99.35%of users with TypeScript
    
    Memory
    48.45MB
    Beats 86.88%of users with TypeScript
*/

function reverseVowels(s: string): string {
    const chars = s.split('');
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    let i = 0;
    let j = chars.length - 1;

    while (i < j) {
        while (i < j && !vowels.has(chars[i])) {
            i++;
        }

        while (i < j && !vowels.has(chars[j])) {
            j--;
        }

        [chars[i], chars[j]] = [chars[j], chars[i]];
        i++;
        j--;
    }

    return chars.join('');
};