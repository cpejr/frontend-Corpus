import Routes from "./routes";
import { ConfigProvider } from "antd";
import { colors, fonts } from "./styles/stylesVariables";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.blue.accent,
          colorBgContainer: colors.blue.background,
          fontFamily: fonts.Exo2,
          fontSize: "15px",
        },
      }}
    >
      <Routes />
    </ConfigProvider>
  );
}

export default App;
