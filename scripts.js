// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeOff = document.getElementById('takeoff');
    const land = document.getElementById('landing');
    const missionAbort = document.getElementById('missionAbort');
    const up = document.getElementById('up');
    const down = document.getElementById('down');
    const right = document.getElementById('right');
    const left = document.getElementById('left');
    const rocket = document.getElementById('rocket');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    let vertical = 0;
    let horizontal = 0;

    function originalPosition() {
        rocket.style.bottom = '0px';
        rocket.style.left = '0px';
        vertical = 0;
        horizontal = 0;
    }

    takeOff.addEventListener('click', () => {
        let response = window.confirm('Confirm that the shuttle is ready for takeoff.');

        if (response === true) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = 10000;
        }
    });

    land.addEventListener('click', () => {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = 0;
        originalPosition();
    });

    missionAbort.addEventListener('click', () => {
        let response = window.confirm('Confirm that you want to abort the mission.');

        if (response === true) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = 0;
            originalPosition();
        }
    });

    up.addEventListener('click', () => {
        if (rocket.style.bottom < `${shuttleBackground.clientHeight}px`) {
            vertical += 10;
            rocket.style.bottom = `${vertical}px`;
            if (spaceShuttleHeight.innerHTML === 0) {
                spaceShuttleHeight.innerHTML = 10000;
            } else {
                spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
            }
        }
    });

    down.addEventListener('click', () => {
        if (spaceShuttleHeight.innerHTML > 0) {
            vertical -= 10;
            rocket.style.bottom = `${vertical}px`;
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
        } 
    });

    right.addEventListener('click', () => {
        if (rocket.style.left < `${shuttleBackground.clientWidth}px`) {
            horizontal += 10;
            rocket.style.left = `${horizontal}px`;
        }
    });

    left.addEventListener('click', () => {
        if (rocket.style.left > '0px') {
            horizontal -= 10;
            rocket.style.left = `${horizontal}px`;
        }
    });
}


window.addEventListener('load', init);