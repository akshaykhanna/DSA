# Data Structures and Algorithms (DSA)
Most commonly used DSA for solving FAANG / MAANG / top tech interview problems.

- ### Array
  - **InPlace**: Whenever trying to solve an array problem in-place, always consider the possibility of iterating backwards instead of forwards through the array. It can make it a lot easier.
- ### 2-D Array
  - Two coordinates are on the same diagonal if and only if r1 - c1 == r2 - c2
- ### [Heap](https://github.com/akshaykhanna/DSA/blob/main/Heap.js)
- ### [Trie](https://github.com/akshaykhanna/DSA/blob/main/Trie.js)
- ### Tree
  - [Level Order Traversal](https://github.com/akshaykhanna/DSA/blob/main/LevelOrderTraversalTree.js)
  - Preorder (Top Down)
  - Postorder (Bottom's Up)
  - Construct a [tree using inorder & preoder ](https://github.com/akshaykhanna/DSA/blob/main/Contruct-Tree-Preorder-Inorder.js)as input for it.
  - The [**lowest common ancestor (LCA)**](https://github.com/akshaykhanna/DSA/blob/main/LCA.js) is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).
  - [Serailize Deserailize tree](https://github.com/akshaykhanna/DSA/blob/main/Seralize-Deseralize-Tree.js)
- ### Graph
  - #### [Union Find](https://github.com/akshaykhanna/DSA/blob/main/UnionFind.js) (aka Disjoint Set)
    -  Check wether nodes are connected or not
    -  Find(index): Returns root of node index
    -  Union(ind1, ind2): Joins node at ind1 & ind2
    -  Connected(x,y): Returns true if nodes are connected (have same root)   
  - #### Construct Minimum Spanning Tree (connect all nodes)
    ##### Minimum spanning tree
    A **spanning tree** is a connected subgraph in an undirected graph where all vertices are connected with the minimum number of edge.
    A **minimum spanning tree** is a spanning tree with the minimum possible total edge weight in a “weighted undirected graph”.
    ##### LC Problem: [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)
    - [Kruskal’s algorithm](https://github.com/akshaykhanna/DSA/blob/main/KruskalAlgo.js)
    - [Prim's Algorithm](https://github.com/akshaykhanna/DSA/blob/main/PrimAlgo.js)
  - #### Single Source Shortest path
    - [Dijkstra’s algorithm](https://github.com/akshaykhanna/DSA/blob/main/DijkstraAlgo.js): Single source shortest path in a graph with non-negative weights ([LC Problem](https://leetcode.com/problems/network-delay-time/)).
    - Bellman-Ford algorithm: Single source shortest path in a graph with with any weights, including negative weights
  - #### Topological Sort: Kahn's Algo
    - [LC Problem: Course Schedule](https://leetcode.com/problems/course-schedule-ii/)
    - Solution using [topological Sort](https://github.com/akshaykhanna/DSA/blob/main/TopologicalSort.js)
    - [LC Problem: Alien Dictionary](https://leetcode.com/problems/alien-dictionary/)
  - #### Bipartite Graph
    -   A graph is **bipartite** if the nodes can be partitioned into two independent sets A and B such that every edge in the graph connects a node in set A and a node in set B
    -   [Problem](https://leetcode.com/problems/is-graph-bipartite/) : [Solution](https://github.com/akshaykhanna/DSA/blob/main/Is-Bipartite-Graph.js)
- ### Divde and Conquor (D&C)
  - **Divide**: Divide the problem into a set of subproblems
  - **Conquer**: Solve each subproblem recursively.
  - **Combine**: Combine the results of each subproblem.
  - [Merge sort](https://github.com/akshaykhanna/DSA/blob/main/MergeSort.js)
- ### Backtracking
  - Algo for finding all (or some) solutions to some computational problems which incrementally builds candidates to the solution and abandons a candidate ("backtracks") as soon as it determines that the candidate cannot lead to a valid solution.
  - **Pruning**: For backtracking to be efficient, we must **prune** dead or redundent branches of the search space whenever possible. 
  - Template: 
  ```
    def backtrack(candidate):
        if find_solution(candidate):
            output(candidate)
            return

        # iterate all possible candidates.
        for next_candidate in list_of_candidates:
            if is_valid(next_candidate):
                # try this partial candidate solution
                place(next_candidate)
                # given the candidate, explore further.
                backtrack(next_candidate)
                # backtrack
                remove(next_candidate)
   ```
  - N-Queens: no. of distinct ways to place n queens on n*n board
    - [Problem](https://leetcode.com/problems/n-queens-ii/)
    - [Solution](https://github.com/akshaykhanna/DSA/blob/main/Backtracking_N-Queens.js) 
- ### Dynamic Programming (DP)
  - Used for problem which can be further broken down into "overlapping subproblems"
  - The problem has an "optimal substructure" means an optimal solution can be formed from the overlapping subproblems of the original problem.
  - 2 ways to implement DP are:-
    - Bottom-up, also known as tabulation (Uses iteration)
    ```
    F = array of length (n + 1)
    F[0] = 0
    F[1] = 1
    for i from 2 to n:
      F[i] = F[i - 1] + F[i - 2]
    ```
    - Top-down, also known as memoization (Uses recursion)
    ```
    memo = hashmap
    Function F(integer i):
      if i is 0 or 1: 
          return i
      if i doesn't exist in memo:
          memo[i] = F(i - 1) + F(i - 2)
      return memo[i]
    ```
  - **Memoizing** a result means to store the result of a function call, usually in a hashmap or an array, so that when the same function call is made again, we can simply return the memoized result instead of recalculating the result.
  - #### When to use DP
    -  Problem will ask for the optimum value (maximum or minimum) of something
    -  Future "decisions" depend on earlier decisions
  - Buy & Sell Stock
    - Single day to buy one stock and choosing a different day in the future to sell that stock. ([Problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) : [Solution](https://github.com/akshaykhanna/DSA/blob/main/BuyAndSellStockWithOneTransaction.js))
    - You can buy & sell any number of times however cannot buy & sell on the same day. ([Problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) : [Solution](https://github.com/akshaykhanna/DSA/blob/main/BuyNSellStockWithAnyNumberTransactions.js))
    - With max 2 transactions. ([Problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/): [Solution](https://github.com/akshaykhanna/DSA/blob/main/BuyNSellStockWithMax2Trans.js))

## [Summary](https://github.com/akshaykhanna/DSA/blob/main/Summary.md)
