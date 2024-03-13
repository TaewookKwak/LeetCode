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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
        return true;
    } // Node 둘 다 없으면 true
    if (!p || !q) {
        return false;
    } // Node 하나 만 없으면 false
    if (p.val !== q.val) {
        return false;
    } // 현제 value 가 일치하지 않으면 false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right); 
    // 일치하면 left, right 비교
};
