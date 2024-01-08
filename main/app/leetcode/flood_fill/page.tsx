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
    <h1>Flood Fill</h1>
    <br/>
    <div>Instructions:</div>
    <br/>
    <div>An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.</div>
    <br/>
    <div>I got really close with this one, but I just couldn't pass one edge case and I have no idea why</div>
    <br/>
    {codeBlock1(`/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    
    startingColor = image[sr][sc]
    console.log("Starting color: " + startingColor)
    image[sr][sc] = color;
    console.log("right is undefined: " + (image[sr][sc+1] === undefined) + ", right not equal to starting color: " + (image[sr][sc+1] != startingColor) + ", right is equal to color: " + (image[sr][sc+1] == color));
    if ((image[sr][sc+1] === undefined || image[sr][sc+1] !== startingColor || image[sr][sc+1] == color) && (image[sr][sc-1] === undefined|| image[sr][sc-1] !== startingColor || image[sr][sc-1] == color) && (image[sr-1] === undefined || image[sr-1][sc] !== startingColor || image[sr-1][sc] == color) && (image[sr+1] === undefined || image[sr+1][sc] !== startingColor || image[sr+1][sc] == color)) {
        console.log("returning. right is undefined: " + (image[sr][sc+1] === undefined) + ", right not equal to starting color: " + (image[sr][sc+1] != startingColor) + ", right is equal to color: " + (image[sr][sc+1] == color));
        console.log("testing")
        return image;
    }
    if (image[sr][sc+1]) {
        console.log("right: " + sr + ", " + (sc+1) + ", " + startingColor + ", " + image[sr][sc+1])
        if (image[sr][sc+1] == startingColor && image[sr][sc+1] != color) {
            
            floodFill(image, sr, sc+1, color)
        }
    }
    if (image[sr][sc-1]) {
        if (image[sr][sc-1] == startingColor && image[sr][sc-1] != color) {
            console.log("left: " + sr + ", " + (sc-1))
            floodFill(image, sr, sc-1, color)
        }
    }
    if (image[sr-1]) {
        if (image[sr-1][sc] == startingColor && image[sr-1][sc] != color) {
            console.log("down: " + (sr-1) + ", " + sc)
            floodFill(image, sr-1, sc, color)
        }
    }
    if (image[sr+1]) {
        if (image[sr+1][sc] == startingColor && image[sr+1][sc] != color) {
            console.log("up: " + (sr+1) + ", " + sc) 
            floodFill(image, sr+1, sc, color)
        }
    }
    return image
};`, 
      'javascript',
      true)}
      <br/>
    </>
  )
}