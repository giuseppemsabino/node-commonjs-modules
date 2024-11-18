const createNames = require('./names');
const createHobbies = require('./hobbies');

function createPerson(){
    const name = createNames('Luca', 'Rossi');
    const hobbies = createHobbies('viaggio', 'tenis', 'skysurf');

    return {
        firstname: name.firstname,
        lastName: name.lastName,
        hobbies: hobbies.hobbies

    };
console.log(name);
        
}

module.exports= createPerson;
