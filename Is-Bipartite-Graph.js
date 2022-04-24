/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let [n, color, stack] = [graph.length, {}, []];
    
    for(let i=0; i<n; i++) {
        if(!(i in color)) {
            stack = [i];
            color[i] = 0;     
            while(stack.length > 0) {
                const node = stack.pop();
                for(let adjNode of graph[node]) {
                    if(!(adjNode in color)) {
                        color[adjNode] = color[node]^1;
                        stack.push(adjNode);
                    } else if(color[node] === color[adjNode]) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
};
