import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Hack from "./pages/Hack";
import Win from "./pages/Win";
import Explode from "./pages/Explode";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          {<Route path="win" element={<Win />} />}
          <Route path="hack" element={<Hack />} />
          <Route path="explode" element={<Explode />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
