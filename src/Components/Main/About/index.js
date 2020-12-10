/**
 * @name {About}
 */
import React from "react"
import ReusableContainer from "Components/ReusableContainer"
import { Row, Col } from "react-bootstrap"

const AboutContainer = () => (
    <ReusableContainer>
        <h1>About</h1>
        <Row>
            <Col>picture</Col>
            <Col>Text</Col>
            <Col>Stats</Col>
        </Row>
    </ReusableContainer>
)

export default AboutContainer
