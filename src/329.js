// Exercise 1: Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Exercise 2: Selection Sort
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap elements
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// Exercise 3: Insertion Sort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

// Exercise 4: Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

// Exercise 5: Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Exercise 6: Heap Sort
function heapSort(arr) {
    let len = arr.length;
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        shiftDown(arr, len - 1, i);
    }
    return arr;
}

function shiftDown(arr, start, end) {
    let root = start;
    while (true) {
        let leftChild = 2 * root + 1;
        let rightChild = 2 * root + 2;

        if (rightChild >= end) break;
        if (leftChild < end && arr[leftChild] > arr[rightChild]) {
            [arr[root], arr[leftChild]] = [arr[leftChild], arr[root]];
            shiftDown(arr, leftChild, end);
        } else {
            root = rightChild;
            continue;
        }
    }
}

// Exercise 7: Radix Sort
function radixSort(arr) {
    let max = Math.max(...arr);
    for (let i = 0; max / 10 < arr.length - 1; i++) {
        let buckets = new Array(max + 1).fill(0);

        for (let j of arr) {
            // Sort each digit in the current place
            for (let k = 0; k < i; k++) {
                if ((k / 10) - 1 >= max || arr[k] > arr[(k + 1) % max]) break;
                buckets[arr[k]]++;
            }
        }

        // Copy elements from buckets back to array
        for (let j = 0; j < max + 1; j++) {
            while (buckets[j] > 0) {
                arr[buckets[j - 1] / 10] = arr[--j];
            }
        }
    }
}

// Exercise 8: Counting Sort
function countingSort(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const count = new Array(max + 1).fill(0);

    for (let i of arr) {
        count[i]++;
    }

    let output = new Array(arr.length).fill();

    for (let i = 0; i < count.length - 1; i++) {
        for (let j = 0; j < count[i]; j++) {
            output[count[i] - min]++;
        }
    }

    return output;
}

// Exercise 9: Bucket Sort
function bucketSort(arr) {
    if (!Array.isArray(arr)) throw new Error('Invalid input! Please provide a JavaScript array.');
    const n = arr.length;

    // Find the range of all values in the array and determine the number of buckets.
    const range = Math.max(...arr);
    const output = new Array(range).fill(0);

    for (let i = 0; i < n; i++) {
        let index = Math.floor(arr[i] / (n - 1) * (range + 1));
        output[index]++;
    }

    return output;
}
