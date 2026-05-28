import { useState, useEffect } from "react";
import { NAVIGATION_EVENT } from "./constants";
import { match } from 'path-to-regexp'

export function AppRouter({routes = [], defaultComponent: DefaultComponent = () => <h1>404 Error</h1>}){
    
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    
      useEffect(() => {
        const onLocationChange = () => {
          setCurrentPath(window.location.pathname)
        }
    
        window.addEventListener(NAVIGATION_EVENT.PUSH_STATE, onLocationChange)
        window.addEventListener(NAVIGATION_EVENT.POP_STATE, onLocationChange)
    
        return () => {
          window.removeEventListener(NAVIGATION_EVENT.PUSH_STATE, onLocationChange)
          window.removeEventListener(NAVIGATION_EVENT.POP_STATE, onLocationChange)
        }
      }, [])

      let routeParams = {}

      const Page = routes.find(({path}) => {
        if(path === currentPath) return true

        const matcherUrl = match(path, {decode: decodeURIComponent})
        const matched = matcherUrl(currentPath)
        if(!matched) return false

        routeParams = matched.params
        return true
      
      })?.Component
      return Page ? <Page/> : <DefaultComponent/>
}