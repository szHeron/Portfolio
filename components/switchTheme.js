import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import light from '../styles/themes/light'
import dark from '../styles/themes/dark';

const StyledIcon = styled(FontAwesomeIcon)`
    position: absolute;
    right: 3%;
    top: 3%;
    z-index: 1;
    cursor: pointer;
`

export default function SwitchTheme({theme, setTheme}){
    const toggleTheme = () => {theme.title === 'light'?setTheme(dark):setTheme(light)};
    const icon = theme.title === 'light'?"moon":"sun"
    
    library.add(fas);

    return(
        <StyledIcon onClick={toggleTheme} icon={["fas", icon]} size={'lg'}/>
    );
}