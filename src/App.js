import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavbarComponent from './components/Navbar';
import Cancel from './pages/Cancel';
import Home from './pages/Home';
import Success from './pages/Success';

const App = () => {
  return (
    <Router>
      <Container>
        <NavbarComponent />
        <Routes>
          <Route index element={<Home />} />
          <Route path='success' element={<Success />} />
          <Route path='cancel' element={<Cancel />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
