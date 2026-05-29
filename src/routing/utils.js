import { NAVIGATION_EVENT } from "./constants"

export function navigate(nextPageRef){
    window.history.pushState({}, '', nextPageRef)
    const navigationEvent = new Event(NAVIGATION_EVENT.PUSH_STATE)
    window.dispatchEvent(navigationEvent)
}

export function getCurrentPath(){
    return window.location.pathname
}