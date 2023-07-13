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
- ### Segement Tree
  -  Choosing what value to be stored in the nodes according to the problem definition
  -  What should the merge operation do
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
      - Create a minHeap of edges with compare func on their weights(costs) or can sort edges based on their weights.
      - Keep on poping out edges from minHeap / sorted array till it has edges and count > 0 
        - (where count = n-1 as MST only requires n-1 edges to connect all n vertices)
        - If popped out edges are not connected then connect them using UnionFind DS
        - Keep adding weights of newly connected edges
        - count --
        
    - [Prim's Algorithm](https://github.com/akshaykhanna/DSA/blob/main/PrimAlgo.js)
  - #### Single Source Shortest path
    - [Dijkstra’s algorithm](https://github.com/akshaykhanna/DSA/blob/main/DijkstraAlgo.js): Single source shortest path in a graph with non-negative weights ([LC Problem](https://leetcode.com/problems/network-delay-time/)).
      - Create adjList if allready not there
      - Create distances array for nodes with default value as Infinity
      - Create minHeap with compareFunc on smaller distances
      - Intialize k (start node) distance as 0 & add it to minHeap
      - Loop till minHeap is not empty
        - currVertex = minHeap.pop()
        - Loop on adjVertices of currVertex
          - if distance[adjVertice] > distance[currVertex] + time
            -  distance[adjVertice] =  distance[currVertex] + time
            -  minHeap.add(adjVertice)
      -  Return output max(distance) == Infinity ? -1 : max(distance)
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
  - Template 1: 
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
   - Template 2 (a.k.a. IGS)
      - isValidState(state)
        - Validates whether the given state is the final solution
      - getCandiates(state): 
        - Find list of candidates which can be use to construct the next state based on problem constraint
      - search()
        - Calls isValidState() method to check if state is a valid solution
        - If valid then make deep copy of it & return if required
        - Then loop on get candidates (getCandiates())
          - Add candidate to state & recursively call search() again
          - Back to original state : do backtracking so as to find other solutions
      - solve()
        - Starts with empty solutions[] list & empty state
        - Then search(solutions, state)
        - Return solutions[]
        - This function problem expects us to write
    - Template 2 Code
    ```
        function is_valid_state(state) {
            // check if it is a valid solution
            return True;
        }

        function get_candidates(state) {
            return [];
        }

        function search(state, solutions) {
            if is_valid_state(state) {
                solutions.append(state.copy());
                // return 
            }

            for candidate in get_candidates(state) {
                state.add(candidate);
                search(state, solutions);
                state.remove(candidate);
            }
        }

        function solve() {
              solutions = [];
              state = new Set();
              search(state, solutions);
              return solutions;
        }
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
  - **Memoization Recipie**
    - Recipie
      - Make it work 
        - Visualize the problems as tree
        - Find the base case
        - Implement tree using recursion
        - Test it
       - Make it efficent
         - Add a memo object
         - Add base case to return memo object
         - Store return values in memo
    - ##### Tip: Always try to implement brute force first (make it work ) then only memoize it (make it efficent)
   - **Tabulation Recipie**
      - Visualize problem as table
      - Size the table as problem inputs
      - Intialize table with default values
      - Seed the trivial answer into the table
      - Iterate thorugh the table
      - Fill further (or current)  position based on current (or previous) postions
      - Return the final result from last (or desired) index of table

  - #### When to use DP
    -  Problem will ask for the optimum value (maximum or minimum) of something
    -  Future "decisions" depend on earlier decisions
  - Buy & Sell Stock
    - Single day to buy one stock and choosing a different day in the future to sell that stock. ([Problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) : [Solution](https://github.com/akshaykhanna/DSA/blob/main/BuyAndSellStockWithOneTransaction.js))
    - You can buy & sell any number of times however cannot buy & sell on the same day. ([Problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) : [Solution](https://github.com/akshaykhanna/DSA/blob/main/BuyNSellStockWithAnyNumberTransactions.js))
    - With max 2 transactions. ([Problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/): [Solution](https://github.com/akshaykhanna/DSA/blob/main/BuyNSellStockWithMax2Trans.js))

## [Summary](https://github.com/akshaykhanna/DSA/blob/main/Summary.md)
