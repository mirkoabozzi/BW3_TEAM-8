import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Main from "./components/Main";



function App() {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar className="d-flex " />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
