import { React, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, Stack } from "@mui/material";
import Add from "./components/Add";
// import { createTheme, ThemeProvider } from "@mui/system";

function App() {
  //   const [mode, setMode] = useState("dark");

  //   const darkTheme = createTheme({
  //     palette: {
  //       mode: mode,
  //     },
  //   });

  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  );
}

export default App;
