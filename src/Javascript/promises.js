
/*
A Promise is an object representing the eventual completion of an asynchronous operation 
and it's resulting value

Has 3 states
- Pending - Initial State , neither fulfilled nor rejected
- Fulfilled - Operation completed successfully
- Rejected - Operation failed
*/



// Create promise with new Promise constructor
const promise = new Promise((resolve, reject) => {
    let age = 19

    if (age > 18) {
        resolve('Eligible To Vote')
    }
    else {
        reject('Not Eligible To Vote')
    }
})


const promise2 = new Promise((resolve, reject) => {
    let age = 15

    if (age > 18) {
        resolve('Eligible To Vote')
    }
    else {
        reject('Not Eligible To Vote')
    }
})

// Consume Promise
promise.then(res => {
    console.log(res);

}).catch(err => {
    console.log(err);

}).finally(() => {
    console.log('Task Completed');

})

// Static Methods
//resolve
// promise.resolve().then(console.log)

//reject
// promise.reject().then(console.error)

// Promise chaining - Can return a value or another promise inside .then() to chain operations
// Ex using fetch
// fetch('Api')
//     .then(res => res.json()
//         .then(data => console.log(data))
//         .catch(err => console.log(err)))



// Promise.all
// Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
// Use - when you want all results or none
Promise.all([promise, promise2])
    .then(res => console.log(res)) // [res1.res2]
    .catch(err => console.log(err))  // error of the rejected promise

// Promise.allSettled
// wait for all promises to settle either fulfilled or rejected
// use - when you want the result of every promise

Promise.allSettled([promise, promise2])
    .then(res => [
        res.forEach(result => {
            if (result.status === 'fulfilled') {
                console.log(result.value);
            }
            else {
                console.log("reason", result.reason);

            }
        })
    ])



// Promise.race - returns the first settled promise either fulfilled or rejected
// use - when u want to find who wins first ,which finishes first
Promise.race([promise, promise2])
    .then(res => console.log(res))
    .catch(err => console.log(err)
    )


// Returns the first fulfilled promise. If all are rejected, it rejects with an AggregateError.
// Use case: Return first success even if others fail. 
Promise.any([promise, promise2, promise])
    .then(res => console.log(res))
    .catch(err => console.error(err))