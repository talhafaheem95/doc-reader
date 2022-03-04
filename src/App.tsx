import React from "react";

import "./assets/css/style.css";
import ProviderContext from "./context/ProviderContext";
import AppRouter from "./Routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <ProviderContext>
        <AppRouter />
      </ProviderContext>
    </div>
  );
}

export default App;
