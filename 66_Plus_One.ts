function plusOne(digits: number[]): number[] {


    for (let i = digits.length; i > 0; i--) {
        if (digits[i - 1] === 9) {
            digits[i - 1] = 0
        } else {
            digits[i - 1]++
            return digits
        }
    }

    digits.length = digits.length + 1
    digits[digits.length - 1] = 0
    digits[0] = 1



    return digits
};
