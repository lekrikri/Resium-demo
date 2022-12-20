import { Background, LinkStyled } from "../../GlobalStyles"
import { FormContainer } from "../../components/Form/Form.styles"
import { Button, Wrapper, Password } from "../../components/Form/Form"
import { View } from "react-native"

const ResetPassword = () => {
	return (
		<Background>
			<FormContainer>
				<h4 style={{textAlign: "center"}}>Reset password</h4>
				<p>Create a new account to access your account.</p>
				<Password type="password" placeholder="Old password"></Password>
				<Password type="password" placeholder="New password"></Password>
				<Password type="password" placeholder="Confirm new password"></Password>
				<Button value="RESET"/>
				<View style={Wrapper.FormContainer}>
					<p>Already have an account ? </p>
					<LinkStyled href="/Login">Sign in</LinkStyled>
				</View>
			</FormContainer>
		</Background>
	)
}

export default ResetPassword;