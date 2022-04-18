# Data Structures and Algorithms (DSA)
Arsenal of commonly use DSA in JS, helpfull in solving MAANG & top tech interview problems.

- ### [Heap](https://github.com/akshaykhanna/DSA/blob/main/Heap.js)
- ### [Trie](https://github.com/akshaykhanna/DSA/blob/main/Trie.js)
- ### [Union Find](https://github.com/akshaykhanna/DSA/blob/main/UnionFind.js) (aka Disjoint Set)
  -  Check wether nodes are connected or not
  -  Find(index): Returns root of node index
  -  Union(ind1, ind2): Joins node at ind1 & ind2
  -  Connected(x,y): Returns true if nodes are connected (have same root)   
- ### Construct Minimum Spanning Tree (connect all nodes)
  #### Minimum spanning tree
  A **spanning tree** is a connected subgraph in an undirected graph where all vertices are connected with the minimum number of edge.
  A **minimum spanning tree** is a spanning tree with the minimum possible total edge weight in a “weighted undirected graph”.
  #### LC Problem: [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)
  - [Kruskal’s algorithm](https://github.com/akshaykhanna/DSA/blob/main/KruskalAlgo.js)
  - [Prim's Algorithm](https://github.com/akshaykhanna/DSA/blob/main/PrimAlgo.js)
- ### Single Source Shortest path
  - [Dijkstra’s algorithm](https://github.com/akshaykhanna/DSA/blob/main/DijkstraAlgo.js): Single source shortest path in a graph with non-negative weights ([LC Problem](https://leetcode.com/problems/network-delay-time/)).
  - Bellman-Ford algorithm: Single source shortest path in a graph with with any weights, including negative weights
- ### Topological Sort: Kahn's Algo
  


