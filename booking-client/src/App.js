
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, List } from './pages';
import Hotel from './pages/hotel/Hotel';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels:id" element={<Hotel />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>  
  );
}

export default App;
