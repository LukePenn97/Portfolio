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
    <div>Honestly I forgot how to do linked lists, here's my first attempt but it didn't really make any sense so I went straight to the solution after this</div>
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
      <div>Things I missed are creating an empty listNode (I forgot you can do that), checking that both list nodes exist, and adding a pointer to the temp list</div>
      <br/>
      {codeBlock1(`var mergeTwoLists = function(list1, list2) {
    let ans = new ListNode();
    let ptr = ans;
    while(list1 && list2){
        if(list1.val <= list2.val){
            ans.next = new ListNode(list1.val);
            list1 = list1.next;
        }
        else{
            ans.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        ans = ans.next;
    }
    while(list1){
        ans.next = new ListNode(list1.val);
        list1 = list1.next;
        ans = ans.next;
    }
    while(list2){
        ans.next = new ListNode(list2.val);
        list2 = list2.next;
        ans = ans.next;
    }
    return ptr.next;
};`, 
      'javascript',
      true)}
      <br/>
      <div>I kind of cheated on this one and I'd like to come back to it, but I'll count it for now</div>
    </>
  )
}