import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { LinkStyled } from "../../GlobalStyles";
import {	DivBtnSend,
					StyledPwd,
					BtnContainer,
					BtnForm } from "./Form.styles";
import BtnRefresh from "../../assets/button/Refresh.svg";
import eyeClose from "../../assets/Utils/EyeClose.svg";
import eyeOpen from "../../assets/Utils/EyeOpen.svg";

export function Button(props) {
	return (
		<BtnContainer>
				<BtnForm>{props.value}</BtnForm>
		</BtnContainer>
	);
}

export const BtnSendMail = (props) => {
	return (
		<DivBtnSend>
			<img alt="refreshIcon" src={BtnRefresh} />
			{/* TODO action send MAIL */}
			<LinkStyled href="/Forgot" align={props.align ? props.align : "center"}>{props.placeholder}</LinkStyled>
		</DivBtnSend>
	);
};

export function Password(props) {
	const	[is_hidden, set_hidden] = useState(false);
	const	show_password= () => {
		set_hidden(!is_hidden);
	};
	return (
		<div style={{display: "flex"}}>
			<StyledPwd type={is_hidden ? "text" : "password"} placeholder={props.placeholder}/>
		<img onClick={show_password} src={is_hidden ? eyeOpen : eyeClose}/>
		</div>
	);
}

export function Checkbox(props) {
	const [isCheck, setCheck] = useState(false);
	const handleCheck = () => {
		setCheck(!isCheck);
	};
	return (
		<>
			<br />
			<label>
				<input
					type="checkbox"
					checked={isCheck}
					onChange={handleCheck}
				/>
				{(props.value)}
			</label>
		</>
	);
};

export const Wrapper = StyleSheet.create({
	FormContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
});
