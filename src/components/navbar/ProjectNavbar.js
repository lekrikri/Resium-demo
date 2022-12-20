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

export function ProjectNavbar() {
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
              WS POLLUTION NICE
            </Box>
          </Grid>
          <Grid item>
            <Box component="span" sx={{ fontSize: "12px", color: "#3F4B5B" }}>
              Ref: PNC02
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
          <Tab label="Project 1" />
          <Tab label="Project 2" />
          <Tab label="Project 3" />
          <Tab label="Project 4" />
          <Tab label="Project 6" />
          <Tab label="Project 7" />
          <Tab label="Project 8" />
          <Tab label="Project 9" />
          <Tab label="Project 10" />
          <Tab label="Project 11" />
          <Tab label="Project 12" />
          <Tab label="Project 13" />
          <Tab label="Project 14" />
          <Tab label="Project 15" />
          <Tab label="Project 16" />
          <Tab label="Project 17" />
          <Tab label="Project 18" />
          <Tab label="Project 19" />
          <Tab label="Project 20" />
          <Tab label="Project 21" />
          <Tab label="Project 22" />
          <Tab label="Project 23" />
          <Tab label="Project 24" />
          <Tab label="Project 25" />
          <Tab label="Project 26" />
          <Tab label="Project 27" />
          <Tab label="Project 28" />
          <Tab label="Project 29" />
          <Tab label="Project 30" />
        </Tabs>
      </Grid>
    </Grid>
  );
}
