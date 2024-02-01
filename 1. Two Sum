function twoSum(numbers: number[], target: number): number[] {
    const numberMap = new Map()
    // []
    // [{"3" : 0}]
    // [{"3" : 0}, {"2" : 1}]
    
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        //3
        //2
        //4
        
   
        const difference = target - number
        // 6 - 3 = 3
        // 6 - 2 = 4
        // 6 - 4 = 2
    
        if (numberMap.has(difference)) return [numberMap.get(difference), i]
        // false 
        // false
        // true => [1, 2]
        
        numberMap.set(number, i)
        // set(3, 0)
        // set(2, 1)
    }
};
