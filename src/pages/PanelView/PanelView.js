import React from "react";
import {
  Background,
  Heading,
  Subheadind,
  Text,
  PanelViewNavbar,
  WorkspacePanelViewNavbar,
  StudioNavbar,
  CustomizedTables,
} from "../drive/index";
import { Grid } from "@mui/material";
import MapCesium from "../../components/cesium/MapCesium";

// TODO remove only for demo
import { ReactComponent as Gauge } from "../../assets/DemoOnly_ToRemove/gauge.svg";
import { ReactComponent as ProgressBar } from "../../assets/DemoOnly_ToRemove/progressBar.svg";
import { ReactComponent as LayerBiomasse } from "../../assets/icon/LayerBiomasse.svg";
import { ReactComponent as LayerHydraulique } from "../../assets/icon/LayerHydraulique.svg";
import { ReactComponent as LayerPhotovoltaique } from "../../assets/icon/LayerPhotovoltaique.svg";
import { ReactComponent as LayerEolien } from "../../assets/icon/LayerEolien.svg";
import { ReactComponent as LayerGeothermie } from "../../assets/icon/LayerGeothermie.svg";
import { ReactComponent as RectLine99 } from "../../assets/Background/rectangle_form/Line 99.svg";
import { ReactComponent as Rect97 } from "../../assets/Background/rectangle_form/Rectangle 97.svg";

// TODO remove only for demo

const PanelView = () => {
  return (
    <Background>
      <PanelViewNavbar />
      <WorkspacePanelViewNavbar />
      <Grid container spacing={4} ml={3} direction="row">
        <Grid item sm={12} md={6} lg={4}>
          <Heading className="layerpaneltext">Layer Panel</Heading>
          <LayerBiomasse className="layerbiomasseicon" />
          <LayerHydraulique className="layerhydrauliqueicon" />
          <LayerPhotovoltaique className="layerphotovoltaiqueicon" />
          <LayerEolien className="layereolienicon" />
          <LayerGeothermie className="layergeothermieicon" />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <MapCesium className="guadeloupeimage" />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Heading className="widgetpaneltext">Widgets</Heading>
          {/* <Subheadind>Lorem ipsum</Subheadind> */}
          <Gauge className="gauge" />
          {/* <Subheadind>Lorem ipsum</Subheadind> */}
          {/* <ProgressBar /> */}
          {/* <ProgressBar /> */}
        </Grid>
      </Grid>
      <StudioNavbar />
      <RectLine99 className="line99" />
      <RectLine99 className="line199" />
      <Rect97 className="rect97" />
    </Background>
  );
};

export default PanelView;
