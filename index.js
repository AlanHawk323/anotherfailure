// TODO: this file! :)
console.log("testing testing")

//const submitButton = document.querySelector("button");
// console.log(submitButton)

const bank = {
    numbers: []
}

const userNumbers = document.querySelector("form");

function render()
{const allNums = bank.numbers.map((num) =>
    {return `<span> ${num} </span>`})
    userNumbers.innerHTML = allNums.join("");
}

userNumbers.addEventListener("submit", (event) =>
    {event.preventDefault()
        const added = event.target.userNumbers.value
        bank.userNumbers.push(added)
        render()
})

    // const submitButton = document.querySelector("button");
    // submitButton.addEventListener("click", (event) =>
    // {event.preventDefault()
    //     console.log(event.target.number.value)
    //     numbers.push(event.target.number.value)
    //     console.log("Your numbers:", numbers)
    //     event.target.number.value = ""
    //     render()
    // })

    //const numsForm = document.querySelector(".output");
