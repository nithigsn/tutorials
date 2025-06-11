## Promise

- A Promise is an object representing the eventual completion of an asynchronous operation
  and it's resulting value

### Has three states

- Pending - Initial State , neither fulfilled nor rejected
- Fulfilled - Operation completed successfully
- Rejected - Operation failed

#### Create promise with new Promise constructor

```javascript
const promise = new Promise((resolve, reject) => {
  let age = 19;

  if (age > 18) {
    resolve("Eligible To Vote");
  } else {
    reject("Not Eligible To Vote");
  }
});

const promise2 = new Promise((resolve, reject) => {
  let age = 15;

  if (age > 18) {
    resolve("Eligible To Vote");
  } else {
    reject("Not Eligible To Vote");
  }
});
```

#### Consume Promise

```javascript
promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Task Completed");
  });
```

#### Static Methods

```javascript
//resolve
promise.resolve('value').then(console.log)

//reject
promise.reject('Error').then(console.error)
```


#### Promise Chaining

- Can return a value or another promise inside .then() to chain operations
- Ex using fetch

```javascript
fetch("Api").then((res) =>
  res
    .json()
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
);
````

#### Promise.all

- Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
- Use - when you want all results or none

```javascript
Promise.all([promise, promise2])
  .then((res) => console.log(res)) // [res1.res2]
  .catch((err) => console.log(err)); // error of the rejected promise
```

#### Promise.allSettled

- wait for all promises to settle either fulfilled or rejected
- **use** - when you want the result of every promise

```javascript
Promise.allSettled([promise, promise2]).then((res) => [
  res.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log(result.value);
    } else {
      console.log("reason", result.reason);
    }
  }),
]);
```

#### Promise.race

- returns the first settled promise either fulfilled or rejected
- **use** - when u want to find who wins first ,which finishes first

```javascript
Promise.race([promise, promise2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

#### Promise.any

- Returns the first fulfilled promise. If all are rejected, it rejects with an AggregateError.
- **Use** Return first success even if others fail.

```javascript
Promise.any([promise, promise2, promise])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
```

#### Difference

| Method               | Resolves When   | Rejects When                           |
| -------------------- | --------------- | -------------------------------------- |
| `Promise.all`        | All fulfilled   | Any rejected                           |
| `Promise.allSettled` | All settled     | Never rejects                          |
| `Promise.race`       | First settles   | First rejects or fulfills              |
| `Promise.any`        | First fulfilled | All rejected (throws `AggregateError`) |
