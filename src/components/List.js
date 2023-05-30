import Item from "./Item"

function List() {
    return (
        <>
            <h1>My List</h1>
            <ul>
                <Item brand="Dolce Gabbana" launch={1985} />
                <Item brand="Louis Vuitton" launch={1977} />
                <Item brand="Michael Kors" launch={1954} />
                <Item/>
            </ul>
        </>
    )
}

export default List