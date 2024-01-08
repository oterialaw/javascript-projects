// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let thespaceshuttle = "Determination"
console.log(typeof thespaceshuttle);

let shuttlespeedmph = 17500
console.log(typeof shuttlespeedmph);

let distancetomarskm = 225000000
console.log(typeof distancetomarskm);

let distancetothemoonkm = 384400
console.log(typeof distancetothemoonkm);

let milesperkilometer = 0.621
console.log(typeof milesperkilometer);

let milestomars = distancetomarskm * milesperkilometer 
console.log(milestomars)

let hourstomars = milestomars / shuttlespeedmph
console.log(hourstomars)

let daystomars = hourstomars / 24
console.log(daystomars)

console.log(`${thespaceshuttle} will take ${daystomars} days to reach Mars`)

let milestomoon = distancetomarskm * milesperkilometer
console.log (milestomoon)

let hourstomoon = milestomoon / shuttlespeedmph
console.log(hourstomoon)

let daystomoon = hourstomoon / 24
console.log(daystomoon)

console.log(`${thespaceshuttle} will take ${daystomoon} days to reach the Moon`)

// let milesToMoon = kilometersToMoon * milesPerKilometer;
// let hoursToMoon = milesToMoon / shuttleSpeedMph;
// let daysToMoon = hoursToMoon / 24;
// console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");