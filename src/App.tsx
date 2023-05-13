import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"; // import react router dom
import MainPage from './pages/mainPage';
import ProductReviewPage from './pages/Product-preview-card-component/Product-preview-card-component';
import QrCodeComponent from './pages/Qr-code-component/Qr-code-component';
import NFTPreviewCardComponent from './pages/NFT-preview-card-component/NFT-preview-card-component';
import OrderSummaryComponent from './pages/Order-summary-component/Order-summary-component';
import ResultsSummaryComponent from './pages/Results-summary-component/Results-summary-component';
import StatsPreviewCardComponent from './pages/Stats-preview-card-component/Stats-preview-card-component';
import ColumnPreviewCardComponent from './pages/3column-preview-card-component/3column-preview-card-component';
import ProfileCardComponent from './pages/Profile-card-component/Profile-card-component';
import SocialProofSection from './pages/Social-proof-section/social-proof-section';
import FourCardFeatureSection from './pages/Four-card-feature-section/Four-card-feature-section';
import SinglePriceGridComponent from './pages/Single-price-grid-component/Single-price-grid-component';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <MainPage/> } />
        <Route path="." element={ <MainPage/> } />
        <Route path="/Frontend-Mentor" element={ <MainPage/> } />
        <Route path="/product-preview-card-component" element={ <ProductReviewPage/> } />
        <Route path="/qr-code-component" element={ <QrCodeComponent/> } />
        <Route path="/nft-preview-card-component" element={ <NFTPreviewCardComponent/> } />
        <Route path="/order-summary-component" element={ <OrderSummaryComponent/>}/>
        <Route path="/results-summary-component" element={ <ResultsSummaryComponent/> } />
        <Route path="/stats-preview-card-component" element={ <StatsPreviewCardComponent/> } />
        <Route path="/3column-preview-card-component" element={ <ColumnPreviewCardComponent/> } />
        <Route path="/profile-card-component" element={ <ProfileCardComponent/> } />
        <Route path="/social-proof-section" element={ <SocialProofSection/> } />
        <Route path="/four-card-feature-section" element={ <FourCardFeatureSection/> } />
        <Route path="/Single-price-grid-component" element={ <SinglePriceGridComponent/> } />
      </Routes>
  </Router>
  );
}

export default App;
