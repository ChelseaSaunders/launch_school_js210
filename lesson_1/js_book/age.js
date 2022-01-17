let rlSync = require('readline-sync')
yourAge = Number(rlSync.question('How old are you? '))

let ten = 10
let twenty = 20
let thirty = 30
let fourty = 40

console.log(`In ${ten} years, you will be ${yourAge + ten} years old.`)
console.log(`In ${twenty} years, you will be ${yourAge + twenty} years old.`)
console.log(`In ${thirty} years, you will be ${yourAge + thirty} years old.`)
console.log(`In ${fourty} years, you will be ${yourAge + fourty} years old.`)

