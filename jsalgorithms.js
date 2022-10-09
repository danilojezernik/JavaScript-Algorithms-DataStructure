// *** Algorithms: Bubble Sort ***

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


// *** Algorithms: Pivot function ***

function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
}

function pivot(array, pivotIndex=0, endIndex=array.length-1) {
    let swapIndex = pivotIndex
    for(let i= pivotIndex + 1; i<= endIndex; i++){
        if(array[i] < array[pivotIndex]) {
            swapIndex++
            swap(array, swapIndex, i)
        }
    }
    swap(array, pivotIndex, swapIndex)
    return swapIndex
}

let myArray = [4,6,1,7,3,2,5]
console.log(pivot(myArray))
console.log(myArray)


// *** Algorithms: Quick sort ***

function quickSort(array, left=0, right=array.length-1) {
    if(left < right) {
        let pivotIndex = pivot(array, left, right)
        quickSort(array, left, pivotIndex-1)
        quickSort(array, pivotIndex+1, right)
    }
    return array
}

console.log(quickSort([4,6,1,7,3,2,5]))


// *** Algorithms: Tree Traversal ***

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        let temp = this.root
        while(true) {
            if (newNode.value === temp.value) return undefined
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }

    contains(value) {
        if (this.root === null) return false
        let temp = this.root
        while(temp) {
            if (value < temp.value) {
                temp = temp.left
            } else if (value > temp.value) {
                temp = temp.right
            } else {
                return true
            }
        }
        return false
    }

    // Breadth First Search
    BFS() {
        let currentNode = this.root
        let results = []
        let queue = []
        queue.push(currentNode)

        while(queue.length) {
            currentNode = queue.shift()
            results.push(currentNode.value)
            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)
        }
        return results
    }

    // Depth First Search Pre Order
    DFSPreOrder() {
        let results = []
        function traverse(currentNode) {
            results.push(currentNode.value)
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
        }
        traverse(this.root)
        return results
    }

    // Depth First Search Post Order
    DFSPostOrder() {
        let results = []
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
            results.push(currentNode.value)
        }
        traverse(this.root)
        return results
    }

    // Depth First Search In Order
    DFSInOrder() {
        let results = []
        function traverse(currentNode) {
            if(currentNode.left) traverse(currentNode.left)
            results.push(currentNode.value)
            if(currentNode.right) traverse(currentNode.right)
        }
        traverse(this.root)
        return results
    }
}


let myTree = new BST()
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)
