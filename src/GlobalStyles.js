import styled, { createGlobalStyle } from "styled-components"
import Grid from "./assets/Background/Grid.svg"
import BgNotif from "./assets/Background/Notification.svg"
import IconBtn from "./assets/button/Default.svg"
import IconClose from "./assets/Utils/Close.svg"

const GlobalStyles = createGlobalStyle`
* {
	@import url("../assets/Inter-Regular.ttf");
	font-family: "Inter", sans-serif;
	color: #DEDEE4;
}
h1 {
	font-weight: 900;
	font-size: 40px;
	white-space: pre-wrap;
}
h2 {
	font-weight: 500;
	font-size: 20px;
	white-space: pre-wrap;
}
h3 {
	font-weight: 500;
	font-size: 20px;
	color: #3F4B5B;
	white-space: pre-wrap;
}
h4 {
	font-size: 18px;
}
button {
	font-size: 14px
}
p, span, input, a, label {
	font-size: 12px;
	white-space: pre-wrap;
}
`

export const StyledButton = styled.button`
	width: 214px;
	height: 47px;
	margin-top: 23px;
	background-image: url(${IconBtn});
	background-repeat: no-repeat;
	background-color: transparent;
	border-width: 0;
&:hover{
		cursor: pointer;
}
`

export const NotifContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position:fixed;
	padding:0;
	margin:0;
	width: 100%;
	height: 100%;
	background-image: url(${BgNotif});
	background-repeat: no-repeat;
	background-position: center center;
`

export const LinkStyled = styled.a`
	color:#1D93ED;
	text-decoration: underline;
	float: ${props => props.align};
	display: block;
&:hover{
		cursor: pointer;
}
&:active{
		color: white;
};
`

export const Background = styled.div`
	position:fixed;
	padding:0;
	margin:0;
	top:0;
	left:0;
	width: 100%;
	height: 100%;
	background: #08090C;
	background-image: url(${Grid});
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 100% 95%;
`

export const InputWrapper = styled.div`
	width: 100%;
	display: inline;
`
export const GridWrapper = styled.div`
	display : grid;
`

export const BtnClose = styled.button`
	margin-left: 25px;
	width: 30px;
	height: 34px;
	background-image: url(${IconClose});
	background-repeat: no-repeat;
	background-color: transparent;
	border-width: 0;
&:hover{
		cursor: pointer;
		background-color: #7B1B1B;
}
`

export default GlobalStyles;

//** Procedural grid gen 

// const BgGrid = styled.div`
//   margin-left: 20px;
//   margin-top: 100px;
//   margin-bottom: 100px;
//   width: 98%;
//   height: 80vh;
//   background: #08090C;
//   background-image: linear-gradient(to left, #0F1620 1px, transparent 1px),
//   					linear-gradient(to top, #0F1620 1px, transparent 1px);
//   background-size: 12em 12em;
// `