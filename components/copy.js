import { useState } from 'react';
import styled from "styled-components";
import Contatos from './contacts';

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;
    position: absolute;
    bottom: 3px;
    z-index: 1;

    p{
        margin-bottom: 2px;
    }
`

export default function Copy(props){
    const [style, setStyle] = useState(() => {return props.style?props.style:{}});
    return(
        <Footer style={style}>
            <Contatos/>
            <p>&copy;2021 Heron</p>
        </Footer>
    )
}