export { };

/** FIFO Collection */
class Queue<T> {
    data: T[] = [];
    push(item: T) { this.data.push(item); }
    pop(): T | undefined {
        return this.data.shift();
    }
}


const queue = new Queue<number>();
queue.push(123);
queue.push(42.124);

console.log(queue);
console.log(queue.pop());
console.log(queue);
