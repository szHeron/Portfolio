import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from './nav';

const ModalMenu = styled.div`
  display: ${({open})=>open?"flex":"none"};
  position: absolute;
  top: 0;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100vw;
  background-color: ${props=>props.theme.colors.background};
  z-index: 2;
`

const MenuIcon = styled.div`
    width: 2rem;
    height: 2rem;
    position: relative;
    z-index: 3;
    display: none;
    top: 20px;
    left: 20px;
    cursor: pointer;

    @media (max-width: 768px) {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${props=>props.theme.colors.text};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <MenuIcon open={open} onClick={() => setOpen(!open)}>
        <div/>
        <div/>
        <div/>
      </MenuIcon>
      <ModalMenu open={open} onClick={() => setOpen(!open)}>
        <Nav/>
      </ModalMenu>
    </>
  )
}

export default Burger