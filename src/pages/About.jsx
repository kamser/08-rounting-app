import { CustomLink } from '../components/CustomLink.jsx';

export function AboutPage(){
    return (
        <>
            <h1>About Section</h1>
            <p>This is the about page section to test the app rounting</p>
            <CustomLink to={'/'}>Go Home</CustomLink>
        </>
    )
}