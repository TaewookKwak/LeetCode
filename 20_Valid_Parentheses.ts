function isValid(s: string): boolean {
    const openBracket = ["(", "{", "["];
    const bracketPair = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    const stack : string[] = []

    for (let bracket of s) {
        if (openBracket.includes(bracket)) stack.push(bracket)
        else {
            if (stack[stack.length - 1] === bracketPair[bracket]) stack.pop()
            else return false
        }
    }
    return stack.length === 0

}
