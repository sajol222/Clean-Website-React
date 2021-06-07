import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';


export const HeroContainer = styled.div `
background : #0c0c0c;
display : flex; 
justify-content: center;
align-items: center;
padding : 0 30px;
height : 600px;
position : relative;
z-index : 1;
`

export const HeroBg = styled.div `
position : absolute;
top: 0;
bottom : 0;
right : 0;
left : 0;
width : 100%;
height: 100%;
overflow : hidden;
`
export const VideoBg = styled.video `
width : 100%;
height : 100%;
-o-object-fit : cover;
object-fit : cover;
background : #232a34;
`

export const HeroContent = styled.div `
width : 800px;
z-index : 2;
/* border : 2px solid red;     */
display : grid;
justify-content : center;
align-items: center;
text-align : center;

@media screen and (max-width : 768px){
    font-size: 20px;
}
`
export const HeroH1 = styled.h1`
font-size : 30px;
color : #fff;

@media screen and (max-width : 768px){
    font-size: 20px;
}
`
export const HeroP= styled.p `
width : 500px;
font-size: 15px;
color : #fff;
font-weight: 100px;
margin-top : -10px;

@media screen and (max-width : 768px){
    font-size: 15px;
    width : 300px;
    margin-top: 3px;
}
`
export const HeroBtnWrapper= styled.div `
margin-top: 30px;
`
export const HeroBtn = styled(LinkR) `
border-radius: 50px;
background: #01bf71;
white-space : nowrap;
padding : 10px 22px;
color : #010606;
font-size : 18px;
font-weight: 500;
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
export const KeyArrow = styled(MdKeyboardArrowRight)`
font-size : 25px;
transform : translate(0,6px);
`
export const ArrowRight = styled(MdArrowForward)`
transform : translate(0,4px);
font-size : 20px;
`