// Write a function to remove duplicates from a sorted array. Use any language of your choice.

const ar = [1, 1, 1, 2, 2, 3, 4, 5, 5];

function removeDuplicates(arr) {
    if (arr.length === 0) return arr;

    let uniqueIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[uniqueIndex]) {
            uniqueIndex++;
            arr[uniqueIndex] = arr[i];
        }
    }

    return arr.slice(0, uniqueIndex + 1);
}

const result = removeDuplicates(ar);
console.log(result);

//Write the following function, that splits passed arr into two arrays, the first containing values smaller than the value and the second array containing values larger than the value.

const arr = [1, 4, 2, 5, 3, 7];

function splitArray(arr, value) {
    const smaller = [];
    const larger = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= value) {
            smaller.push(arr[i]);
        } else {
            larger.push(arr[i]);
        }
    }

    return [smaller, larger];
}

const [smallerArray, largerArray] = splitArray(arr, 2);
console.log(smallerArray); 
console.log(largerArray);   


//Write a function mergeSorted which merges two sorted arrays into a sorted array with the time complexity of O(n) and space complexity of O(n).

const ab = [1, 3, 5];
const ba = [2, 4];

function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let ptr1 = 0;
    let ptr2 = 0;

    while (ptr1 < arr1.length && ptr2 < arr2.length) {
        if (arr1[ptr1] < arr2[ptr2]) {
            result.push(arr1[ptr1]);
            ptr1++;
        } else {
            result.push(arr2[ptr2]);
            ptr2++;
        }
    }
    while (ptr1 < arr1.length) {
        result.push(arr1[ptr1]);
        ptr1++;
    }

    while (ptr2 < arr2.length) {
        result.push(arr2[ptr2]);
        ptr2++;
    }

    return result;
}

const mergedArray = mergeSortedArrays(ab, ba);
console.log(mergedArray);
