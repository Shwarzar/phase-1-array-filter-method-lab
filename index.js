
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, element) {
    const newDriver = [];
    for (const driver of array) {
        if (driver.toLowerCase() === element.toLowerCase())
        newDriver.push(driver)
    }
    return newDriver    
}

const potato = findMatching(drivers, 'Bobby');
console.log(potato)

console.log(drivers[0][0])

function fuzzyMatch(array, part) {
    const firstPart = driver => driver.startsWith(part)
    return array.filter(firstPart)
}

const test = fuzzyMatch(drivers, 'An');
console.log(test)

function matchName(array, element) {
    const newdrivers = [
        {
            name: 'Bobby',
            hometown: 'Pittsburgh' },
          {
            name: 'Sammy',
            hometown: 'New York' } ,
          {
            name: 'Sally',
            hometown: 'Cleveland' },
          {
            name: 'Annette',
            hometown: 'Los Angeles' },
          {
            name: 'Bobby',
            hometown: 'Tampa Bay' }
    ]

    const printHometown = [];

    for (const driver of newdrivers) {
        if (driver.name === element) {
            printHometown.push(driver)
        }
    }
    return printHometown
}

const test1 = matchName(drivers, 'Bobby')
console.log(test1)
