"use client";
import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

export default function valid_palindrome() {
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
    <h1>Valid Palindrome</h1>
    <br/>
    <div>Instructions: </div>
    <br/>
    <div>A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.</div>
    <br/>
    <div>First try:</div>
    <br/>
    {codeBlock1(`/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s;
    const cleanStr = str.toUpperCase().replace(/_|[\W]/g, '')
    const revStr = cleanStr.split("").reverse().join("");
    return cleanStr === revStr
};`, 
      'javascript',
      true)}
      <br/>
      <div>This one was quite easy, I just had to look up how to reverse a string and clean it with regex</div>
    </>
  )
}