



let fetchdata = fetch("https://api.restful-api.dev/objects?id=3&id=5&id=10");
fetchdata.then(res => res.json()).then(d => {
   console.log(d);
});







