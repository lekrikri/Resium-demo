import React from 'react';
import styled from 'styled-components'
import IconAdd from '../../assets//Utils/Add.svg'

export const CreateTile = () => {
	// const [inputList, setInputList] = useState([]);
	// const AddTile = event => {
	// 	return (
	// 		console.log("Here")
	// 	)
	// };
	return (
		<TilesContainer>
			<StyledTile>
				<DivImg>
					<img src={IconAdd} />
				</DivImg>
				<TextInTile>
					Create Workspace
				</TextInTile>
			</StyledTile>
		</TilesContainer>
	);
};

const StyledTile = styled.div`
	position: absolute;
	height: 128px;
	width: 177px;
	border-radius: 1px;
	border: 2px dashed #5FF1F1;
	background: transparent;
	&:hover{
		cursor: pointer;
		background-color: #0E2E4C;
}
`

const TilesContainer = styled.div` 
	display: grid;
	position: fixed;
	left: 165px;
	margin-top: 15px;
	@media(max-width: 500px) {
		left: 110px;
  }
`

const DivImg = styled.div`
	position: absolute;
  left: 50%;
  top: 40%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

const TextInTile = styled.div`
	font-size: 14px;
	font-weight: 500;
	line-height: 17px;
	text-align: center;
	color: #5FF1F1;
	position: relative;
  left: 50%;
  top: 65%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`