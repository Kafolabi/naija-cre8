import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Speakers from "./pages/Speakers";
import Sponsors from "./pages/Sponsors";
import Tickets from "./pages/Tickets";
import Venue from "./pages/Venue";
import Layout from "./ui/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} /> 
          <Route path="speakers" element={<Speakers />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="venue" element={<Venue />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
