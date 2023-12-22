/*
    https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75

    For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
    Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

    Runtime
    61ms
    Beats 50.65%of users with TypeScript

    Memory
    44.32MB
    Beats 78.96%of users with TypeScript
*/
function gcd(a: number, b: number): number {
	return b === 0 ? a : gcd(b, a % b);
}

function isDivisible(str: string, divisor: string): boolean {
	const repetitions = str.length / divisor.length;
	const concatenated = divisor.repeat(repetitions);
	return str === concatenated;
}

function gcdOfStrings(str1: string, str2: string): string {
	const gcdLength = gcd(str1.length, str2.length);

	const gcdString = str1.substring(0, gcdLength);

	if (isDivisible(str1, gcdString) && isDivisible(str2, gcdString)) {
		return gcdString;
	} else {
		return '';
	}
}
