import Navbar from "./components/Navbar";
import Page from "./components/Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import ScrollReset from "./components/ScrollReset"

function App() {
  return (
    <Router>
      <ScrollReset />
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/projects/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
