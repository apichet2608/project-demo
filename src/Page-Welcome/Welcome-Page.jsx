import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Page1 = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xl={12}>
          <DrawerHeader />
        </Grid>
        <Grid item xl={12}>
          <h1>Welcome to Smart Report Dashboard</h1>
          <p>Monitoring your data</p>
        </Grid>
        <Grid item xl={12}></Grid>
      </Grid>
    </>
  );
};

export default Page1;
