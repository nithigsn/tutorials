



let myPromise = new Promise((resolve, reject) => {
    let x = 5

    if (x == 1) {
        resolve('okay');
    }
    else {
        reject('error')
    }
});

myPromise
    .then((result) => console.log(result, "success"))
    .catch((err) => console.log(err, "rejected"));



async function displayAge() {
    try {
        const result = await myPromise;
        console.log('success', result);


    } catch (error) {
        console.log(error, "error");
    }
}

displayAge();

