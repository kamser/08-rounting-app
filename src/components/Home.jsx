import { navigate } from "../routing/utils";

export function HomePage(){
    return (
        <>
            <h1>Home</h1>
            <p>This is the home page</p>
            <a href="/about">Go to about</a>
            <button onClick={() => navigate('/about')}>Go to About</button>
        </>
    )
}