import { Box, Container, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useEffect } from "react";
import theme from "./styles/theme";
import AppBar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <AppBar />

        <Banner />
        <Promotions />
        <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
          <Typography style={{ fontSize: "2vw" }}>Our Products</Typography>
        </Box>
        <Products />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
