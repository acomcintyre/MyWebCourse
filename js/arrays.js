let hobbiesArray = ['reading',
    'drawing',
    'writing'];

function printHobbies(passedArray) {
    console.log(`I like ${passedArray.length} things`);
    for (let index = 0; index < hobbiesArray.length; index++) {
        let element = hobbiesArray[index];
        console.log('I like ' + element);
    }
}


printHobbies(hobbiesArray);