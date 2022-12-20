import styled from "styled-components"
import bgNavbar from "../../../assets/Background/Navbar.svg"
import IconProject from "../../../assets/Utils/Project.svg"
import bgProject from "../../../assets/Background/Project.svg"
import IconDoubleArrow from "../../../assets/Utils/DoubleArrow.svg"
import { Background, GridWrapper, BtnClose } from "../../../GlobalStyles"
import StyledAddProject from "./BtnAddProject"

export function ProjectNavbar() {
	return (
			<NavbarDiv>
				<StyledImg />
				<CurrentProject />
				<ShowProjects />
				<BtnDoubleArrow />
				<BtnClose />
			</NavbarDiv>
	)
}

const NavbarDiv = styled.div`
	display: flex;
	margin-top: 22px;
	margin-right: 42px;
	margin-left: 42px;
	width: 95%;
	border-top: solid #175682 1px;
	padding-top: 10px;
`
const StyledImg = styled.div`
	float: left;
	width: 6px;
	height: 20px;
	background-image: url(${bgNavbar});
`

function CurrentProject() {
	return (
		<>
			<ProjectImg />
			<ProjectData>
				<ProjectName>WS POLLUTION NICE</ProjectName>
				<RefProject>Ref: PNC02</RefProject>
			</ProjectData>
		</>
	)
}

const ProjectData = styled(GridWrapper)`
	margin-left: 8px;
`

const ProjectImg = styled.div`
	float: left;
	width: 20px;
	height: 20px;
	margin: 0 0 0 20px;
	background-image: url(${IconProject});
	background-repeat: no-repeat;
`
const ProjectName = styled.span`
	margin: 0;
	vertical-align: text-top;
	font-weight: 500;
	font-size: 14px;
`
const RefProject = styled.span`
	vertical-align: text-top;
	margin: 0;
	font-weight: 500;
	font-size: 12px;
	color: #3F4B5B;
`

function ShowProjects() {
	return (
		<>
			<StyledAddProject />
			<ProjectContainer />
			<ProjectContainer />
			<ProjectContainer />
		</>
	)
}

const ProjectContainer = styled.div`
	margin-left: 16px;
	background-image: url(${bgProject});
	background-repeat: no-repeat;
	width: 90px;
	height: 19px;
`

const BtnDoubleArrow = styled.div`
	margin-left: 1021px;
	width: 12px;
	height: 8px;
	background-image: url(${IconDoubleArrow});
	background-repeat: no-repeat;
	width: 15px;
	height: 10px;
`
