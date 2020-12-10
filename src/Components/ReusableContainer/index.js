/**
 * @name {Reuseable Container}
 */
import React from "react"
import { ReuseableContainer } from "Components/ReusableContainer/styles"

const ReuseableContainerWrapper = props => {
    const { children } = props || {}
    return <ReuseableContainer>{children}</ReuseableContainer>
}
export default ReuseableContainerWrapper
