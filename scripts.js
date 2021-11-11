// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeOff = document.getElementById('takeOff');
    const land = document.getElementById('landing');
    const missionAbort = document.getElementById('missionAbort');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

    takeOff.addEventListener('click', () => {
        let response = window.confirm('Confirm that the shuttle is ready for takeoff.');

        if (response === true) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = '10,000';
        }
    })

    land.addEventListener('click', () => {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = '0';
    })

    missionAbort.addEventListener('click', () => {
        let response = window.confirm('Confirm that you want to abort the mission.');

        if (response === true) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = '0';
        }
    })
}


window.addEventListener("load", init);