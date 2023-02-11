import mainPage from './mainPage.module.css';
import CardsComponent from '../components/page-showcase-card/showcase-card';


function MainPage () {

    return (
        <div className={mainPage.App}>
            <div className={mainPage.mainPage}>
                <header className={mainPage.Header}>
                    <h1>Frontend Mentor Projects</h1>
                    {/* <h2>Nikola M. Kostov</h2> */}
                </header>
                <main className={mainPage.mainPageContent}>
                    <CardsComponent />
                </main>
            </div>
        </div>
    )
}

export default MainPage;