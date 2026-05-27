export const NAVIGATION_EVENT = 'pushstate'

export function navigate(nextPageRef){
    window.history.pushState({}, '', nextPageRef)
    const navigationEvent = new Event(NAVIGATION_EVENT)
    window.dispatchEvent(navigationEvent)
}