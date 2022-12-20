// The URL on your server where CesiumJS's static files are hosted.

import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import {
  Viewer,
  Entity,
  PointGraphics,
  EntityDescription,
  Camera,
  CameraFlyTo,
  CameraLookAt,
  BillboardCollection,
  Billboard,
} from "resium";
import { Cartesian3, createWorldTerrain, Math as CesiumMath } from "cesium";

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token from your ion account

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0Yjk2MjAzMC02ZDA3LTRkMzEtYjQ4NC0xN2I1MTRhNTg1MTEiLCJpZCI6MTA1MDMyLCJpYXQiOjE2Njk2NDM1MjJ9.aoz6zX5LI1jsRLDXNhoLzuWbcCHwYX4TaAZdHZjcdPQ";

const terrainProvider = createWorldTerrain();
const biomassePosition = Cartesian3.fromDegrees(-61.35, 16.255);

function MapCesium() {
  return (
    <Viewer
      style={{
        position: "relative",
        top: 20,
        left: -300,
        right: 0,
        bottom: 0,
        width: 1200,
        height: 700,
      }}
      terrainProvider={terrainProvider}
    >
      {/* camera will be moved instantly. */}
      {/* you can use for initializing camera position. */}
      <Camera position={Cartesian3.fromDegrees(-61.78, 16.445, 87600)} />
      {/* <CameraLookAt
        target={Cartesian3.fromDegrees(-61.45, 15.845, 47600)}
        offset={new Cartesian3(100, -600, 900)}
      /> */}
      <BillboardCollection>
        <Billboard
          position={biomassePosition}
          name="Biomasse"
          image={require("../../assets/icon/BiomasseIcon.png")} // default: undefined
          show={true} // default
          pixelOffset={new Cesium.Cartesian2(120, -10)} // default: (0, 0)
          eyeOffset={new Cesium.Cartesian3(0.0, 0.0, 0.0)} // default
          horizontalOrigin={Cesium.HorizontalOrigin.CENTER} // default
          verticalOrigin={Cesium.VerticalOrigin.BOTTOM} // default: CENTER
          scale={1.5} // default: 1.0
          color={Cesium.Color.DARKVIOLET} // default: WHITE
          rotation={Cesium.Math.PI_OVER_FOUR} // default: 0.0
          alignedAxis={Cesium.Cartesian3.ZERO} // default
          //width={100} // default: undefined
          //height={25} // default: undefined
        />
      </BillboardCollection>
    </Viewer>
  );
}

export default MapCesium;
