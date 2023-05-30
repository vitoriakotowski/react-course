function People({name, age, hobbie, photo}) {
    return (
        <div>
            <img src={photo} alt={name} />
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Hobbie: {hobbie}</p>
        </div>
    )
}

export default People