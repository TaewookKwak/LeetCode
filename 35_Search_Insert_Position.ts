function searchInsert(nums: number[], target: number): number {
    let index = 0;
    if(nums.length <= 0) return index;
    nums.forEach((num,i) => {
        if(target === num) index = i
        else if(target > num ) index =  i + 1
    })
    return index
};
