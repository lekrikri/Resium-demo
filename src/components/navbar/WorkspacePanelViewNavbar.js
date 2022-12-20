import { AppBar, Toolbar, Button } from "@mui/material";
import { ReactComponent as DriveSvg } from "../../assets/icon/DriveFocus.svg";
import { ReactComponent as StudioSvg } from "../../assets/icon/StudioFocus.svg";
import { ReactComponent as PanelViewSvg } from "../../assets/icon/PanelViewFocus.svg";
import { ReactComponent as NavbarSvg } from "../../assets/Container/Navbar.svg";
import { Link } from "react-router-dom";

export function WorkspacePanelViewNavbar() {
  return (
    <AppBar
      position="static"
      color={"transparent"}
      elevation={0}
      style={{ alignItems: "center" }}
    >
      <Toolbar>
        <Button component={Link} to="/Overview">
          <DriveSvg className="DriveSvg" />
        </Button>
        <Button component={Link} to="/Studio">
          <StudioSvg className="StudioSvg" />
        </Button>
        <Button component={Link} to="/PanelView">
          <PanelViewSvg className="PanelViewSvg" />
        </Button>
      </Toolbar>
      <NavbarSvg className="Navbarsvg" />
    </AppBar>
  );
}
