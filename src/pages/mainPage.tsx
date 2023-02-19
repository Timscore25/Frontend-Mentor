import mainPage from './mainPage.module.css';
import CardsComponent from '../components/page-showcase-card/showcase-card';


function MainPage () {

    return (
        <div className={mainPage.App}>
            <div className={mainPage.mainPage}>
                <div className={mainPage.navBarContainer}>
                    <div className={mainPage.headerContainer}>
                        <h1 className={mainPage.header}><a href="#">Frontend Mentor</a></h1>
                    </div>
                    <div className={mainPage.author}>
                        <h2>Created by: <a href="https://github.com/Timscore25" target="_blank">Nikola M. Kostov</a></h2>
                    </div>
                </div>
                <main className={mainPage.mainPageContent}>
                    <CardsComponent />
                </main>
            </div>
        </div>
    )
}

export default MainPage;