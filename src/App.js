import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
