class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (let i = 0; i < tokens.length; i++) {
            let element = tokens[i];
            console.log(stack)
            console.log(element)
            if (element === "+") {
                let elementB = stack.pop();
                let elementA = stack.pop();
                let value = this.add(elementA, elementB);
                stack.push(value);
            } else if (element === "-") {
                let elementB = stack.pop();
                let elementA = stack.pop();
                let value = this.substract(elementA, elementB);
                stack.push(value);
            } else if (element === "*") {
                let elementB = stack.pop();
                let elementA = stack.pop();
                let value = this.multiply(elementA, elementB);
                stack.push(value);
            } else if (element === "/") {
                let elementB = stack.pop();
                let elementA = stack.pop();
                let value = this.divide(elementA, elementB);
                stack.push(value);
            } else {
                stack.push(element);
            }
        }
        return Math.trunc(stack.pop());
    }

    add(a, b) {
        return parseInt(a) + parseInt(b);
    }

    substract(a, b) {
        return parseInt(a) - parseInt(b);
    }

    multiply(a, b) {
        return parseInt(a) * parseInt(b);
    }

    divide(a, b) {
        return parseInt(a) / parseInt(b);
    }
}
