import React from 'react';
import { Background, NotifContainer, InputWrapper } from "../../GlobalStyles"
import IconSuccess from '../../assets/Utils/Success.svg';
import { View } from "react-native";
import { Wrapper, Button } from "../../components/Form/Form"


const NotifPage = () => {
	return (
		<Background>
			<NotifContainer>
				<View style={Wrapper.FormContainer}>
					<img src={IconSuccess} ></img>
					<h2> SUCCESSFUL</h2>
				</View>
				<div style={{textAlign: "center"}}>
					<p>Congrats !</p>
					<p>your password has been successfully reset.</p>
				</div>
				<Button value="BACK TO LOGIN" />
			</NotifContainer>
		</Background>
	);
};

export default NotifPage;