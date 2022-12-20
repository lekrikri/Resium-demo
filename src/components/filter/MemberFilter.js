import {
	AppBar,
	Button,
	Stack,
	Box,
} from '@mui/material';

export function MemberFilter() {
	return (
		<Box
			mt={1}

			sx={{ width: '100%' }}>
			<AppBar position='sticky' color='transparent' elevation={0}>
				<Stack spacing={1.5} direction='row'
					justifyContent='center' mb={5}>
					<Box sx={{ width: '90%', display: 'flex' }}>
						<Button
							sx={{
								color: '#5FF1F1',
								backgroundColor: '#0D1015',
								width: '75%',
								justifyContent: 'flex-start',
							}}
							variant='contained'>
							+ Add member
						</Button>
						<Stack spacing={1.5} direction='row' justifyContent='flex-end' sx={{ width: '25%', borderBottom: '#1A2129 solid', paddingBottom:'7px', marginLeft:'16px'}}>
							<Button
								sx={{
									height: '25px',
									color: 'common.white',
									backgroundColor: '#171E26',
								}}>
								INVENTED
							</Button>
							<Button
								sx={{
									height: '25px',
									color: 'common.white',
									backgroundColor: '#171E26',
								}}>
								MEMBER
							</Button>
							<Button
								sx={{
									height: '25px',
									color: 'common.white',
									backgroundColor: '#171E26',
								}}>
								OWNER
							</Button>
						</Stack>
					</Box>
				</Stack>
			</AppBar>
		</Box >
	);
};
