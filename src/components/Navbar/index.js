import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
    MobileIcon,
    Nav,
    NavBarContainer,
    NavbarLogo,
    NavBtn,
    NavBtnLink, NavElements,
    NavItems,
    NavLinks
} from './navbarElements';


const Navbar=({toggle})=> {
    return(
        <>
            <Nav>
                <NavBarContainer >
                    <NavbarLogo to ='/'>
                        sajol
                    </NavbarLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavElements>
                    <NavItems>
                        <NavLinks to = '/'>
                            About
                        </NavLinks>
                    </NavItems>
                    
                        <NavItems>
                        <NavLinks to = '/'>
                            Home
                        </NavLinks>
                    </NavItems>

                    <NavItems>
                        <NavLinks to = '/'>
                            Contact
                        </NavLinks>
                    </NavItems>
                    
                    </NavElements>

                    <NavBtn>
                        <NavBtnLink to = '/signin' >
                            Sign In
                        </NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
        </>
    )
}
export default Navbar;