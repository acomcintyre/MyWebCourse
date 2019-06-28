const hobbiesArray = [
    { name: 'drawing', lengthInYearsAtHobby: 24 },
    { name: 'biking', lengthInYearsAtHobby: 4},
    { name: 'writing', lengthInYearsAtHobby: 15}
];

function printHobbyInfo(hobby) {
    console.log(` ${hobby.name} enjoyed for ${hobby.lengthInYearsAtHobby} `)
}



for (let hobby of hobbiesArray) {
    printHobbyInfo(hobby);
}