const chalk = require("chalk")

const users = {
    name: "Aniket",
    valid_username: "anky01",
    valid_password: "password-aniket"
}
const username = process.argv[2]
const password = process.argv[3]

console.log(chalk.bold.hex("#ffee58")("-------------- Intra Login System ------------"))
if (username == users.valid_username) {
    if (password == users.valid_password) {
        console.log(chalk.hex("108006").bold.bgHex("ffee58")("Welcome", users.name))
    } else {
        console.log(chalk.red.bold("Invalid Password!"))
    }
} else {
    console.log(chalk.red.bold("Invalid Username!"))
}
