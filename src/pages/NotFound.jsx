
import { CustomLink } from "../components/CustomLink";

export function NotFoundPage(){
    return (
        <>
            <p>Something went wrong</p>
            <img src="https://i.pinimg.com/originals/e7/7c/43/e77c430d9779c9aa63a068e793f1e33c.gif" alt="Error gift im fine meme" />
            <div>
                <CustomLink to="/">Back to home</CustomLink>
            </div>
        </>
    )
}