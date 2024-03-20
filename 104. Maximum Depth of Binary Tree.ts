/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0
    let counter = 0
   return nodeDown(root, counter)
};

function nodeDown(root: TreeNode | null, counter: number): number {
    if (root === null) return counter
   


    counter++;
    return Math.max(nodeDown(root.left,counter),nodeDown(root.right,counter) )
}
