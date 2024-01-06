"use client";
import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

export default function binary_search() {
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
    <h1>Binary Search</h1>
    <br/>
    <div>Search a sorted array in O(log n) time</div>
    <br/>
    <div>I was close with my first attempt, but I kept trying to use Math.floor(index/2) to calculate the middle point</div>
    <br/>
    {codeBlock1(`/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let max = nums.length;
    let min = 0;
    let i = Math.floor(nums.length/2)
    let targetCanExist = true;

    while (targetCanExist) {
        if (max === min){
            Console.log("max == min")
            targetCanExist = false;
        }
        
        if (nums[i] === target) {
            return i;
            console.log("num is target. Index: " + i + ", num: " + nums[i])
        }

        if (nums[i] > target){
            max = i;

                        console.log("num is bigger than target. Index: " + i + ", num: " + nums[i] + ", target: " + target)

            i--;
            
        }
        if (nums[i] < target){
            min = i;
                        console.log("num is smaller than target. Index: " + i + ", num: " + nums[i] + ", target: " + target)

            i++;
            
        }
        
    }
    return -1
};`, 
      'javascript',
      true)}
      <br/>
      <div>This didn't work so I looked it up, and I missed a few things.</div>
      <br/>
      {codeBlock1(`var search = function(nums, target) {
    // Iterative function to implement Binary Search

	let start = 0, end = nums.length - 1;

	// Iterate while start not meets end
	while (start <= end) {

		// Find the mid index
		let mid = Math.floor((start + end) / 2);

		// If element is present at 
		// mid, return True
		if (nums[mid] === target) return mid;

		// Else look in left or 
		// right half accordingly
		else if (nums[mid] < target)
			start = mid + 1;
		else
			end = mid - 1;
	}

	return -1;
}`, 
      'javascript',
      true)}
      <br/>
      <ul>
        <li>Start with max and min, but subtract 1 from the length to get the max</li>
        <li>While loop with condition while min is less than or equal to max, to account for overlap</li>
        <li>Recalculate the mid at the start of the loop with Math.floor((start + end) / 2)</li>
        <li>Check if nums[mid] equals target</li>
        <li>If nums[mid] is smaller, set the start to mid +1</li>
        <li>Else, set end to mid -1</li>
      </ul>
      <br/>
      <div>I'm not really sure why +1 and -1 work here</div>
    </>
  )
}



