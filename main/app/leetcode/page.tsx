import React from 'react'
import { CopyBlock,dracula } from "react-code-blocks";

export default function Leetcode() {
  let codeBlock1 = `var twoSum = function(nums, target) {
    let firstNum = null;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] <= target){
            firstNum = nums[i];
            console.log("firstNum: " + firstNum)
            for(let j = i+1; j < nums.length; j++){
                console.log("j: " + j)
                if(nums[i] + nums[j] === target){
                    return([i,j]);
                }
            }
        }
    }
    return([]);
    testing
};`
  return (
    <>
    <div>Leetcode</div>
    {codeBlock1}
    </>
  )
}
