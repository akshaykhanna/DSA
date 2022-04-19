/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let out = 0;
    
    function backtrack(row=0, cols=new Set(), diagonals = new Set(), antiDiagonals = new Set()) {
        // check if found solution
        if(row === n) {
            out ++;
            return;
        }
        
        // iterate all possible candiates
        for(let col=0; col<n; col++) {
           const [currDiagonal, currAntiDiagonal] = [row-col, row+col];
            
           // is not Valid
           if(cols.has(col) || diagonals.has(currDiagonal) || antiDiagonals.has(currAntiDiagonal)) {
               continue;
           }
            
           // place
           cols.add(col);
           diagonals.add(currDiagonal);
           antiDiagonals.add(currAntiDiagonal);
            
           // backtrack / explorer further
           backtrack(row+1,cols, diagonals, antiDiagonals);
           
           // remove 
           cols.delete(col);
           diagonals.delete(currDiagonal);
           antiDiagonals.delete(currAntiDiagonal);
           
        } 
    }
    
    backtrack(0);
    return out;
}
