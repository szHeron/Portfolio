import styled from 'styled-components';
import NavMobile from './navMobile';
import Nav from './nav';

const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    margin: auto;
    left: 0;
    right: 0;
    min-height: 10vh;
    height: 10vh;
    width: 75vw;
    padding: 20px;
    background-color: ${props=>props.theme.colors.primary};
    color: #fff;
    border-bottom-left-radius: 500px;
    border-bottom-right-radius: 500px;
    z-index: 1;

    @media (max-width: 768px) {
        display: none;
    }

    a{
        font-size: calc(0.6vw + 0.6vh + 1vmin);
    }
`

export default function Navbar(){
    return(
        <>
            <NavMobile/>
            <NavBar>
                <Nav/>
            </NavBar>
        </>
    );
};