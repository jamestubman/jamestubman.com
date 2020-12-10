/**
 *  Header js
 */

import React from "react"
import { Navbar, Nav } from "react-bootstrap"

export default () => (
    <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/">James Tubman</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#link">Portfolio</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
