const objHobbies = require("./hobbies.js")
const objNames = require("./names.js")

function objNamesHobbies() {

    return {
        ...objNames("pinco", "pallino"),
        ...objHobbies("jogging", "drawing", "photography")
    }
}

console.log(objNamesHobbies());