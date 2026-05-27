import { navigate } from "../routing/utils";

export function CustomLink({target, to, ...props}){
    const handleOnClick = (event) => {

        const isMainEvent = event.button === 0
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'

        if(isMainEvent && isModifiedEvent && !isManageableEvent){
            event.preventDefault()
            navigate(to)
        }
    }

    return (
        <a href={to} onClick={handleOnClick} target={target} {...props}></a>
    )
}