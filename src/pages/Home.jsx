import { CustomLink } from '../components/CustomLink.jsx';

export default function HomePage(){
    return (
        <>
            <h1>Home</h1>
            <p>This is the home page</p>
            <CustomLink to={'/about'}>Go to About</CustomLink>
        </>
    )
}