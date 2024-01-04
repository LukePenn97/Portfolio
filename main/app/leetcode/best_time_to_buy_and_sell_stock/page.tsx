"use client";
import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";

export default function best_time_to_buy_and_sell_stock() {
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
    <h1>Best Time to Buy and Sell Stock</h1>
    <br/>
    <div>This one I remember you need something called a sliding window</div>
    <div>First attempt:</div>
    <br/>
    {codeBlock1(`/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 1;
    let min = 0;
    let profit = 0;
    for (i = 0; i < prices.length; i++) {
        if (prices[i] < prices[min]) {
            min = i;
        }

        if (prices[i] > prices[max] && i > min) {
            max = i
            if (prices[max] - prices[min] > profit) {
                profit = prices[max] - prices[min];
            }
        }

        if (prices[i] - prices[min] > profit){
            max = i;
            profit = prices[i] - prices[min];
        }
    }
    return profit
};`, 
      'javascript',
      true)}
      <br/>
      <div>This one I got by myself after fiddling with the if statements</div>
      <div>Basically my structure is as follows:</div>
      <ul>
        <li>If the current price is less than the min price, set the min value</li>
        <li>Next if the current price is bigger than the max price, and the index is greater than the index of the min price element, set the max price</li>
        <li>The max is initialized to the second [1] element in the array</li>
        <li>If we set the max price, we also calculate the profit and store it</li>
        <li>Lastly, we keep the old max seperate, and do another check if the current price minus the min price is greater than the current profit</li>
        <li>If yes, set the profit and the max. This avoids errors where the price goes up, back down, and then up again</li>
      </ul>
      <br/>
    </>
  )
}