/**
 * @name Pages
 * Component used for handling pages through react-router-dom as main routing system.
 * @return {JSX} - Project routes based on user location.
 */

import React, { lazy } from "react"
import { Route, Switch } from "react-router-dom"

// Lazy loaded pages
const Main = lazy(() => import("Components/Main"))

const Pages = () => (
    <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Main} />
    </Switch>
)

export default Pages
