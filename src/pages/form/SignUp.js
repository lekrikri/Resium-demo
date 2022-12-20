import React, { useState } from "react"
import { Background, LinkStyled, InputWrapper } from "../../GlobalStyles"
import ReCAPTCHA from "react-google-recaptcha"
import { View } from "react-native"
import { Button, Password, Wrapper } from "../../components/Form/Form"
import { FormContainer, TextField } from "../../components/Form/Form.styles"


const SignUp = () => {
	const [password, setPassword] = useState("");
	const [confirmPass, setConfirmPass] = useState("");

	function onChange(value) {
		console.log('Captcha value:', value);
	}
	return (
		<Background>
			<FormContainer>
				<h4 style={{ textAlign: "center" }}>Sign Up</h4>
				<p>Access to your platform and start building your project.</p>
				<TextField placeholder="Username"></TextField>
					<br />
				<TextField placeholder="E-mail"></TextField>
					<br />
				<Password type="password" placeholder="Password"
					onChange={(e) => setPassword(e.target.value)} />
				{password.length < 6 && password.length > 3 && (
					<p>Le mot de passe être de 6 caractères minimum</p>
				)}
				<Password type="password" placeholder="Confirm password"
					onChange={(e) => setConfirmPass(e.target.value)} />
				{confirmPass.length > 4 && password !== confirmPass && (
					<p>Les mots de passes ne correspondent pas</p>
				)}
				<InputWrapper>
				<ReCAPTCHA
					sitekey={"6LeAv7ghAAAAANuICtilQNA2opBGUazqoAh1NJtI"}
					onChange={onChange}
					theme="dark"
					/>
					</InputWrapper>
				<Button value="Create" />
				<View style={Wrapper.FormContainer}>
					<p>Already have an account ? </p>
					<LinkStyled href="/Login">Sign in</LinkStyled>
				</View>
			</FormContainer>
		</Background>
	);
};

export default SignUp;