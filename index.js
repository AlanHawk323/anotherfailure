// // TODO: this file! :)
const numList = document.querySelector("form");
const nums = {numbers: [], odds: [], evens: []};
const numBank = document.querySelector("#numberBank output");

function render()
{const outputNums = nums.numbers.map((num) =>
    {return `<span> ${num} </span>`
})
numBank.innerHTML = outputNums.join("")
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const numAdded = event.target.number.value
    nums.numbers.push(numAdded)
    render()
})

const oddFilter = document.querySelector("#oddFilter output");
const evenFilter = document.querySelector("#evenFilter output");

function render()
{const oddNums = nums.odds.map((num) =>
    {return `<span> ${num} </span>`
    })
    oddFilter.innerHTML = oddNums.join("")
}

function render()
{const evenNums = nums.evens.map((num) =>
    {return `<span> ${num} </span>`
    })
    evenFilter.innerHTML = evenNums.join("")
}

const sortOne = document.querySelector("#sortOne");
const sortAll = document.querySelector("#sortAll");

sortOne.addEventListener("click", (num) =>
{nums.number.find()
    if(toSort % 2 === 0)
    {nums.evens.push(num)}
    else{nums.odds.push(num)}
    render()
})

sortAll.addEventListener("click", (num) =>
    {nums.number.map()
    if(num % 2 === 0)
    {nums.evens.push(num)}
    else{nums.odds.push(num)}
    render()
    })