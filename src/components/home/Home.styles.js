import styled from 'styled-components'
import Homebg from '../../assets/Background/Home.svg'
import UnderLine from "../../assets/Background/UnderlineSection.svg";
import IconWorkspace from '../../assets/Utils/Workspace.svg'
import IconSetting from '../../assets/Utils/Setting.svg'
import IconLogOut from '../../assets/Utils/LogOut.svg'
import IconUser from '../../assets/Utils/User.svg'


export const HomeBackground = styled.div`
	background-image: url(${Homebg});
	background-repeat: no-repeat;
	background-position: 100% 50%;
  height: 100%;
`

const StyledMainContainer = styled.div`
	margin-left: 24px;
	margin-top: 199px;
	display: block;
	width: 30%;
`

export const Container = styled.div`
	margin-left: 24px;
	margin-top: 44px;
	display: block;
	width: 30%;
`

export const Text = styled.p`
	font-weight: 500;
	font-size: 16px;
`

const Wrapper = styled.div`
	width: 100%;
	display: grid;
`

const Btn = styled.button`
	background: #13181E;
	border-width: 0;
	height: 45px;
	width: 173px;
	&:hover{
		cursor: pointer;
}
`

const StyledSpan = styled.span`
	color: #3F4B5B;
`

const DivLogOut = styled.div`
	position: absolute;
	top: 875px;
	left: 24px;
`

const StyledUserContainer = styled.div`
	display: flex;
	position: absolute;
	top: 199px;
	right: 56px;
	border: solid #3F4B5B 1px;
	border-radius: 24.5px;
	align-items: center;
`

const StyledUserDiv = styled.div`
	display : block;
	margin: 0;
`

const InputUsername = styled.h5`
	font-weight: 500;
	font-size: 16px;
	white-space: pre-wrap;
	margin: 1px 16px 1px 8px;
`

const TextMail = styled.h6`
	font-weight: 400;
	font-size: 12px;
	white-space: pre-wrap;
	color: #3F4B5B;
	margin: 1px 16px 1px 8px;
	text-decoration: underline;
`

export function UserContainer(props) {
	return (
		<StyledUserContainer>
				<img alt="User" src={IconUser} style={{margin:"10px"}}/>
				<StyledUserDiv>
					<InputUsername>{props.fullname}</InputUsername>
					<TextMail>{props.mail}</TextMail>
				</StyledUserDiv>
		</StyledUserContainer>
	)
}

export function MainContainer() {
	return (
		<StyledMainContainer>
			<h3>DTE Studio</h3>
			<h1>DIGITAL TWIN EARTH STUDIO</h1>
			<img alt="" src={UnderLine} ></img>
		</StyledMainContainer>
	)
}

export function BtnWorkspace() {
	return (
		<>
			<Wrapper>
				<Btn>
					<img alt="Workspace" src={IconWorkspace} style={{ textAlign: 'left' }} />
					<StyledSpan>My workspace</StyledSpan>
				</Btn>
				<br />
				<Btn>
					<img alt="Settings" src={IconSetting} style={{ textAlign: 'left' }} />
					<StyledSpan>Settings</StyledSpan>
				</Btn>
			</Wrapper>
			<DivLogOut>
				<Btn>
					<img alt="LogOut" src={IconLogOut} style={{ textAlign: 'left' }} />
					<StyledSpan>Log Out</StyledSpan>
				</Btn>
			</DivLogOut>
		</>
	);
}
