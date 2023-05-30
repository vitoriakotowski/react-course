function YourName({setName}) {
    return (
        <div>
            <p>Type your name:</p>
            <input type="text" placeholder="What's your name?" onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default YourName