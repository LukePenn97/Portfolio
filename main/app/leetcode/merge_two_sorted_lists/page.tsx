"use client";
import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

export default function merge_two_sorted_lists() {
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
    <h1>Merge Two Sorted Lists</h1>

    <br/>
    {codeBlock1(`/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
};`, 
      'javascript',
      true)}
      <br/>
      
      <br/>
    </>
  )
}