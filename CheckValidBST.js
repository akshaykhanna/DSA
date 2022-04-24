/**
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

function isValidBST(root, maxLeft = -Infinity, maxRight = Infinity)
    if(root) {
        if(root.val <= maxLeft || maxRight <= root.val) 
            return false;
        return isValidBST(root.left, maxLeft, root.val) 
            && isValidBST(root.right, root.val, maxRight); 
    }
    return true;
};
