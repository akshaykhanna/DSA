/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {  
    var lca  = null;
    function helper(currNode, p, q) {
        if(!currNode)
            return false;
        const left = helper(currNode.left, p, q) ? 1 : 0;
        const right = helper(currNode.right, p, q) ? 1 : 0;
        const mid = (currNode === p || currNode === q) ? 1 : 0;
        if(mid+left+right >= 2) {
            lca = currNode;
            return;
        }
        return (mid + left + right) > 0;
    };
    helper(root, p, q);
    return lca;
};
