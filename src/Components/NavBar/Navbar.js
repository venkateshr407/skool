import React from "react";
import {
        Nav,
        NavLink,
        Bars,
        NavMenu,
        NavBtn,
        LogoImage,
        NavBtnLink
      } from './NavbarStyled';
import Logo from '../../Asset/Logo.png';

export const NavBar = ( {toggle}) => {
    return (
        <>
        <Nav>
        <NavLink to='/'>
          <LogoImage src={Logo} alt='logo' />
        </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to='/' >
            About Us
          </NavLink>
          <NavLink to='/' >
            Our Programme
          </NavLink>
         
          <NavBtnLink to='/sign-in'>Book a free Demo Now</NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
        </>
    );
};

