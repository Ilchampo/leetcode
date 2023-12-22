/*
    https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

    You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
    Return the merged string.

    Runtime
    47ms
    Beats 93.02%of users with TypeScript

    Memory
    44.47MB
    Beats 60.85%of users with TypeScript
*/

function mergeAlternately(word1: string, word2: string): string {
    const maxWordCount = Math.max(word1.length, word2.length);
    let str = '';
    for(let i = 0; i < maxWordCount; i++) {
        str = str.concat(word1[i] ?? '', word2[i] ?? '')
    }

    return str;
};