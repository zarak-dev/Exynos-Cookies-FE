import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ConfigProvider, App as AntApp } from "antd";
import { store } from "./store";
import "./index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00009c",
            borderRadius: 6,
            fontFamily: "inherit",
          },
        }}
      >
        <AntApp> {/* i use this to avoid the any error or misbehave of antd hooked based apis like message, nofication.*/}
          <App />
        </AntApp>
      </ConfigProvider>
    </Provider>
  </StrictMode>,
);
