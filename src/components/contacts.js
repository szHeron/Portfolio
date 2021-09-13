import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const IconsArea = styled.div`
    display: flex;
    width: 30vw;
    flex-direction: row; 
    justify-content: space-around;
    z-index: 1;
`

const StyledIcon = styled(FontAwesomeIcon)`
    overflow: hidden;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    &:hover{
        -moz-transform: scale(1.3);
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }
`

export default function Contatos() {
    library.add(fab);
    library.add(fas);
    return (
        <IconsArea>
            <a href="https://github.com/szHeron" target="_blank" rel="noreferrer">
                <StyledIcon icon={["fab", "github"]} size={'lg'}/>
            </a>
            <a href="mailto: contatoheron.dev@gmail.com" target="_blank" rel="noreferrer">
                <StyledIcon icon={["fas", "envelope"]} size={'lg'}/>
            </a> 
            <a href="https://www.linkedin.com/in/heronrodrigues/" target="_blank" rel="noreferrer">
                <StyledIcon icon={["fab", "linkedin"]} size={'lg'}/>
            </a> 
        </IconsArea>
    );
};