## Heap 
- Constructor
    - Size
    - compareFunc
    - List = []
- Relationship
    - parent = floor(i-1)/2
    - Left = I*2+1
    - Right = I*2+2
- Add
    - Add at end
    - ShiftUp
        - compare(parent, current)
            - Recursive swap till top
- Pop
    - From top
    - Swap top with bottom
    - Remove from end
    - Shift down
        - Balance top with  its children
        - FindHigherChild = compare(left, right)
        - swapWithHigherChild
    - Return remove element


## Trie
- Construtor
    - Keys
    - isEnd
- Insert
    - Word.len === 0  
        - isEnd = true
        - Return
    - Ch = word[0]
    - Return this.keys[ch].insert(word.substr(1))
- Search
    -  Word.len === 0  
        - Return isEnd 
    - Ch = word[0]
    - !(Ch in keys)
        - Return false;
    - Return this.keys[ch].search(word.substr(1)
- startsWith
    -  Word.len === 0  
        - Return true 
    - Ch = word[0]
    - !(Ch in keys)
        - Return false;
    - Return this.keys[ch].startsWith(word.substr(1)

## Tree
- ### Level order traversal
  - Queue
  - NodesForAllLevels = []
  - Outer loop
    - nodesInCurrLevel = queue.length
    - nodesOFALevel = []
    - Inner Loop: nodesInCurrLevel > 0
      - node = dequeue (queue.shift)
      - nodesInCurrLevel.add(node)
      - nodesInCurrLevel --;
      - queue.push(node->[left + right Child])
    - NodesForAllLevels.push(nodesOFALevel)
   - return NodesForAllLevels;
-  ### Construct tree using inorder + preorder
   - create inorderIndexesMap 
   - func recursive(inorderLeft=0, inorderRight = inorder.len - 1)
     - inorderLeft > inorderRight -> return null;
     - root = new TreeNode(preorder.shift);
     - rootInd = inorderIndexesMap[tree.val)
     - roor.left = recursive(inorderLeft, rootInd-1)
     - roor.right = recursive(rootInd+1, inorderRight)
   - return recursive()
-  ### LCA
   - Lowest node of p & q of which both are descendants (can also be 1 of them)
   - lca = null
   - func helper(root, p, q)
      - !root -> false
      - left = helper(root.left, p,q) ? 1 : 0;
      - right = helper(root.right, p,q) ? 1 : 0;
      - mid = (root === p || root ===q) ? 1 : 0;
      - mid+left+right >= 2 -> lca = root; return ;
    - helper(root,p,q)
    - return lca
 
 ## Graph
 - ### UnionFind
   - roots = [].fill(index)
   - rank = [].fill(1)
   - find -> return root of node
     - find(ind)
       - while(ind !== root[ind])
         -  ind = root[ind];
       - return ind 
     -  findWithPathCompression(ind)
       - if(ind === root[ind])
         -  return ind
       - return root[ind] =  findWithPathCompression(root[ind])
   - union -> join 2 nodes
     - union(n1,n2)
       - [root1,root2] = [find(n1), find(n2)]
       - root1 !== root2
         - this.roots[root2] = root1;
     - unionByRank(n1,n2)
       - [root1,root2] = [find(n1), find(n2)]
       - root1 !== root2
           - rank[root1] > rank[root2] -> this.roots[root2] = root1;
           - rank[root1] < rank[root2] -> this.roots[root1] = root2;
           - rank[root1] === rank[root2] -> this.roots[root2] = root1; this.rank[root1] += 1;
   - connected: check two nodes are connected or not (have same root or not)
     -  find(root1) === find(root2)
     
 
       




