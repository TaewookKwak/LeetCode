// function lengthOfLastWord(s: string): number {
//     if (s.length === 0) {
//         return 0
//     }
//     const trimed = s.trim()
//     const splited = trimed.split(" ")
//     const length = splited[splited.length - 1].length
//     return length

// };

function lengthOfLastWord(s: string): number {
    let count = 0

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            count++
        } else if (count > 0) {
            return count
        }
    }
    return count 


}
