import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-320px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
