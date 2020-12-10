/**
 * @name {Header}
 */

import React from "react"
import { Navbar, Nav } from "react-bootstrap"

export default () => (
    <Navbar bg="dark" expand="lg" sticky="top">
        <Navbar.Brand href="/">James Tubman</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
