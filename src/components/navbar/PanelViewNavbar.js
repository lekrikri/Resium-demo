import { useState } from "react";
import { BtnClose } from "../../GlobalStyles";
import { ReactComponent as IconProjectSvg } from "../../assets/Utils/Project.svg";
import { ReactComponent as BgNavbarSvg } from "../../assets/Background/Navbar.svg";
import { ReactComponent as IconAddProject } from "../../assets/Utils/AddProject.svg";
//TODO custom background image for projects
import bgProject from "../../assets/Background/Project.svg";

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Grid,
  Tabs,
  Tab,
} from "@mui/material";

export function PanelViewNavbar() {
  return (
    <>
      <AppBar position="static" color={"transparent"} elevation={0}>
        <Toolbar>
          <CurrentProject />
          <ShowProjects />
          <BtnClose />
        </Toolbar>
      </AppBar>
    </>
  );
}

function CurrentProject() {
  return (
    <Grid container spacing={2} ml={3} mt={1} style={{ display: "contents" }}>
      <Grid item>
        <BgNavbarSvg />
      </Grid>
      <Grid item>
        <IconProjectSvg />
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Box component="span" sx={{ fontSize: "14px" }}>
              ENERGIES RENOUVELABLES
            </Box>
          </Grid>
          <Grid item>
            <Box component="span" sx={{ fontSize: "12px", color: "#3F4B5B" }}>
              GUADELOUPE
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function ShowProjects() {
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container wrap="nowrap" direction="row">
      <Grid item>
        <IconButton>
          <IconAddProject />
        </IconButton>
      </Grid>
      <Grid item>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          value={value}
          onChange={handleTabChange}
          textColor="inherit"
          TabIndicatorProps={{
            sx: { backgroundColor: "#1464A1" },
          }}
          sx={{
            maxWidth: 1400,
            mx: "auto",
            "& button.MuiTab-root": { textTransform: "none" },
            "& button:active": { backgroundColor: "#5FF1F1" },
            "& button:hover": { backgroundColor: "#1464A1" },
            "& button.Mui-selected": { backgroundColor: "#1464A1" },
          }}
        >
          <Tab label="Projet Biomasse" />
          <Tab label="Projet Eolien" />
          <Tab label="Projet Hydraulique" />
          <Tab label="Projet Géothermie" />
        </Tabs>
      </Grid>
    </Grid>
  );
}
