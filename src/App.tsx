import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"; // import react router dom
import MainPage from './components/pages/main-page/mainPage';
import ProductReviewPage from './components/pages/Product-preview-card-component/Product-preview-card-component';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/product-preview-card-component" element={<ProductReviewPage/>} />
      </Routes>
  </Router>
  );
}

export default App;
