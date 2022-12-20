import React from 'react';
import {
	List,
	ListItem,
	IconButton,
} from '@mui/material'
import { ReactComponent as Alien } from '../../assets/icon/Alien.svg'
import { ReactComponent as Audio } from '../../assets/icon/Audio.svg'
import { ReactComponent as Barrel } from '../../assets/icon/Barrel.svg'
import { ReactComponent as Cube } from '../../assets/icon/Cube.svg'
import { ReactComponent as Histogram } from '../../assets/icon/Histogram.svg'
import { ReactComponent as Landscape } from '../../assets/icon/Landscape.svg'
import { ReactComponent as Photo } from '../../assets/icon/Photo.svg'
import { ReactComponent as Play } from '../../assets/icon/Play.svg'
import { ReactComponent as Sheet } from '../../assets/icon/Sheet.svg'

export function DataFilter() {
	return (
		<List sx={{ maxWidth: 65, bgcolor: 'transparent' }}>
			<ListItem>
				<IconButton>
					<Cube />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton>
					<Barrel />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton>
					<Histogram />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton>
					<Sheet />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton>
					<Alien />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton>
					<Landscape />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton>
					<Play />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton>
					<Audio />
				</IconButton>
			</ListItem>
			<ListItem>
				<IconButton>
					<Photo />
				</IconButton>
			</ListItem>
		</List>
	);
};
