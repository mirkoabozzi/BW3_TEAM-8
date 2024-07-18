import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import Jobs from "./components/Jobs";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="jobs" element={<Jobs />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
