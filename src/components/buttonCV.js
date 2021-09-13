import styled from "styled-components";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 15px;
    margin-top: 50px;
    border: 1px solid ${props=>props.theme.colors.primary};
    border-radius: 10px;
    color: ${props=>props.theme.colors.text};
    cursor: pointer;

    background: linear-gradient(to left, transparent 50%, ${props=>props.theme.colors.primary} 50%) right;
    background-size: 200%;
    transition: .5s ease-out;
    font-weight: 600;

    :hover{
        color: white;
        background-position: left;
    }
`

export default function ButtonCV(){
    return(
        <Button>
            <a href="/public/chat.png" download="curriculo">DOWNLOAD CV</a>
        </Button>
    )
}