import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { NavLink, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Fujilogo from "../../../../public/login-Fujikura.png";
import Fujilogo2 from "../../../../public/fujikura--600.png";

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ opens, onClicks }) {
  const anchor = "left";
  const [buttonClicks, setButtonClicks] = React.useState({
    Page1: false,
    Page2: false,
    Page3: false,
    Page4: false,
  });

  const handleButtonClick = (text) => {
    if (text === "Page1")
      setButtonClicks({
        Page1: true,
      });
    if (text === "Page2")
      setButtonClicks({
        Page2: true,
      });
    if (text === "Page3")
      setButtonClicks({
        Page3: true,
      });
    if (text === "Page4")
      setButtonClicks({
        Page4: true,
      });
  };

  return (
    <>
      <Drawer
        variant="permanent"
        open={opens}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#eeeeee", // สีพื้นหลังที่คุณต้องการ
          },
        }}
      >
        <Box
          sx={{
            width: anchor === "top" || anchor === "bottom" ? "auto" : "auto",
            height: "auto",
          }}
          role="presentation"
        >
          <Card
            sx={{
              maxWidth: "100%",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardMedia
              component="img"
              image={opens ? Fujilogo : Fujilogo2}
              sx={
                opens
                  ? {
                      height: "64px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      objectFit: "contain",
                    }
                  : {
                      height: "64px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      objectFit: "contain",
                    }
              }
              title="Fujikura-logo"
            />
          </Card>
        </Box>
        {/* <Divider /> */}
        {opens ? (
          <ListItem disablePadding sx={{ display: "block", mt: 1, pl: 1 }}>
            <ListItemText
              primary={
                <Typography
                  component="div"
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{
                    opacity: open ? 1 : 0,
                    color: "#616161",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "16px",
                  }}
                >
                  Group1
                </Typography>
              }
            />
          </ListItem>
        ) : null}
        <List>
          {[
            { text: "Page1", path: "/Page1" },
            { text: "Page2", path: "/Page2" },
          ].map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <NavLink to={item.path} style={{ textDecoration: "none" }}>
                <ListItemButton
                  sx={{
                    maxHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    backgroundColor: buttonClicks[item.text]
                      ? "rgba(202, 237, 255, 0.8)"
                      : "transparent",
                  }}
                  onClick={() => handleButtonClick(item.text)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.text === "Verify Report" ? (
                      <>
                        <img
                          style={{ width: "24px", height: "24px" }}
                          src={Fujilogo2}
                        />
                      </>
                    ) : (
                      <img
                        style={{ width: "24px", height: "24px" }}
                        src={Fujilogo2}
                      />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        component="div"
                        variant="subtitle2"
                        fontWeight="bold"
                        sx={{
                          opacity: open ? 1 : 0,
                          color: "#616161",
                          fontFamily: "Arial, sans-serif",
                          fontSize: "16px",

                          lineHeight: "20px",
                          mb: "2px",
                        }}
                      >
                        {item.text}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
        <Divider />
        {opens ? (
          <ListItem disablePadding sx={{ display: "block", mt: 1, pl: 1 }}>
            <ListItemText
              primary={
                <Typography
                  component="div"
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{
                    opacity: open ? 1 : 0,
                    color: "#616161",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "16px",
                  }}
                >
                  Group2
                </Typography>
              }
            />
          </ListItem>
        ) : null}
        <List>
          {[
            { text: "Page3", path: "/Page3" },
            { text: "Page4", path: "/Page4" },
          ].map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <NavLink to={item.path} style={{ textDecoration: "none" }}>
                <ListItemButton
                  sx={{
                    maxHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    backgroundColor: buttonClicks[item.text]
                      ? "rgba(202, 237, 255, 0.8)"
                      : "transparent",
                  }}
                  onClick={() => handleButtonClick(item.text)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.text === "Verify Report" ? (
                      <>
                        <img
                          style={{ width: "24px", height: "24px" }}
                          src={Fujilogo2}
                        />
                      </>
                    ) : (
                      <img
                        style={{ width: "24px", height: "24px" }}
                        src={Fujilogo2}
                      />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        component="div"
                        variant="subtitle2"
                        fontWeight="bold"
                        sx={{
                          opacity: open ? 1 : 0,
                          color: "#616161",
                          fontFamily: "Arial, sans-serif",
                          fontSize: "16px",

                          lineHeight: "20px",
                          mb: "2px",
                        }}
                      >
                        {item.text}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
