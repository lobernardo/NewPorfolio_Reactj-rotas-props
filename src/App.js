import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/HomeSection/Home'
import About from './components/pages/AboutSection/About'
import Skill from './components/pages/SkillSection/Skill'
import Project from './components/pages/ProjectSection/Project'
import Navbar from './components/Layouts//NavbarSection/Navbar'
import Footer from './components/Layouts/FooterSection/Footer'
import Contact from './components/pages/ContactSection/Contact'

import Container from './components/Layouts/ContainerSection/Container'


import './App.css';



function App() {
  return (
    <Router>
      <Navbar />
      
        <Container customClass="minHeight">

        
          <Routes>
            <Route exact path='/' element={<Home />}>
            </Route>

            <Route path='/about' element={<About />}>
            </Route>

            <Route path='/skill' element={<Skill />}>
            </Route>

            <Route path='/project' element={<Project />}>
            </Route>

            <Route path='/contact' element={<Contact />}>
            </Route>
          </Routes>

        </Container>


      <Footer />

    </Router>
  );
}

export default App;
