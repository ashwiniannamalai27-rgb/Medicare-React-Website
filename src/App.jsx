import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import MedicareAbout from "./pages/about.jsx";
import MedicareBlog from "./pages/blog.jsx";
import ContactPage from "./pages/contact.jsx";
import BlogDetail from "./pages/blog-single.jsx";
import Starter from "./pages/starter.jsx";
import Research from "./pages/research.jsx";
import Researchs from "./pages/research-single.jsx";
import Utilities from "./utilities/utilities.jsx";
import Components from "./componentLinks/components.jsx";
import Documentation from "./documentation/documentation.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<MedicareAbout />} />
        <Route path="/blog" element={<MedicareBlog />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/starter" element={<Starter/>}/>
        <Route path="/blog-single" element={<BlogDetail />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research-single" element={<Researchs />} />
        <Route
  path="/documentation/:page"
  element={<Documentation />}
/>
       <Route path="/components/:page" element={<Components />} />
       <Route path="/utilities/:page" element={<Utilities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;