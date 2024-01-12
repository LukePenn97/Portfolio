"use client";
import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

export default function balanced_binary_tree() {
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
    <h1>Balanced Binary Tree</h1>
    <br/>
    <div>I had to look up the find height algo, but the rest I did myself</div>
    <br/>
    <div>The key take away was that I needed to check the height of each node, because the tree could be unbalanced even if the top left and right nodes have the same max height</div>
    <br/>
    <div>I used two recursive helper functions, one to check the max height of one node, another to cycle through each node, calling the first function on left and right nodes</div>
    <br/>
    <div>Then I compare the difference in height of left and right, and if it's more than 1 I return false</div>
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let balanced = true
    balanced = checkBalance(root, balanced)
    if (balanced){
        return true
    }
    return false
    
};

const checkBalance = function(root, balanced) {
    if (!root) {
        return balanced;
    }

    let heightLeft = findHeight(root.left)


    let heightRight = findHeight(root.right)


    if (Math.abs(heightRight - heightLeft) >= 2){
        balanced = false;
        return balanced;
    }
    balanced = checkBalance(root.left, balanced) && checkBalance(root.right, balanced)  

    return balanced;
}

const findHeight = function(root) {
    
    if (root == null){
        return 0;
    }
    let leftHeight = findHeight(root.left)
    let rightHeight = findHeight(root.right)

    if (leftHeight > rightHeight)
                return (leftHeight + 1);
             else
                return (rightHeight + 1);
}`, 
      'javascript',
      true)}
      <br/>
    <div></div>
    <br/>
    </>
  )
}