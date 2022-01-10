import { useState } from 'react';
import styled from "styled-components";
import Contatos from './contacts';

const Footer = styled.footer`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;
    bottom: 10px;
    width: 50%;
    z-index: 1;

    @media (max-width: 360px){
        position: relative;
    }
`

export default function Copy(props){
    const [style, setStyle] = useState(() => {return props.style?props.style:{}});
    return(
        <Footer style={style}>
            <Contatos/>
            <p>&copy;2022 Heron</p>
        </Footer>
    )
}
