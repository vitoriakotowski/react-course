import Button from './Event/Button'

function Events() {

    function myEvent() {
        console.log(`Activating my first event`)
    }

    function secondEvent() {
        console.log(`Activating my second event`)
    }

    return (
        <div>
            <p>Click to play an event:</p>
            <Button event={myEvent} text="First Event" />
            <Button event={secondEvent} text="Second Event" />
        </div>
    )
}

export default Events