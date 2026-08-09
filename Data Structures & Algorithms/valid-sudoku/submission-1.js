class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = [];
        let columns = [];
        let boxes = [];

        for (let i = 0; i < 9; i++) {
            rows.push([]);
            columns.push([]);
            boxes.push([]);
        }

        // Traverse row
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                // Traverse row
                rows[i].push(board[i][j]);
                // Traverse column
                columns[i].push(board[j][i]);
                // Traverse boxes
                let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                boxes[boxIndex].push(board[i][j]);
            }
        }

        for (let i = 0; i < 9; i++) {
            // Check row i, column i, and box i
            if (!this.isValidGroup(rows[i])) return false;
            if (!this.isValidGroup(columns[i])) return false;
            if (!this.isValidGroup(boxes[i])) return false;
        }

        return true; // Everything passed!
    }

    isValidGroup(group) {
        let seen = new Set();

        for (let cell of group) {
            // Ignore empty spots
            if (cell === '.') continue;

            // If we've already seen this number in the same group, it's invalid!
            if (seen.has(cell)) {
                return false;
            }

            // Otherwise, mark this number as seen
            seen.add(cell);
        }

        return true; // No duplicates found
    }
}
