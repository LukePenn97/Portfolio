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
    </>
  )
}
