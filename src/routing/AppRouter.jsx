import { useState, useEffect, Children } from "react";
import { NAVIGATION_EVENT } from "./constants";
import { match } from 'path-to-regexp'
import { getCurrentPath } from "./utils";

export function AppRouter({children, routes = [], defaultComponent: DefaultComponent = () => <h1>404 Error</h1>}){
    
    const [currentPath, setCurrentPath] = useState(getCurrentPath())

    const routesFromChildren = Children.map(children, ({props, type}) => {
      const {name} = type
      const isRoute = name === 'Route'
      return isRoute
                  ? props
                  : null
    })

    const routesToUse = routes.concat(routesFromChildren).filter(Boolean)
    
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(getCurrentPath())
      }
  
      window.addEventListener(NAVIGATION_EVENT.PUSH_STATE, onLocationChange)
      window.addEventListener(NAVIGATION_EVENT.POP_STATE, onLocationChange)
  
      return () => {
        window.removeEventListener(NAVIGATION_EVENT.PUSH_STATE, onLocationChange)
        window.removeEventListener(NAVIGATION_EVENT.POP_STATE, onLocationChange)
      }
    }, [])

    let routeParams = {}

    const Page = routesToUse.find(({path}) => {
      if(path === currentPath) return true

      const matcherUrl = match(path, {decode: decodeURIComponent})
      const matched = matcherUrl(currentPath)
      if(!matched) return false

      routeParams = matched.params
      return true
    
    })?.Component
    
    return Page 
              ? <Page routeParams={routeParams}/> 
              : <DefaultComponent routeParams={routeParams}/>
}