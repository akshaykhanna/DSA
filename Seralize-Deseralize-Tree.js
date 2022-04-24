/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var NULL_VAL = -9999;
var sep = ',';
var addSepIfNotEmpty = s => s.length > 0 ? ',': '';

function serialize(root, s = '') {
    var s = '';
    function helper(root) {
       if(!root) {
        s += addSepIfNotEmpty(s) + NULL_VAL;
        return;
       }
       s += addSepIfNotEmpty(s) + root.val;
       helper(root.left)
       helper(root.right)
    }
    helper(root);
    // console.log(s);
    return s;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
    function helper(nodes) {
        if(nodes.length == 0) {
            return null;
        }
        if(+nodes[0] == NULL_VAL) {
            nodes.shift();
            return null;
        }
        const val = nodes.shift();
        const treeNode = new TreeNode(val);
        treeNode.left = helper(nodes);
        treeNode.right = helper(nodes);
        return treeNode;
    }
    const out = helper(data.split(sep)); 
    return out;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
