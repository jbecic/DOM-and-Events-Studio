// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeOff = document.getElementById('takeOff');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

    takeOff.addEventListener('click', event => {
        let response = window.confirm('Confirm that the shuttle is ready for takeoff.');
        let str;
        if (response === true) {
            str = 'Shuttle in flight.';
            flightStatus.innerHTML = str;
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = '10,000';
        }
    })
}


window.addEventListener("load", init);