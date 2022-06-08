import { Route, Routes } from "react-router-dom";
import CreateNFT from "./pages/CreateNFT";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createnftcollection" element={<CreateNFT />} />
      </Routes>
    </div>
  );
}

export default App;
