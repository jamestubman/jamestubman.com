import React, { Suspense } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router } from "react-router-dom"
import Routing from "Components/Pages"

export default () => (
    <>
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routing />
            </Suspense>
        </Router>
    </>
)
