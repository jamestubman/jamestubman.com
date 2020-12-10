/**
 * @name {About}
 */
import React from "react"
import ReusableContainer from "Components/ReusableContainer"
import { Row, Col, Container, Table } from "react-bootstrap"

const AboutContainer = () => (
    <ReusableContainer>
        <h1>About</h1>
        <Container>
            <Row>
                <Col>picture</Col>
                <Col>
                    <p>
                        {`Based in Gloucestershire, I graduated from Worcester University in 2017.
                        From there I have been
                        working as a full-stack developer for 
                        ${new Date().getFullYear() - 2017}
                         years.   \n   \n 
                        My current skills set incudes: \n
                        MERN stack, \n
                        SQL, \n
                        NoSQl, \n
                        Various AWS services such as (EC2, S3, RDS, CloudFront, DynamoDB, Cognito, Chime, ACM, ELB) `}
                    </p>
                </Col>
                <Col>
                    <Table striped bordered hover variant="dark">
                        <tbody>
                            <tr>
                                <td>Javascript (ES2020)</td>
                                <td>Advanced</td>
                            </tr>
                            <tr>
                                <td>Node JS</td>
                                <td>Advanced</td>
                            </tr>
                            <tr>
                                <td>React (Hooks)</td>
                                <td>Intermediate</td>
                            </tr>
                            <tr>
                                <td>Styling (Sass, Styled-Componenets)</td>
                                <td>Advanced</td>
                            </tr>
                            <tr>
                                <td>Socket I.O</td>
                                <td>Intermediate</td>
                            </tr>
                            <tr>
                                <td>NoSQL</td>
                                <td>Intermediate</td>
                            </tr>
                            <tr>
                                <td>SQL</td>
                                <td>Intermediate</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    </ReusableContainer>
)

export default AboutContainer
