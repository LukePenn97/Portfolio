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
    <h1>Invert Binary Tree</h1>
    <br/>
    <div>I tried to use a while loop for this, but that failed so I looked up how to traverse binary trees and naturally you need recursion</div>
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
const mergeTwoLists = function(list1, list2) {
    let tempNode = list1
    while (list1 != null){
        if (list1.val >= list2.val) {
            tempNode.val = list1.val
        }
        if (list1.val < list2.val) {
            tempNode.val = list2.val
        }
        console.log("list1.val: " + list1.val)
        console.log("list2.val: " + list2.val)
        console.log("tempNode.val: " + tempNode.val)
        list1 = list1.next
        list2 = list2.next
        tempNode = tempNode.next
    }
};`, 
      'javascript',
      true)}
      <br/>

    </>
  )
}