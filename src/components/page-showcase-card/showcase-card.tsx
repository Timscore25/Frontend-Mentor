import CARD from './showcase-card.module.css'
import { Navigate } from 'react-router-dom';
import React from 'react';
import SearchBar from '../search-bar/searchBar';

function CardsComponent () {

    const [goToComponent, setGoToComponent] = React.useState('');

    if (goToComponent === 'product-preview-card-component') {
    return <Navigate to="/product-preview-card-component" />;
    } else if (goToComponent === 'qr-code-component') {
    return <Navigate to="/qr-code-component" />;
    } else if (goToComponent === 'nft-preview-card-component') {
    return <Navigate to="/nft-preview-card-component" />;
    } else if (goToComponent === 'order-summary-component') {
    return <Navigate to="/order-summary-component" />;
    } else if (goToComponent === 'results-summary-component') {
    return <Navigate to="/results-summary-component" />;
    } else if (goToComponent === 'stats-preview-card-component') {
    return <Navigate to="/stats-preview-card-component" />;
    } else if (goToComponent === '3column-preview-card-component') {
    return <Navigate to="/3column-preview-card-component" />;
    } else if (goToComponent === 'profile-card-component') {
    return <Navigate to="/profile-card-component" />;
    } else if (goToComponent === 'social-proof-section') {
    return <Navigate to="/social-proof-section" />;
    } else if (goToComponent === 'four-card-feature-section') {
    return <Navigate to="/four-card-feature-section" />;
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
                            setGoToComponent('product-preview-card-component');
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
                            setGoToComponent('qr-code-component');
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
                            setGoToComponent('nft-preview-card-component');
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
                            setGoToComponent('order-summary-component');
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
                            setGoToComponent('results-summary-component');
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
                            setGoToComponent('stats-preview-card-component');
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
                <div className={CARD.mainPageContentContainerCard}>
                    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/juir90bwmmvlo86g9paz.jpg" alt="" />
                    <div className={CARD.textContainer}>
                        <div className={CARD.Headline}>
                            <a 
                            onClick={() => {
                            /* set 'goToProductPreviewCardComponent' to true */
                            setGoToComponent('3-column-preview-card-component');
                            }}
                            >3-column preview card component</a>
                        </div>
                        <div className={CARD.languages}>
                            <p className={CARD.html}>HTML</p>
                            <p className={CARD.css}>CSS</p>
                        </div>
                    </div>
                    <p className={CARD.date}>2/23/2023 - same day</p>
                </div>
                <div className={CARD.mainPageContentContainerCard}>
                    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/dia0o9uigiiz4gebiqps.jpg" alt="" />
                    <div className={CARD.textContainer}>
                        <div className={CARD.Headline}>
                            <a 
                            onClick={() => {
                            /* set 'goToProductPreviewCardComponent' to true */
                            setGoToComponent('profile-card-component');
                            }}
                            >Profile card component</a>
                        </div>
                        <div className={CARD.languages}>
                            <p className={CARD.html}>HTML</p>
                            <p className={CARD.css}>CSS</p>
                        </div>
                    </div>
                    <p className={CARD.date}>2/24/2023 - same day</p>
                </div>
                <div className={CARD.mainPageContentContainerCard}>
                    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/bnjpxmx9fudsmerfj6eo.jpg" alt="" />
                    <div className={CARD.textContainer}>
                        <div className={CARD.Headline}>
                            <a 
                            onClick={() => {
                            /* set 'goToProductPreviewCardComponent' to true */
                            setGoToComponent('social-proof-section');
                        }}
                            >Social proof section</a>
                        </div>
                        <div className={CARD.languages}>
                            <p className={CARD.html}>HTML</p>
                            <p className={CARD.css}>CSS</p>
                        </div>
                    </div>
                    <p className={CARD.date}>2/26/2023 - same day</p>
                </div>
                <div className={CARD.mainPageContentContainerCard}>
                    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/a3b5gbgtfbtiqrdawpwp.jpg" alt="" />
                    <div className={CARD.textContainer}>
                        <div className={CARD.Headline}>
                            <a 
                            onClick={() => {
                            /* set 'goToProductPreviewCardComponent' to true */
                            setGoToComponent('four-card-feature-section');
                        }}
                            >Four card feature section</a>
                        </div>
                        <div className={CARD.languages}>
                            <p className={CARD.html}>HTML</p>
                            <p className={CARD.css}>CSS</p>
                        </div>
                    </div>
                    <p className={CARD.date}>2/27/2023 - 6:45PM</p>
                </div>
            </div>
        </div>
    );
}

export default CardsComponent;