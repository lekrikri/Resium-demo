import styled from 'styled-components'
import IconSearch from '../../assets/Utils/Search.svg'
import IconRollBack from "../../assets/Utils/RollBack.svg"
import { Link } from 'react-router-dom';

export function NavBar() {
	return (
		<NavbarDiv>
			<Title />
			<SearchField />
		</NavbarDiv>
	);
};

const NavbarDiv = styled.div`
	width: 100%;
`
// ________________________________________________________________ \\
function SearchField() {
	return (
		<SearchDiv>
			<img src={IconSearch} />
			<InputField type="text" placeholder="Search a workspace" />
		</SearchDiv>
	);
};

const InputField = styled.input`
	width: 380px;
	height: 1rem;
	padding: 10px;
	outline: 0;
	border-width: 0 0 1px;
	border-color: #3F4B5B;
	background: transparent;
`
const SearchDiv = styled.div`
	display: flex;
	margin: 20px;
	position: relative;
	left: 135px;
`
// ________________________________________________________________ \\
const RollBack = () => {
	return (
		<StyledRollBack>
			<img alt='Return' src={IconRollBack} />
			<Link
				to="/Overview"
				style={{ textDecoration: "none" }}
			>
				<StyledSpan>
					Back Home screen
				</StyledSpan>
			</Link>
		</StyledRollBack>
	);
};

const StyledRollBack = styled.div`
	display: inline-flex;
	align-items: center;
	height: 15px;
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	color: #54D4D5;
	float: right;
	&:hover{
			cursor: pointer;
	}
`
const StyledSpan = styled.span`
	color: #54D4D5;
	padding-left: 11px;
	@media(max-width: 1400px) {
		visibility: hidden;
  }
`
// ________________________________________________________________ \\
function Title() {
	return (
		<TitleContainer>
			<RollBack />
			<TitleH1>WORKSPACE</TitleH1>
			<TitleH2>Manage all your workspace</TitleH2>
		</TitleContainer>
	)
}

const TitleH1 = styled.h2`
	font-size: 18px;
	font-weight: 500;
`
const TitleH2 = styled.h3`
	font-weight: 500;
	font-size: 13px;
	color: #3F4B5B;
`
const TitleContainer = styled.div`
	margin-left: 160px;
	margin-top: 100px;
	display: block;
	width: 81%;
	@media(max-width: 500px) {
		margin-left: 110px;
  }
`