import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Hack from "./pages/Hack";
import Win from "./pages/Win";
import Explode from "./pages/Explode";

export default function App() {
  return (
    // <BrowserRouter basename="/CreativeProject3/my-app/build/">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Win" element={<Win />} />
          <Route path="Hack" element={<Hack />} />
          <Route path="Explode" element={<Explode />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
