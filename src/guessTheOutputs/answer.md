## First one
```js
const promise = new Promise((resolve) => {
  console.log(1);
  resolve();
  console.log(2);
});

console.log(3);
console.log(4);

setTimeout(() => {
  console.log(5);
}, 100);

setTimeout(() => {
  console.log(6);
}, 0);
promise.then(() => {
  console.log(7);
});

console.log(8);
```
```
First one is not a function that returns a Promise. It is the Promise itself which means it already is called. The promise will resolve to `undefined` but we will get our logs anyways.
1
2

3
4

both timeouts are being handled by the browser api and will be queued into the event loop. Meanhile we can get our 
8
from the stack

We will get our promise result before timeouts because it has more priority than browser (or other envs) API calls. It will be directly pushed to the queue (Turns out I was wrong in this statement. The solution states that there are 2 different queues with different priorities. Microtask queue and Callback queue)
7

6
5
```

## Second one
```js
let lol = {
  name: 'Alk',
  first() {
    console.log(this.name + ' loves ReactJS.');
  },
  second: () => {
    console.log(this.name + ' loves AngularJS.');
  },
};

lol.first();
lol.second();
```
- Arrow functions are scoped to the immediately closed **function (not arrow)** scope, so `this` in `second` will point the global variable.
- Functions' context depend on how thye are called. If you call them like a regular call `func()` the context will be the top level variable (or `undefined` in strict mode), but in this case it is implicitly binded to the `lol` object.

Outpus:
```
Alk loves ReactJS
undefined loves AngularJS
```
