import { BUTTON_EVENT } from "../routing/constants";
import { navigate } from "../routing/utils";

export function CustomLink({target, to, ...props}){
    const handleOnClick = (event) => {

        const isMainEvent = event.button === BUTTON_EVENT.PRIMARY_BUTTON // Zero is the main button. For some could be the right, but for other could be the left
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