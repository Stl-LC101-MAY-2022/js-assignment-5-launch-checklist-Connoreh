// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let destinationElement = document.getElementById('missionTarget');
    destinationElement.innerHTML = `
    <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">`
                
            }

function validateInput(testInput) {
    // const list = document.getElementById("faultyItems")
    const pilotName = document.querySelector('input[name=pilotName]');
    const copilotName = document.querySelector('input[name=copilotName');
    const fuelLevel = document.querySelector('input[name=fuelLevel');
    const cargoMass = document.querySelector('input[name=cargoMass');
    // const itemNotReady = document.getElementById('faultyItems');


   if (testInput.trim() === '') {
        // alert("Not a Number");
        return "Empty"
   }
    else if (isNaN(testInput)) {
        return "Not A Number"
    }
    else if (!isNaN(testInput)) {
        // alert("Not a Number");
        return "Is a Number"
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //  const pilotStatus = document.getElementById('pilotStatus');
    //  const copilotStatus = document.getElementById('copilotStatus');
    //  const fuelStatus = document.getElementById('fuelStatus');
    //  const cargoStatus = document.getElementById('cargoStatus');
    //  const launchStatus = document.getElementById('launchStatus');
    const itemNotReady = document.getElementById('faultyItems');
 
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All Fields Required!");
    }
      else if (validateInput(pilot) !== "Not A Number" || validateInput(copilot) !== "Not A Number" || validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number") {
        alert("Please enter valid information for each field.")
     }
    if (validateInput(pilot) === "Not A Number") {
        itemNotReady.style.visibility = 'visible';
        pilotStatus.innerHTML = `${pilot} Ready`;
    }
    
    if (validateInput(copilot) === "Not A Number") {
        copilotStatus.innerHTML = `${copilot} ready`
    }

    if (validateInput(fuelLevel) === "Is a Number"){
        if (Number(fuelLevel) < 10000) {
            itemNotReady.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle not ready for launch';
            launchStatus.style.color = 'red';
            fuelStatus.innerHTML = 'Fuel level too low for launch!';


        }
    }
    

    if (validateInput(cargoLevel) === 'Is a Number') {
        if (Number(cargoLevel) > 10000 ) {
            itemNotReady.style.visibility = 'visible';
            cargoStatus.innerHTML = 'Shuttle not ready for launch';
            launchStatus.innerHTML = 'Shuttle not ready for launch';
            launchStatus.style.color = 'red';

        }
    }

    

        if (validateInput(pilot) === 'Not A Number' && validateInput(copilot) === "Not A Number" && validateInput(fuelLevel) === 'Is a Number' && Number(fuelLevel) >= 10000 && validateInput(cargoLevel) === "Is a Number" && Number(cargoLevel) <= 10000) {
                launchStatus.style.color = 'green';
                launchStatus.innerHTML = 'Shuttle is ready for Launch';
        }
    }
 


async function myFetch() {
    let planetsReturned;
    let planetSelected;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         return response.json() 
  
})
        // console.log(planetsReturned)
    return planetsReturned;
}


function pickPlanet(planets) {
    let randomSelectedPlanet = planets[Math.floor(Math.random() * 6)];
    return randomSelectedPlanet;

}

   //    if (validateInput(pilot) !== "Not a Number") {
    //     alert('Please enter a valid input for pilot name');
    //     return;
    //    }
    

    //    const pilotStatus = document.getElementById('pilotStatus');
    //     pilotStatus.innerHtml = `${pilot} ready`;
    //    copilotStatus.innerHtml = `${copilot} ready`;
    //   return pilotStatus.innerHtml;
    // }
    // else {

    // }
    // if (fuelLevel < 10000 && validateInput(fuelLevel) === 'Is a number') {
    //     itemNotReady.removeAtrribute('faultyItems');
    //     fuelStatus.innerHtml = `Not Enough Fuel for your journey!`;
    //     launchStatus.innerHtml = `Shuttle Not Ready For Launch`
    //     launchStatus.style.color = 'red';

    // }
   


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
