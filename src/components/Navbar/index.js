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


function Navbar() {
    return(
        <>
            <Nav>
                <NavBarContainer>
                    <NavbarLogo to ='/'>
                        sajol
                    </NavbarLogo>

                    <MobileIcon>
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
                        <NavBtnLink to = '/signin'>
                            Sign In
                        </NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
        </>
    )
}
export default Navbar;