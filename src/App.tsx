import { Layout } from "antd";
import { ThemeProvider } from "styled-components";
import { Dashboard, Navbar, Sidebar } from "./components";
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
          <Content>
            <Dashboard />
          </Content>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
