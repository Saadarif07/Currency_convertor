#! /user/bin/env node
import inquirer from "inquirer"

// list of currencies and their exchange rates
let exchange_rate: any ={
    "USD": 1,
    "EUR": 0.9,
    "CAD": 1.3,
    "PKR": 280,
}

let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "CAD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "CAD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

// Currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency]
let to_amount =  exchange_rate[user_answer.to_currency]
let amount = user_answer.amount

//Formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

console.log(`Converted Amount = ${converted_amount}`);