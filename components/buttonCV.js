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
            <a alt="Curriculo" href='https://docs.google.com/uc?export=download&id=16fIPJEZg9ifRbSk3gLnLtRtAij6-khup'>DOWNLOAD CV</a>
        </Button>
    )
}

