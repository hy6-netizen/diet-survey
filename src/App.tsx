import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DietSurvey from './pages/DietSurvey';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diet-survey" element={<DietSurvey />} />
    </Routes>
  );
}

export default App;
