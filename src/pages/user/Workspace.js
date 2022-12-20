import { Background } from '../../components/workspace/Background';
import { NavBar } from "../../components/workspace/NavBar";
import { CreateTile } from '../../components/workspace/Tiles';

const Workspace = () => {
	return (
		<Background>
			<NavBar />
			<CreateTile />
		</Background>
	);
};

export default Workspace;