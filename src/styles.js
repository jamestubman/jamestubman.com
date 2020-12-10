import Styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    body, #root {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

`

export const ThemeColors = {
    yellow: "#ffd900",
    red: "#EC0000",
    orange: "#FF5500",
    white: "#FFFFFF",
    black: "#000000",
    green: "#16AD5C",
    grey: "#313131",
    lightGrey: "#BFC0BF",
}

export const PagesWrapper = Styled.div(() => ({
    width: "100%",
    height: "100%",
}))

export default GlobalStyle
