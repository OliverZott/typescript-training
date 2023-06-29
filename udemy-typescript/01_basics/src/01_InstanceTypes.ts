// Special JS Classes

let regExp = new RegExp('ab+x');
let regExp2 = /ab+x/;

let array: Array<number> = [1, 2, 3, 17, 'a'];

let set: Set<number> = new Set([1, 2, 3, 2]);


// Create classes yourself
class Queue<T> {
    private data: Array<T> = [];
    push (item: T): void { this.data.push(item) }
    pop (): T | undefined { return this.data.shift() }
}

let queue: Queue<number> = new Queue();
queue.push(12);
console.log(queue)
console.log(queue.pop);
console.log(queue)


console.log(array);
console.log(set);
