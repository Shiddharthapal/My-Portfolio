import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";
import { Layout } from "../layouts/Layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </Router>
  );
}
