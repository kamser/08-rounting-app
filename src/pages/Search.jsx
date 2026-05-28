
export function SearchPage({routeParams}){
    return(
        <>
            <h1>This is the search page.</h1>
            <p>Your search param was: {routeParams.query}</p>
        </>
    )
}