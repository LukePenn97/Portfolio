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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let ptr = new TreeNode;
    ptr = root;
    let temp = 0;
    //breadth first search
    while (ptr != null && ptr.left != null) {
        console.log(ptr.val)
        temp = ptr.left.val
        ptr.left.val = ptr.right.val
        ptr.right.val = temp
        ptr = ptr.left;
    }
    let ptr2 = root;
    ptr2 = ptr2.right;
    while (ptr2 != null && ptr2.right != null) {
        console.log(ptr2.val)
        temp = ptr2.left.val
        ptr2.left.val = ptr2.right.val
        ptr2.right.val = temp
        ptr2 = ptr2.right;
    }
};`, 
      'javascript',
      true)}
      <br/>
    <div>It turns out this is very simple, you just swap the entire nodes before the recursion each time</div>
    <br/>
    {codeBlock1(`const invertTree = function(root) {
	if (root == null)
		return root;

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

	// First recur on left child */
	invertTree(root.left);

	// Now recur on right child
	invertTree(root.right);
    return root;
}`, 
      'javascript',
      true)}
    </>
  )
}