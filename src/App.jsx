import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Main from "./components/Main";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/profile/:userId" element={<Main />} />
        <Route path="/profile" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/jobs/:id" element={<Jobs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
