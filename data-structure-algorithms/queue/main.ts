import { Queue } from './queue';
import { Customer } from './customer';

// Queue that can hold 100 numbers
const numberQueue = new Queue<number>(100);

// Queue that can hold 50 strings
const stringQueue = new Queue<string>(50);

// A checkout lane with 10 customers
const checkoutLine = new Queue<Customer>(10);

// Create a number queue capable of storing 100 numbers
const nq = new Queue<number>(100);

// Fill the queue up with random numbers
while (!nq.isFull()) {
  nq.enqueue(Math.floor(Math.random() * 1000));
}
nq.queueContents();

// Empty out the queue
while (!nq.isEmpty()) {
  console.log(`${nq.dequeue()}`);
}
nq.queueContents();
