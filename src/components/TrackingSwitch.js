import React, { useEffect } from 'react'
import { Switch, useLocation } from "react-router-dom"
import ReactGA from 'react-ga'

const TrackingSwitch = (props) => {
    const location = useLocation()

    useEffect(() => {
        ReactGA.set({ page: location.pathname })
        ReactGA.pageview(location.pathname)
    }, [location]);

    return (
        <Switch>
            {props.children}
        </Switch>
    );
}

export default TrackingSwitch
