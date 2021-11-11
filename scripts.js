// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeOff = document.getElementById('takeOff');

    takeOff.addEventListener('click', event => {
        let reponse = window.confirm('Confirm that the shuttle is ready for takeoff.');
    })
}


window.addEventListener("load", init);