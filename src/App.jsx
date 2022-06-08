import { Route, Routes } from "react-router-dom";
import CreateNFT from "./pages/CreateNFT";
import Home from "./pages/Home";
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  React.useEffect(() => {
    AOS.init();
    // AOS.refresh();
  });
  const [walletAddress, setWalletAddress] = React.useState(null);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              walletAddress={walletAddress}
              setWalletAddress={setWalletAddress}
            />
          }
        />
        <Route
          path="/createnftcollection"
          element={
            <CreateNFT
              walletAddress={walletAddress}
              setWalletAddress={setWalletAddress}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
