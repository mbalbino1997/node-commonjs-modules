const objHobbies = require("./hobbies.js")
const objNames = require("./names.js")

function objNamesHobbies() {
    const names = objNames("pinco", "pallino")
    const hobbies = objHobbies("developer", "copywriter", "analyst")
    return {
        ...names,
        ...hobbies
    }
}

console.log(objNamesHobbies());