import { Container, ThemeProvider, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import { darkTheme, lightTheme } from "./configs/theme";

function App() {
  const { themeMode } = useSelector((state) => state.theme);

  return (
    <>
      <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
        <div
          style={{
            backgroundColor: themeMode === "light" ? "#fff" : "#000",
            minHeight: "100vh",
          }}
        >
          <Navigation />
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
