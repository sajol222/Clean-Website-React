import { FaTimes } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';


export const SidebarContainer = styled.aside `
position : fixed;
z-index : 999;
width : 100%;
height : 100%;
background : #0d0d0d;
display : grid;
align-content : center;
-webkit-align-content:center;
justify-content : center;
-webkit-justify-content: center;
top : 0;
left : 0;
transition : 0.3s ease-in-out;
top : 0;
/* border : 1px solid yellow; */
/* opacity : {isopen ? '100%':'0'};
top : {isOpen ? '0' : '50%'}; This method dont work in styled components*/
opacity :  ${({isOpen}) => (isOpen ? '100%' : '0')}; 
top :  ${({isOpen}) => (isOpen ? '0' : '50%')}; 
left :  ${({isOpen}) => (isOpen ? '0' : '100%')}; 
`
export const CloseIcon = styled(FaTimes) `
color : #fff;
`

export const Icon = styled.div `
position : absolute;
top : 1.2rem;
right : 1.5rem;
background : transparent;
font-size: 2 rem;
cursor: pointer;
outline : none;

`
export const SidebarWrapper = styled.div `
color : #fff;
display : flex;
margin-left : -30px;
/* border : 1px solid red; */
`
export const SidebarMenu = styled.ul `
/* border : 1px solid blue; */

display : grid;
justify-content: center;
grid-template-columns: 1fr;
grid-template-rows: repeat(5,80px);


@media screen and (max-width : 450px){
    grid-template-rows: repeat(5,60px);
    justify-content: center;
}
`


export const SidebarLinks = styled(LinkR)`
text-decoration : none;
color : #fff;
font-size :  1.2rem;
display : flex;
/* transition : all 0.3s ease-in-out; */
align-self: center;
justify-self: center;
padding-bottom: 5px;
/* border : 1px solid green; */

/* &.active {
    border-bottom : 3px solid #01bf71;
} */

&:hover {
    border-bottom : 3px solid #01bf71;
}
`
export const SidebarBtnWrapper = styled.div `
display : flex;
justify-content : ;
`
export const SidebarBtn = styled.button `
border-radius: 50px;
background: #01bf71;
white-space : nowrap;
padding : 10px 22px;
color : #010606;
font-size : 15px;
outline : none;
border : none;
cursor: pointer;
transition : all 0.2  ease-in-out;
text-decoration: none;

&:hover{
    transition : all 0.2  ease-in-out;
    background : #fff;
    color : #010606;
}
`