function Salutation({name}) {
    function generateSalutation(someName) {
        return `Hello, ${someName}, how are you?`
    }

    return <>{name && <p>{generateSalutation(name)}</p>}</>
}

export default Salutation