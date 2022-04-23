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
 * @return {number[][]}
 */
function levelOrder(root) {
    if(!root) return [];
    
    let [queue, out] = [[root], []];
    
    while(queue.length > 0) {
        let [nodesInCurrLevel, levelOut] = [queue.length, [], 0]
        while(nodesInCurrLevel > 0) {
            const node = queue.shift();
            levelOut.push(node.val);
            nodesInCurrLevel --;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        // console.log(levelOut);
        out.push(levelOut);
    }
    return out;
};
