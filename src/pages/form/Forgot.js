import { Background, LinkStyled, InputWrapper } from "../../GlobalStyles"
import { Button, Wrapper, BtnSendMail } from "../../components/Form/Form"
import { FormContainer, TextField } from "../../components/Form/Form.styles"
import { View } from "react-native"

const Forgot = () => {
	return (
		<Background>
			<FormContainer>
					<h4 style={{textAlign: "center"}}>Forgot password</h4>
					<p>Enter your email address. A verification code will be send.</p>
					<TextField placeholder="E-mail"></TextField>
					<Button value="SEND"/>
					<p>If you have not yet received an e-mail, click down</p>
				<InputWrapper>
					<BtnSendMail placeholder="Resend email"></BtnSendMail>
				</InputWrapper>
								<br />
				<br />
				<View style={Wrapper.FormContainer}>
						<p>Already have an account ? </p>
						<LinkStyled href="/Login">Sign in</LinkStyled>
				</View>
			</FormContainer>
		</Background>
	)
}

export default Forgot;
