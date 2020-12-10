/**
 * @name {Main}
 *
 */
import React from "react"
import { ContainerItem } from "Components/Main/styles"
import Jumbotron from "Components/Main/Jumbo"
import About from "Components/Main/About"

import Header from "Components/Header"

export default () => (
    <>
        <Header />
        <ContainerItem>
            <Jumbotron />
            <About id="about" />
        </ContainerItem>
    </>
)
