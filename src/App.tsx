import React from "react";
import { Layout } from "antd";
import { ThemeProvider } from "styled-components";
import { Navbar, Sidebar } from "./components";
import { theme, GlobalStyle } from "./styles/theme";

const { Content } = Layout;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout style={{ minHeight: "100vh" }}>
        <Navbar />
        <Layout className="site-layout">
          <Sidebar />
          <Content style={{}}>{/* Your main content goes here */}</Content>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
