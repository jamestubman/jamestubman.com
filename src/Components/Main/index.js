/**
 * @name {Main}
 *
 */
import React from "react"
import { Jumbo, ContainerItem } from "Components/Main/styles"

import Header from "Components/Header"

export default () => (
    <>
        <Header />
        <ContainerItem>
            <Jumbo>
                <h1>Full-stack Developer</h1>
                <p>Skills:</p>
            </Jumbo>
        </ContainerItem>
    </>
)
