import styled from "styled-components"
import IconAddProject from "../../../assets/Utils/AddProject.svg"

const StyledAddProject = styled.button`
	margin-left: 42px;
	height: 30px;
	width: 30px;
	border-radius: 7px;
	background-image: url(${IconAddProject});
	background-repeat: no-repeat;
	background-color: transparent;
	border-width: 0;
	&:hover{
		cursor: pointer;
		background-color: #0E2E4C;
}
`

export default StyledAddProject;