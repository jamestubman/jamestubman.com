import styled from "styled-components"
import { Container } from "react-bootstrap"

export const Jumbo = styled.div(() => ({
    textAlign: "center",
    width: "100%",
    minWidth: "100%",
    minHeight: "15%",
    background: `url(${process.env.PUBLIC_URL}/background.jpg) no-repeat center #e8ecef`,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: 15,
}))
export const ContainerItem = styled(Container)(() => ({
    width: "100%",
    margin: 0,
}))
