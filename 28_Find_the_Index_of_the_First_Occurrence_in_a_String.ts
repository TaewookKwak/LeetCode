function strStr(haystack: string, needle: string): number {
    const h = haystack.length;
    const n = needle.length;

    for (let i = 0; i < h; i++) {
        //substring(indexStart, indexEnd) 
        // indexStart : The index of the first character to include in the returned substring.
        // indexEnd : The index of the first character to exclude from the returned substring.
        if(haystack.substring(i, i + n) === needle) {
            return i;
        }
    }

    return -1;
};
