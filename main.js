const userInput = window.prompt("Choose to Deposit or Withdraw");
let depositAmount;
let withdrawAmount;
let balance = 0;


if (userInput === "Deposit" || userInput === "deposit") {
    depositAmount = window.prompt("How much would you like to deposit?");
    balance = Number(balance) + Number(depositAmount)
    alert(`Your new balance is: $${balance}`)
} else if (userInput === "Withdraw" || userInput === "withdraw") {
    withdrawAmount = window.prompt("How much would you like to withdraw?");
    balance = Number(balance) - Number(withdraw)
    alert(`Your new balance is: $${balance}`)
} else {
    alert("Your input was invalid")
}


// My uncomplete attempt at question 3 below...
/*
for (let rep = 1; rep <= 10; rep ++) {
    if (userInput === "Deposit" || userInput === "deposit") {
        depositAmount = window.prompt("How much would you like to deposit?");
        balance = Number(balance) + Number(depositAmount)
        alert(`Your new balance is: $${balance}`)
    } else if (userInput === "Withdraw" || userInput === "withdraw") {
        withdrawAmount = window.prompt("How much would you like to withdraw?");
        balance = Number(balance) - Number(withdraw)
        alert(`Your new balance is: $${balance}`)
    } else {
        alert("Your input was invalid")
    }
}
*/
