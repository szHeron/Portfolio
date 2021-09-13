import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        background-color: ${props=>props.theme.colors.background};
        color: ${props=>props.theme.colors.text};
    }

    *{
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        box-sizing: border-box;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ::-webkit-scrollbar{
        width: 7px;
    }

    ::-webkit-scrollbar-thumb{
        background: linear-gradient(180deg, rgba(128,0,255,1) 0%, rgba(74,112,248,1) 100%);
        border-radius: 25px;
    }
`