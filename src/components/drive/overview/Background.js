import styled from 'styled-components'
import bgOverview from '../../assets/backgroundOverview.png'

export const Background = styled.div`
	position:fixed;
	padding:0;
	margin:0;
	top:0;
	left:0;
	width: 100%;
	height: 100%;
	background: #08090C;
	background-image: url(${bgOverview});
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 95% 95%;
`