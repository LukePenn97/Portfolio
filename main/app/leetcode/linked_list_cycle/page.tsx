"use client";
import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

export default function linked_list_cycle() {
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
    <h1>Linked List Cycle</h1>
    <br/>
    <div>This is so close, I just can't figure out how to get the dang variable out of the recursive function</div>
    <br/>
    <div></div>
    <br/>
    {codeBlock1(`/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    //if node == a node we've seen before, return true
    //How do we tell if we've seen a node before?
    //There's no guarantee that the numbers are all unique, so we can't check by number
    //storing all the nodes and checking against them every time would be really inefficient
    //pos is not passed as a parameter, but can we access it? Undoubtably no.
    //if node == node.next, return true
    // if node == node.next.next || node.next == node.next.next return true
    //this could get out of hand, but maybe it's correct
    //create an array of pointers
    //as we navigate through the list, add each node to the array, and check each node against the previous nodes
    //if there isn't a cycle, the list will end with null
    const refs = [];
    let isLoop = false;
    iterateLinkedList(head, refs, isLoop)
    console.log("isLoop: " + isLoop)
    return isLoop


};

const iterateLinkedList = function(node, refs){
    if(!node){
        console.log("List ends, returning false")
        isLoop = false;
        return isLoop;
    }
    if(nodeExists(node, refs)){
        console.log("Node exists, returning true")
        isLoop = true;
        return isLoop;
    }
    refs.push(node);
    iterateLinkedList(node.next, refs)
}

const nodeExists = function(node, refs) {
    console.log("inside nodeExists, node val: " + node.val)
    for(i = 0; i < refs.length; i++) {
        if (refs[i] == node) {
            return true;
        }
    }
    return false;
}`, 
      'javascript',
      true)}
      <br/>
      <div></div>
      <br/>
      {codeBlock1(``, 
      'javascript',
      true)}
      <br/>
      <br/>
      <div></div>
    </>
  )
}



