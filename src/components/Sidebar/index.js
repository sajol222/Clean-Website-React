import React from 'react';
import {
    CloseIcon,
    Icon,

    SidebarBtn,
    SidebarBtnWrapper,
    SidebarContainer,
    SidebarLinks,
    SidebarMenu,
    SidebarWrapper
} from './SidebarElements';
const Sidebar = ({isOpen,toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} toggle={toggle}>
                <Icon >
                    <CloseIcon onClick={toggle}/>
                </Icon>

                <SidebarWrapper>
                    <SidebarMenu>
                    
                        <SidebarLinks onClick={toggle}>
                            About
                        </SidebarLinks>
                    
                        <SidebarLinks onClick={toggle}>
                            Home
                        </SidebarLinks>
                    
                        <SidebarLinks onClick={toggle}>
                            Contact
                        </SidebarLinks>

                        <SidebarLinks onClick={toggle}>
                            Sign Up
                        </SidebarLinks>

                    </SidebarMenu>  
                </SidebarWrapper>

                <SidebarBtnWrapper>
                    <SidebarBtn>
                        Sign In
                    </SidebarBtn>
                </SidebarBtnWrapper>
                
            </SidebarContainer>
        </>
    )
}

export default Sidebar;
