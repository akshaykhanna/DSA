/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    if(numCourses === 0)
        return [];
    if(prerequisites.length === 0) {
        return  new Array(numCourses).fill(0).map((p,ind) => ind);
    }
    
    let [out, adjList, inDegree, queue] = [[], {}, new Array(numCourses).fill(0), []];
    for(let prequiste of prerequisites) {
        const [course, preqCourse] = prequiste;
        if(!(preqCourse in adjList)) {
            adjList[preqCourse] = [];
        }
        adjList[preqCourse].push(course);
        inDegree[course] ++;
    }
    
    // add vertex with Zero degree in queue
    queue.push(...inDegree.map((p,ind) => p === 0 ? ind : -1).filter(p => p !== -1));
    
    while(queue.length > 0) {
        const zeroVertex = queue.shift();
        out.push(zeroVertex);
        const adjVertices = adjList[zeroVertex];
        for(let i=0; adjVertices && i<adjVertices.length; i++) {
            const adjVertex = adjVertices[i];
            inDegree[adjVertex] --;
            if(inDegree[adjVertex] === 0) {
                queue.push(adjVertex);
            }
        }
    }
    return out.length === numCourses ? out : [];
};
