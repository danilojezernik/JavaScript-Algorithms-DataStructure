// *** Algorithms: Bubble Sort ***
// Preverja se po vrednostih

function bubbleSort(array) {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}

console.log(bubbleSort(['a', 'c', 'z', 'g', 's', 'i']))
console.log(bubbleSort([22, 1, 3, 8, 4, 2]))

// *** Algorithms: Selection Sort ***
// Preverja se po indexih

function selectionSort(array) {
    let min
    for (let i = 0; i < array.length - 1; i++) {
        min = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) min = j
        }
        if (i !== min) {
            let temp = array[i]
            array[i] = array[min]
            array[min] = temp
        }
    }
    return array
}

console.log(selectionSort(['a', 'c', 'z', 'g', 's', 'i']))
console.log(selectionSort([22, 1, 3, 8, 4, 2]))

// *** Algorithms: Insertion Sort ***

function insertionSort(array) {
    let temp
    for (let i = 1; i < array.length; i++) {
        let j;
        temp = array[i]
        for (j = i - 1; array[j] > temp && j > -1; j--) {
            array[j + 1] = array[j]
        }
        array[j + 1] = temp
    }
    return array
}

console.log(insertionSort(['a', 'c', 'z', 'g', 's', 'i']))
console.log(insertionSort([22, 1, 3, 8, 4, 2]))


// *** Algorithms: Merge function ***'
// Merge two arrays and sort them'

function merge(array1, array2) {
    let combined = []
    let i = 0
    let j = 0
    while(i < array1.length && j < array2.length) {
        if(array1[i] < array2[j]) {
            combined.push(array1[i])
            i++
        } else {
            combined.push(array2[j])
            j++
        }
    }
    while(i < array1.length) {
        combined.push(array1[i])
        i++
    }
    while(j < array2.length) {
        combined.push(array2[j])
        j++
    }
    return combined
}

console.log(merge([1,3,7,8], [2,4,5,6]))

// *** Algorithms: Merge sort ***

function mergeSort(array) {
    if(array.length === 1) return array
    let mid = Math.floor(array.length/2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([3,1,4,2,5,77,44,32]))