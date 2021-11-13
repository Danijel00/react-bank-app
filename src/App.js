import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignInPage from "./pages/SingInPage";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
