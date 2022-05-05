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
   - 




