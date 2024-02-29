import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route index element={<AboutPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
