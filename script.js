// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

// const { addDestinationInfo } = require("./scriptHelper");




window.addEventListener("load", function() {
    const form = document.querySelector("form");
    const list = document.getElementById("faultyItems")
    const pilotName = document.querySelector('input[name=pilotName]');
    const copilotName = document.querySelector('input[name=copilotName');
    const fuelLevel = document.querySelector('input[name=fuelLevel');
    const cargoMass = document.querySelector('input[name=cargoMass');
    //  const pilotStatus = document.getElementById('pilotStatus');
    // const copilotStatus = document.getElementById('copilotStatus');
    // const fuelStatus = document.getElementById('fuelStatus');
    // const cargoStatus = document.getElementById('cargoStatus');
    // const itemNotReady = document.getElementById('faultyItems');
        // const launchStatus = document.getElementById('launchStatus');
     form.addEventListener("submit", (e) => {

        // Moved to formSubmission Function
        // if (pilotName.value.trim() === '' || copilotName.value.trim() === '' || fuelLevel.value.trim() === '' || cargoMass.value.trim() === '') {
        //     e.preventDefault();
        //     alert('Please enter all required information');
        //     return;
        // }
        e.preventDefault();
        formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
        // console.log(pickPlanet(planets));
        // console.log(pilotName.value)
        // console.log(validateInput)
        // console.log(validateInput(pilotName.value))
        
        // console.log(validateInput(pilotName.value))
        // validateInput(pilotName.value);

        // console.log(validateInput(pilotName.value));
        // formSubmission(form, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);


    // })
    
   
    
    if (launchStatus.innerHTML === 'Shuttle is ready for Launch'){

   let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
   }).then(function () {
    // console.log(listedPlanets)
    //    console.log(myFetch);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let destinationPlanet = pickPlanet(listedPlanets);
    // console.log(destinationPlanet.name)
    (addDestinationInfo(document, destinationPlanet.name, destinationPlanet.diameter, destinationPlanet.star, destinationPlanet.distance, destinationPlanet.moons, destinationPlanet.image))
    })
}
})

//    console.log(listedPlanets);
});