import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Exprience from "./pages/exprience";
import Project from "./pages/project";
import Hero from "./pages/hero";
import Skills from "./pages/skill";
import CarsorRing from "./cursor";
import Footer from "./pages/footer";
import { ThemeProvider } from "@/lib/theme-context";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Layout from "../layouts/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CarsorRing />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Exprience />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/skill" element={<Skills />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
