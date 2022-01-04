// Code your solution here


function findMatching(listOfNames, nameInput){
    let newArray = listOfNames.filter(driver => driver.toLowerCase() === nameInput.toLowerCase())
    return newArray
}

function fuzzyMatch(listOfNames, nameInput){
    let newArray = listOfNames.filter(driver => {
        return driver.slice(0, nameInput.length).toLowerCase() === nameInput.toLowerCase()
    })
    return newArray
}

function matchName(listOfNames, nameInput){
    let newArray = listOfNames.filter(list => {
        return list.name === nameInput
    })
    return newArray
}