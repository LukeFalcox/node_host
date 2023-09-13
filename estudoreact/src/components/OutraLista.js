function OutraLista({itens}) {
    return(
        <>
        <h3>Listas de coisas boas:</h3>
        {
            itens.map((item) => (
                <p>{item}</p>
            ))}
        </>
    )
}
export default OutraLista