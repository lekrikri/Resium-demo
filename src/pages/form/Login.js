import React, { useState } from "react"
import FormBackground from "../../components/background/Form"
import FormContainer from "../../components/container/Form"
import { LinkStyled, InputWrapper } from "../../GlobalStyles"
import { TextField } from "../../components/Form/Form.styles"
import { Password, Checkbox, Button, Wrapper } from "../../components/Form/Form"
import { View } from "react-native"
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<>
		<FormBackground />
			<FormContainer>
				<h4 style={{ textAlign: "center" }}>Sign In</h4>
				<p>Access to your platform and start building your project.</p>
				<form>
					<TextField placeholder="E-mail or Username"></TextField>
					<Password type="password" placeholder="Password"></Password>
					<InputWrapper>
						<Checkbox value="Remember me" />
						<LinkStyled href="/Forgot" align="right">Forgot your password ?</LinkStyled>
					</InputWrapper>
					<Link
						to="/Home"
						style={{ textDecoration: "none" }}
					>
						<Button value="LOG IN" />
					</Link>
				</form>
				<br />
				<View style={Wrapper.FormContainer}>
					<p>Not registered yet ? </p>
					<LinkStyled href="/SignUp">Create an account</LinkStyled>
				</View>
			</FormContainer>
		</>
	);
};

export default Login;