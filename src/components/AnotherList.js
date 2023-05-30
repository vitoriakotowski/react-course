function AnotherList({itens}) {
    return (
        <>
            <h3>List of good things:</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => (
               <p key={index} >{item}</p>
            ))) : (
                <p>The list is empty</p>
            )}
        </>
    )
}

export default AnotherList