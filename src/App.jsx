import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/login/LoginForm';
import HomePage from './components/home/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
