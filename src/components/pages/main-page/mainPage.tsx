import CSS from './mainPage.module.css'
import { Navigate } from 'react-router-dom';
import React from 'react';


function MainPage () {

    /* initialize the state variable 'goToLogin' to false */
    const [goToProductPreviewCardComponent, setGoToProductPreviewCardComponent] = React.useState(false);

    /* if either 'goToLogin' or 'goToSignUp' is true */
    if (goToProductPreviewCardComponent) {
    /* redirect to the login page */
    return <Navigate to="/product-preview-card-component" />;
    }

    return (
        <div className={CSS.App}>
            <div className={CSS.mainPage}>
                <header className={CSS.Header}>
                    <h1>Frontend Mentor Projects</h1>
                    {/* <h2>Nikola M. Kostov</h2> */}
                </header>
                <main className={CSS.mainPageContent}>
                    <div className={CSS.mainPageContentContainer}>
                        <div className={CSS.mainPageContentContainerCard}>
                            <img src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/lftjtn81b7brs2icc898.jpg" alt="" />
                            <div className={CSS.textContainer}>
                                <div className={CSS.Headline}>
                                    <a 
                                    onClick={() => {
                                    /* set 'goToProductPreviewCardComponent' to true */
                                    setGoToProductPreviewCardComponent(true);
                                    }}
                                    >Product preview card component</a>
                                </div>
                                <div className={CSS.languages}>
                                    <p className={CSS.html}>HTML</p>
                                    <p className={CSS.css}>CSS</p>
                                </div>
                                <p className={CSS.date}>2/10/2023</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default MainPage;