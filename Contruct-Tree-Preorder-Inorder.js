/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const inorderIndexes = {};
    inorder.forEach((value, index) => inorderIndexes[value] = index);
    function helper(inL, inR) {
        if(inL<=inR) {
            const tree = new TreeNode(preorder.shift());
            const index = inorderIndexes[tree.val];
            tree.left = helper(inL, index-1);
            tree.right = helper(index+1, inR);
            return tree;
        }
        return null;
    }
    return helper(0, inorder.length-1);
};
