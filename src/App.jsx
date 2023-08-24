import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Page-Welcome/Welcome-Page";
import LoadingPage from "./LoadingPage";
import Appbar from "./Components/Common/Appbar/Appbar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Hide the LoadingPage after the web has finished loading (In this example, we use setTimeout to simulate the loading time)
    setTimeout(() => {
      setLoading(false);
    }, 250); // You can adjust the timing as appropriate
  }, []);

  return (
    <Router>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Box sx={{ display: "flex", bgcolor: "red" }}>
            <DrawerHeader />
            <Appbar />
            {/* <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: "red" }}> */}
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/Page1" element={<Welcome />} />

              {/* <Route path="/MasterVerifyReport" element={<MasterVerify />} />
            <Route path="/VerifyReport" element={<Verify />} /> */}
              {/* Add other routes as needed */}
            </Routes>
            {/* </Box> */}
          </Box>
        </>
      )}
    </Router>
  );
}

export default App;
