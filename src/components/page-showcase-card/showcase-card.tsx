import CARD from './showcase-card.module.css'
import { Navigate } from 'react-router-dom';
import React from 'react';

function CardsComponent () {

    const [goToProductPreviewCardComponent, setGoToProductPreviewCardComponent] = React.useState(false);
    const [goToQrCodeComponent, setGoToQrCodeComponent] = React.useState(false);
    const [goToNftPreviewCardComponent, setGoToNftPreviewCardComponent] = React.useState(false);

    if (goToProductPreviewCardComponent) {
    return <Navigate to="/product-preview-card-component" />;
    }

    if (goToQrCodeComponent) {
    return <Navigate to="/qr-code-component" />;
    }

    if (goToNftPreviewCardComponent) {
    return <Navigate to="/nft-preview-card-component" />;
    }

    return (
        <div className={CARD.mainPageContentContainer}>
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
                <p className={CARD.date}>2/10/2023</p>
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
                <p className={CARD.date}>2/11/2023</p>
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
                <p className={CARD.date}>2/13/2023</p>
            </div>
        </div>
    );
}

export default CardsComponent;