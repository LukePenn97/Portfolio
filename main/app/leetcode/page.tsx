"use client";
import React from 'react'
import { CopyBlock,dracula } from "react-code-blocks";



export default function Leetcode() {
  function codeBlock1 (code: string, language: string, showLineNumbers: boolean) {
    return (
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
      />
    );
  }
  return (
    <>
    <div>This is the first Leetcode Problem I've done, Two Sum</div>
    {codeBlock1(
`testing
test2
test3`, 
      'javascript',
      true)}
    </>
  )
}
