"use client";
import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

export default function valid_parentheses() {
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
    <h1>Valid Parentheses </h1>
    <br/>
    <div>Instructions: </div>
    <br/>
    <div>Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.</div>
    <br/>
    <div>An input string is valid if:</div>
    <br/>
    <ol>
      <li>Open brackets must be closed by the same type of brackets.</li>
      <li>Open brackets must be closed in the correct order.</li>
      <li>Every close bracket has a corresponding open bracket of the same type.</li>
    </ol>
    <br/>
    <br/>
    <br/>
    <div>I saw a youtube short where they used a stack to solve this one</div>
    <div>First try:</div>
    <br/>
    {codeBlock1(`/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const stack = [];
    const key = {')': '(', '}': '{', ']': '['}
    for (i=0; i<s.length; i++){ 
        if (s[i] in key){
            stack.pop
            console.log("pop")
        } else {
            stack.push(s[i]);
            console.log("push")
        }
        console.log("stack: " + stack)
    }
    if (stack.length === 0) {
        return true;
    } else 
        return false;
};`, 
      'javascript',
      true)}
      <br/>
      <div>This is not working, the if statement s[i] in key doesn't make sense</div>
      <div>After readng some psuedocode on how to do it, I came up with the following:</div>
      <br/>
      {codeBlock1(`const isValid = function(s) {
    const stack = [];
    const key = {'(': ')', '{': '}', '[': ']'}
    for (i=0; i<s.length; i++){ 
        if (s[i] in key){
            stack.push(s[i])
            console.log("push " + s[i])
        } else if (stack.length < 1) {
            
            return false;
        } else {
            const stackPop = stack.pop()
            console.log("stackPop: " + stackPop);
            console.log("key[stackPop]: " + key[stackPop])
            console.log("s[i]: "+ s[i]);
            if (key[stackPop] != s[i]){
                return false;
            }
        }
        console.log("stack: " + stack)
    }
    if (stack.length === 0) {
        return true;
    } else 
        return false;
};`, 
      'javascript',
      true)}
      <br/>
      <div>This is working, likely it could be much cleaner though</div>
      <div>s[i] in key wasn't the problem, I just had the brackets in my key in the wrong order, I have to check for open brackets first using this method</div>
      <div>The order of events is as follows:</div>
      <ul>
        <li>Check if the element is in the opening brackets, if yes, push onto stack</li>
        <li>If the element is not in opening brackets, it must be a closing bracket</li>
        <li>First check if the stack is empty. If you put a closing bracket on an empty stack, it's not working, so return false</li>
        <li>If the array is not empty, then the previous element must be an open bracket</li>
        <li>Pop the previous element off the array, and compare if the open bracket key's value in the key object matches the closing bracket</li>
        <li>If it doesn't, return false</li>
        <li>Continue until the end of the array. After the loop, check if there are any extra open brackets on the stack, if yes, return false</li>
      </ul>
      <br/>
      <div>The time complexity of this should be o(n)</div>
    </>
  )
}