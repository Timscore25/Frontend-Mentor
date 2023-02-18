import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"; // import react router dom
import MainPage from './pages/mainPage';
import ProductReviewPage from './pages/Product-preview-card-component/Product-preview-card-component';
import QrCodeComponent from './pages/Qr-code-component/Qr-code-component';
import NFTPreviewCardComponent from './pages/NFT-preview-card-component/NFT-preview-card-component';
import OrderSummaryComponent from './pages/Order-summary-component/Order-summary-component';
import ResultsSummaryComponent from './pages/Results-summary-component/Results-summary-component';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <MainPage/> } />
        <Route path="/product-preview-card-component" element={ <ProductReviewPage/> } />
        <Route path="/qr-code-component" element={ <QrCodeComponent/> } />
        <Route path="/nft-preview-card-component" element={ <NFTPreviewCardComponent/> } />
        <Route path="/order-summary-component" element={ <OrderSummaryComponent/>}/>
        <Route path="/results-summary-component" element={ <ResultsSummaryComponent/> } />
      </Routes>
  </Router>
  );
}

export default App;
