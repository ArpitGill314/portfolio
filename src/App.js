import Navbar from "./components/Navbar";
import Page from "./components/Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/portfolio" element={<p>test page</p>} />
      </Routes>
    </Router>
  );
}

export default App;
