import styled from 'styled-components'
import { StyledButton } from '../../GlobalStyles'
import BgForm from "../../assets/Container/Form.svg"


export const FormContainer = styled.div`
	display: block;
	flex-direction: column;
	align-items: left;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-image: url(${BgForm});
	background-size: 100% 100%;
	background-repeat: no-repeat;
	padding: 110px;
	@media screen and (max-width: 450px) {
		background-image: none;
	}
`

export const BtnForm = styled(StyledButton)`
	margin-top: 30px;
	font-weight: 500;
`

export const BtnContainer = styled.div`
  position: relative;
	text-align:center;
`

export const StyledPwd = styled.input`
	width: 82%;
	height: 1rem;
	padding: 1rem;
	outline: 0;
	border-width: 0 0 1px;
	border-color: #3F4B5B;
	background: transparent;
	color: "#DEDEE4";
`

export const StyledSpan = styled.span`
	width: 18px;
	height: 14px;
	&:hover{
	cursor: pointer;
	}
`

export const DivBtnSend = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	&:hover{
	cursor: pointer;
	}
`

export const TextField = styled.input`
	width: 82%;
	height: 1rem;
	padding: 1rem;
	outline: 0;
	border-width: 0 0 1px;
	background-color: transparent;
`
