import CARD from './showcase-card.module.css'
import { Navigate } from 'react-router-dom';
import React from 'react';
import SearchBar from '../search-bar/searchBar';

function CardsComponent () {

    const [goToProductPreviewCardComponent, setGoToProductPreviewCardComponent] = React.useState(false);
    const [goToQrCodeComponent, setGoToQrCodeComponent] = React.useState(false);
    const [goToNftPreviewCardComponent, setGoToNftPreviewCardComponent] = React.useState(false);
    const [goToOrderSummaryComponent, setGoToOrderSummaryComponent] = React.useState(false);
    const [goToResultsSummaryComponent, setGoToResultsSummaryComponent] = React.useState(false);
    const [goToStatsPreviewCardComponent, setGoToStatsPreviewCardComponent] = React.useState(false);

    if (goToProductPreviewCardComponent) {
    return <Navigate to="/product-preview-card-component" />;
    }

    if (goToQrCodeComponent) {
    return <Navigate to="/qr-code-component" />;
    }

    if (goToNftPreviewCardComponent) {
    return <Navigate to="/nft-preview-card-component" />;
    }

    if (goToOrderSummaryComponent) {
    return <Navigate to="/order-summary-component" />;
    }

    if (goToResultsSummaryComponent) {
    return <Navigate to="/results-summary-component" />;
    }

    if (goToStatsPreviewCardComponent) {
    return <Navigate to="/stats-preview-card-component" />;
    }

    return (
        <div className={CARD.mainPageContentContainer}>
            <SearchBar />
            <div className={CARD.mainpageCenter}>
                <div className={CARD.mainPageContentContainerCard}>
                    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/lftjtn81b7brs2icc898.jpg" alt="" />
                    <div className={CARD.textContainer}>
                        <div className={CARD.Headline}>
                            <a 
                            onClick={() => {
                            /* set 'goToProductPreviewCardComponent' to true */
                            setGoToProductPreviewCardComponent(true);
                            }}
                            >Product preview card component</a>
                        </div>
                        <div className={CARD.languages}>
                            <p className={CARD.html}>HTML</p>
                            <p className={CARD.css}>CSS</p>
                        </div>
                    </div>
                    <p className={CARD.date}>2/10/2023 - same day</p>
                </div>
                <div className={CARD.mainPageContentContainerCard}>
                    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/qh97gysgjrzqyqlig2al.jpg" alt="" />
                    <div className={CARD.textContainer}>
                        <div className={CARD.Headline}>
                            <a 
                            onClick={() => {
                            /* set 'goToProductPreviewCardComponent' to true */
                            setGoToQrCodeComponent(true);
                            }}
                            >QR code component</a>
                        </div>
                        <div className={CARD.languages}>
                            <p className={CARD.html}>HTML</p>
                            <p className={CARD.css}>CSS</p>
                        </div>
                    </div>
                    <p className={CARD.date}>2/11/2023 - same day</p>
                </div>
                <div className={CARD.mainPageContentContainerCard}>
                    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/rinokvkluq95madbvtmk.jpg" alt="" />
                    <div className={CARD.textContainer}>
                        <div className={CARD.Headline}>
                            <a 
                            onClick={() => {
                            /* set 'goToProductPreviewCardComponent' to true */
                            setGoToNftPreviewCardComponent(true);
                            }}
                            >NFT preview card component</a>
                        </div>
                        <div className={CARD.languages}>
                            <p className={CARD.html}>HTML</p>
                            <p className={CARD.css}>CSS</p>
                        </div>
                    </div>
                    <p className={CARD.date}>2/13/2023 - same day</p>
                </div>
                <div className={CARD.mainPageContentContainerCard}>
                    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/ouobx6tvyduidzio7wr7.jpg" alt="" />
                    <div className={CARD.textContainer}>
                        <div className={CARD.Headline}>
                            <a 
                            onClick={() => {
                            /* set 'goToProductPreviewCardComponent' to true */
                            setGoToOrderSummaryComponent(true);
                            }}
                            >Order summary component</a>
                        </div>
                        <div className={CARD.languages}>
                            <p className={CARD.html}>HTML</p>
                            <p className={CARD.css}>CSS</p>
                        </div>
                    </div>
                    <p className={CARD.date}>2/15/2023 - same day</p>
                </div>
                <div className={CARD.mainPageContentContainerCard}>
                    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/b03akozsxsouireonkkd.jpg" alt="" />
                    <div className={CARD.textContainer}>
                        <div className={CARD.Headline}>
                            <a 
                            onClick={() => {
                            /* set 'goToProductPreviewCardComponent' to true */
                            setGoToResultsSummaryComponent(true);
                            }}
                            >Results summary component</a>
                        </div>
                        <div className={CARD.languages}>
                            <p className={CARD.html}>HTML</p>
                            <p className={CARD.css}>CSS</p>
                        </div>
                    </div>
                    <p className={CARD.date}>2/15/2023 - same day</p>
                </div>
                <div className={CARD.mainPageContentContainerCard}>
                    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/sucvvhutd4codsxpzvw7.jpg" alt="" />
                    <div className={CARD.textContainer}>
                        <div className={CARD.Headline}>
                            <a 
                            onClick={() => {
                            /* set 'goToProductPreviewCardComponent' to true */
                            setGoToStatsPreviewCardComponent(true);
                            }}
                            >Stats preview card component</a>
                        </div>
                        <div className={CARD.languages}>
                            <p className={CARD.html}>HTML</p>
                            <p className={CARD.css}>CSS</p>
                        </div>
                    </div>
                    <p className={CARD.date}>2/22/2023 - same day</p>
                </div>
            </div>
        </div>
    );
}

export default CardsComponent;