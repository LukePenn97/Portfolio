"use client";
import React from 'react'
import Link from "next/link"



export default function Leetcode() {
  return (
    <>
    <h1>Leetcode Main Page</h1>
    <Link href="/leetcode/two_sum">Two Sum</Link>
    <br/>
    <Link href="/leetcode/valid_parentheses">Valid Parentheses</Link>
    <br/>
    <Link href="/leetcode/merge_two_sorted_lists">Merge Two Sorted Lists</Link>
    <br/>
    <Link href="/leetcode/best_time_to_buy_and_sell_stock">Best Time to Buy and Sell Stock</Link>
    <br/>
    <Link href="/leetcode/valid_palindrome">Valid Palindrome</Link>
    <br/>
    <Link href="/leetcode/invert_binary_tree">Invert Binary Tree</Link>
    <br/>
    <Link href="/leetcode/valid_anagram">Valid Anagram</Link>
    <br/>
    <Link href="/leetcode/binary_search">Binary Search</Link>
    <br/>
    <Link href="/leetcode/flood_fill">Flood Fill</Link>
    <br/>
    <Link href="/leetcode/binary_search">Balanced Binary Tree</Link>
    </>
  )
}
