"use client";
import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";



export default function Leetcode() {
  function codeBlock1 (code: string, language: string, showLineNumbers: boolean) {
    return (
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={dracula}
      />
    );
  }
  return (
    <>
    <h1>Two Sum </h1>
    <br/>
    <div>Instructions: </div>
    <br/>
    <div>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. </div>
    <br/>
    <div>You may assume that each input would have exactly one solution, and you may not use the same element twice.</div>
    <br/>
    <div>You can return the answer in any order.</div>
    <br/>
    <div>Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?</div>
    <br/>
    <br/>
    <br/>
    <div>First try:</div>
    <br/>
    {codeBlock1(`/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(i=0;i<nums.length;i++){
        for(j=0;j<nums .length;j++){
            if (nums[i]+nums[j]===target && i !== j){
                return([i,j])
            }
        }
    }
};`, 
      'javascript',
      true)}
      <br/>
      <div>I used a brute force method to simply compare every value in the array with all other values, and check to make sure they weren't the same index</div>
      <br/> 
      <div>The runtime for this was 69 ms, and the time complexity is {"O(n^2)"}, because it has 2 nested loops iterating through the entire array</div>
      <br/>
      <div>I looked at the top solution for this problem, and the answer used hashmaps</div>
      <br/>
      <div>I did some digging, and I found an interesting and useful video on optimizing hashmaps: https://www.youtube.com/watch?v=DMQ_HcNSOAI&ab_channel=strager</div>
      <br/>
      <div>I translated the code example on leetcode from java to javascript:</div>
      <br/>
      {codeBlock1(`var twoSum = function(nums, target) {
  const hashMap = new Map();
  let n = nums.length;
    
  for(i=0; i < n; i++) {
    let complement = target - nums[i];
      if (hashMap.has(complement)){
        return [hashMap.get(complement), i];
      }
    hashMap.set(nums[i], i);
  }
  return [];
};`,
    'javascript',
    true)}
    <br/>
    <div>The runtime for this was 51 ms</div>
    <br/>
    <div>A hashmap takes a value or series of values, they could be strings or numbers, and applies a function to turn them into unique keys.</div>
    <div>These keys value pairs are then mapped to an array, and with a perferct hash function, each key should get a unique spot in the array</div>
    <div>The best hash function depends on the data you're trying to hash. For example, a simple hash function would be to just take the first character of a string and multiply it by the last character's value</div>
    <div>However, if your dataset has multiple strings that have the same first and last letter, those would all be allocated to the same spot in the array.</div>
    <br/>
    <div>This would slow down the hash map because now you will have to check each array position, or bucket, for multiple entries, or collisions.</div>
    <div>The code above uses javascript's default hashmap. First we generate a new empty map, then we initiate a loop and set the complement to the target - the current number in the array</div>
    <div>We then check if the hashmap contains the complement. The map is empty on the first pass, so it skips to the next step.</div>
    <div>We now insert the first number in the array into the hashmap with it's index. Then we repeat this process.</div>
    <div>We are only using one loop to iterate through the array, and since hash table lookups take constant time on average, this solution has a time complexity of {"O(n)"}</div>
    <br/>
    <br/>
    </>
  )
}
// Iterate through the array from left to right.
// For each element nums[i], calculate the complement by subtracting it from the target: complement = target - nums[i].
// Check if the complement exists in the hash table. If it does, we have found a solution.
// If the complement does not exist in the hash table, add the current element nums[i] to the hash table with its index as the value.
// Repeat steps 3-5 until we find a solution or reach the end of the array.
// If no solution is found, return an empty array or an appropriate indicator.
// This approach has a time complexity of O(n) since hash table lookups take constant time on average. 
// It allows us to solve the Two Sum problem efficiently by making just one pass through the array.