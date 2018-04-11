/*
* Given an array of unsorted positive integers, write a function that
* finds runs of 3 consecutive numbers (ascending or descending) and returns
* the indices where such runs begin. If no such runs are found, return null.
*/


const findConsecutiveRuns = (arr) => {
    const filteredIndex = [];
    for (let i = 0; i < arr.length; i++) {
        /* Confirm we have 2 more element in sequence to test against */
        if ((arr.length - i) > 2) {
            /* Check if decending sequence */
            const decending = (arr[i] == arr[i + 1] - 1) && (arr[i] == arr[i + 2] - 2);

            /* Check if ascending sequence */
            const ascending = (arr[i] == arr[i + 1] + 1) && (arr[i] == arr[i + 2] + 2);

            if (decending || ascending){
                filteredIndex.push(i)
            }
        }
    }

    return (filteredIndex.length) ? filteredIndex : null;
}


console.log(findConsecutiveRuns([1, 2, 3, 5, 10, 9, 8, 9, 10, 11, 7]));
