/**
 *  Page js
 */

import React from "react"
import { Container, Jumbotron } from "react-bootstrap"

import Header from "./Header/Header"

export default () => (
    <div>
        <Header />
        <Container fluid>
            <Jumbotron fluid>
                <h1>Full-stack Developer</h1>
                <p>Skills:</p>
            </Jumbotron>
        </Container>
    </div>
)
