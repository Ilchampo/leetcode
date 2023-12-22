/*
    https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75

    There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

    Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

    Note that multiple kids can have the greatest number of candies.

    Runtime
    58ms
    Beats 59.75%of users with TypeScript
    
    Memory
    44.24MB
    Beats 85.93%of users with TypeScript
*/

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maxNumber = Math.max(...candies);
    const result = candies.map(c => c + extraCandies >= maxNumber);

    return result;
};