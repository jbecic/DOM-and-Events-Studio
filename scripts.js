// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeOff = document.getElementById('takeOff');
    const flightStatus = document.getElementById('flightStatus');

    takeOff.addEventListener('click', event => {
        let response = confirm('Confirm that the shuttle is ready for takeoff.');
        let str;
        if (response === true) {
            str = 'Shuttle in flight.';
            flightStatus.innerHTML = str;
        }
    })
}


window.addEventListener("load", init);