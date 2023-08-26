console.log("testing testing")

//const submitButton = document.querySelector("button");
// console.log(submitButton)

const digits =
{
    numbers: [],
    odds: [],
    evens: []
}

const form = document.querySelector("form")
const numberBank = document.querySelector("#numberBank output");
const oddBank = document.querySelector("#odds output");
const evenBank = document.querySelector("#evens output");

function render ()
{const numbers = digits.number.map((num) => 
    {return `<span> ${num} </span>`
})
}

form.addEventListener("submit", (event) => {event.preventDefault()
const addedNum = event.target.number.value
digits.number.push(addedNum)
render()
})

// function render()
//     {const startNumbers = digits.number.map((numbers) =>
//         {return `<span> ${numbers} </span>`})
//         numberBank.innerHTML = startNumbers.join("")
//     }

//         form.addEventListener("submit", (event) => {event.preventDefault()
//         const newNum = event.target.startNumbers.value

//         digits.number.push(newNum)
//         render()
//         })


        //Everything below is the remnants of failed attempts. I struggled a lot with this.
    //     const form = Array.from(document.getElementById("form"))
    //     console.log(form)
    //     form.map((numbers) =>
    //     {numbers.addEventListener("submit", () => {digits.target.push(digits.numbers.pop())
    //     render()
    //     })
    // })
    // const boxNumbers = digits.target.map((numbers) =>
    //     {return `<output> ${numbers} </output>`})
    //     finalNums.innerHTML = boxNumbers.join("")
    //     }
    //     render()


// function render()
// {const allNums = bank.numbers.map((num) =>
//     {return `<span> ${num} </span>`})
//     userNumbers.innerHTML = allNums.join("");
// }

// userNumbers.addEventListener("submit", (event) =>
//     {event.preventDefault()
//         const added = event.target.userNumbers.value
//         bank.userNumbers.push(added)
//         render()
// })

    // const submitButton = document.querySelector("button");
    // submitButton.addEventListener("click", (event) =>
    // {event.preventDefault()
    //     console.log(event.target.number.value)
    //     numbers.push(event.target.number.value)
    //     console.log("Your numbers:", numbers)
    //     event.target.number.value = ""
    //     render()
    // })
//I was at this for actual hours. I don't understand why it's not working. I'm so tired of my functions being undefined.
