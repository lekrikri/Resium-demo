import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import "./styles.css";

// Pages
import Login from "./pages/form/Login";
import Forgot from "./pages/form/Forgot";
import SignUp from "./pages/form/SignUp";
import ResetPassword from "./pages/form/ResetPassword";
import NotifPage from "./pages/form/NotifPage";
import Home from "./pages/user/Home";
import Workspace from "./pages/user/Workspace";
import Overview from "./pages/drive/Overview";
import DataSources from "./pages/drive/DataSources";
import DataStore from "./pages/drive/DataStore";
import Studio from "./pages/drive/Studio";
import PanelView from "./pages/PanelView/PanelView";

// Themes
import { ThemeProvider } from "@mui/material/styles";
import Default from "./assets/theme/Default";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Default}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<PanelView />} />
          <Route path="/" element={<Login />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/NotifPage" element={<NotifPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Workspace" element={<Workspace />} />
          <Route path="/Overview" element={<Overview />} />
          <Route path="/DataSources" element={<DataSources />} />
          <Route path="/DataStore" element={<DataStore />} />
          <Route path="/Studio" element={<Studio />} />
          <Route path="/PanelView" element={<PanelView />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
