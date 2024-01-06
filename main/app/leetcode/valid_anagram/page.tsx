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
    <div>Need to check if a word and it's pair are an anagram</div>
    <br/>
    <div>I created two alphabet objects with a value pair for each character, so I can count the characters in each word and compare them</div>
    <br/>
    <div>No idea if this is the best method, but it works:</div>
    <br/>
    {codeBlock1(`/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length)
        return false;
    const alphabet1 = {a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, z:0}
    const alphabet2 = {a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, z:0}
    for (i = 0; i < s.length; i++) {
        alphabet1[s[i]] += 1;
    }
    for (i = 0; i < t.length; i++) {
        alphabet2[t[i]] += 1;
    }
    const keys1 = Object.keys(alphabet1);
    const keys2 = Object.keys(alphabet2);
    for (let key of keys1) {
        if (alphabet1[key] !== alphabet2[key]) {
            return false;
        }
    }
    return true
};`, 
      'javascript',
      true)}
      <br/>
    </>
  )
}