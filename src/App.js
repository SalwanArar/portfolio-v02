import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import SkillsPage from './Pages/Skills';
import ProjectsPage from './Pages/Projects';
import { AnimatePresence } from 'framer-motion';
import ContactPage from './Pages/Contact';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/skills' element={<SkillsPage />}/>
          <Route path='/projects' element={<ProjectsPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
