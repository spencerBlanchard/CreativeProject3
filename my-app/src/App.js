import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Hack from "./pages/Hack";
import Win from "./pages/Win";
import Explode from "./pages/Explode";

export default function App() {
  return (
    
    <div>
    <BrowserRouter basename="/CreativeProject3/my-app/build/">
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
    <br/><br/><br/><br/><br/><br/>
    "Spencer Blanchard, Sterling Smith"
    <a href = "https://github.com/spencerBlanchard/CreativeProject3" target = 'blank'> Github repository </a>
    </div>
  );
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
