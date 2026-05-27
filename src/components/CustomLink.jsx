import { navigate } from "../routing/utils";

export function CustomLink({target, to, ...props}){
    const handleOnClick = (event) => {
        event.preventDefault()
        navigate(to)
    }

    return (
        <a href={to} onClick={handleOnClick} target={target} {...props}></a>
    )
}