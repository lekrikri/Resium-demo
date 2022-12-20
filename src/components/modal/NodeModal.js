import { styled, TextField, Box, Typography, Modal, } from '@mui/material';

const SxBox = styled(Box)({
	marginTop: '2%',
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	height: '60%',
	width: '40%',
	backgroundColor: 'background.paper',
	boxShadow: 24,
});

function NodeModal({ openModal, handleCloseModal }) {
	return (
		<>
			<Modal
				open={openModal}
				onClose={handleCloseModal}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<SxBox>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Node Configuration
					</Typography>
					<Typography id="modal-modal-description">
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography>
					<TextField id="outlined-basic" label="Outlined" variant="outlined" />
					<TextField id="filled-basic" label="Filled" variant="filled" />
				</SxBox>
			</Modal>
		</>
	);
};

export default NodeModal;
