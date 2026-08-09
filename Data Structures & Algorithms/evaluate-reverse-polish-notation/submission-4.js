class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        const operators = new Set(["+", "-", "*", "/"]);

        for (let token of tokens) {
            if (operators.has(token)) {
                let b = stack.pop();
                let a = stack.pop();
                let value;
                if (token === "+") value = a + b;
                else if (token === "-") value = a - b;
                else if (token === "*") value = a * b;
                else value = Math.trunc(a / b); // truncate right here, per operation
                stack.push(value);
            } else {
                stack.push(parseInt(token, 10)); // parse once, on push
            }
        }
        return stack.pop();
    }
}