import styled from "styled-components"
import { Container } from "react-bootstrap"

export const Jumbo = styled.div(() => ({
    textAlign: "center",
    width: "100%",
    minWidth: "100%",
    maxWidth: "100%",
    minHeight: "40%",
    background: `url(${process.env.PUBLIC_URL}/static/assets/background.jpg) no-repeat center center #050505`,
    backgroundSize: "cover",
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
    color: "#dcdde1",
    justifyContent: "center",
    margin: 0,
    padding: 15,
}))
export const ContainerItem = styled(Container)(() => ({
    width: "100%",
    height: "100%",
    minWidth: "100%",
    maxWidth: "100%",
    padding: 0,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
}))
