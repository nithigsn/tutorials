
const dataFromAPI = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
];

const box = document.createElement('div')
box.id('container')


const container = document.getElementById('container')

dataFromAPI.forEach(user => {
    const box = document.createElement('div')
    box.classList.add('user-box')

    const name = document.createElement('h4')
    name.textContent = `Name : ${user.name}`

    const age = document.createElement('h3')
    age.textContent = `Age : ${user.age}`


    box.appendChild(name)
    box.appendChild(age)
    container.appendChild(box)
})