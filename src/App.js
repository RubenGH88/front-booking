import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import NotFoundingPage from "./pages/NotFoundPage";

function App() {
  return (
    <div >
       <Navbar />
       <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/booking" element={<BookingPage />} />
          <Route exact path="/*" element={<NotFoundingPage />} />
        </Routes>
    
    </div>
  );
}

export default App;
