import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <NavBar />
      <main className="container mx-auto px-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App; 