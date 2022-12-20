import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#13181E',
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
		color: '#DEDEE4',
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: '#252C3C',
	},
	'&:nth-of-type(even)': {
		backgroundColor: '#13181E',
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

function createData(name, last, org, role) {
	return { name, last, org, role };
}

const rows = [
	createData('Toto', 'Bobo', 'Gael', 4.0),
	createData('Tutu', 'Bubu', 'Gael', 4.3),
	createData('Titi', 'Bibi', 'Gael', 6.0),
	createData('Tata', 'Baba', 'Gael', 4.3),
	createData('Tete', 'Bebe', 'Gael', 3.9),
];

export default function CustomizedTables() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 400 }} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell align="left">Last&nbsp;Name</StyledTableCell>
						<StyledTableCell align="left">First&nbsp;Name</StyledTableCell>
						<StyledTableCell align="left">Organization</StyledTableCell>
						<StyledTableCell align="left">Role</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={row.name}>
							<StyledTableCell component="th" scope="row">
								{row.name}
							</StyledTableCell>
							<StyledTableCell align="left">{row.last}</StyledTableCell>
							<StyledTableCell align="left">{row.org}</StyledTableCell>
							<StyledTableCell align="left">{row.role}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
