class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let selectedRow = null;
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][matrix[i].length - 1] >= target) {
                selectedRow = i;
                break;
            }
        }

        if (selectedRow === null) {
            return false;
        }

        let arr = matrix[selectedRow];
        
        if (arr.lenth === 1) {
            if (arr[0] === target) {
                return true
            }
            return false
        }

        let low = 0;
        let high = arr.length - 1;
        let mid = null;

        while (high >= low) {
            mid = Math.floor((low + high) / 2);
            if (arr[mid] == target) {
                return true;
            }

            // If element is smaller than mid, then
            // it can only be present in left subarray
            if (arr[mid] > target) {
                high = mid - 1;
            }

            // Else the element can only be present
            // in right subarray
            else {
                low = mid + 1;
            }
        }

        return false;
    }
}
