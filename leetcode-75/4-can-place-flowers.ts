/*
    https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75

    You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

    Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

    Runtime
    69ms
    Beats 23.06%of users with TypeScript
    
    Memory
    44.60MB
    Beats 89.97%of users with TypeScript
*/

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let noAdjacent = 0

    flowerbed.forEach((_value, index) => {
        const prev = index - 1 
        const next =  index + 1

        if (!flowerbed[prev] && !flowerbed[index] && !flowerbed[next]) {
            noAdjacent++
            flowerbed[index] = 1
        }
    })

    return noAdjacent >= n
};