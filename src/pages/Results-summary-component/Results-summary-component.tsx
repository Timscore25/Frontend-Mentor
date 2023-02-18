import ResultsSummary from './Results-summary-component.module.css';
import ReactionSVG from './components/assets/images/icon-reaction.svg';
import MemorySVG from './components/assets/images/icon-memory.svg';
import VerbalSVG from './components/assets/images/icon-verbal.svg';
import VisualSVG from './components/assets/images/icon-visual.svg';


function ResultsSummaryComponent() {
  return (
    <div className={ResultsSummary.container}>
        <div className={ResultsSummary.ContentContainer}>
            <div className={ResultsSummary.ContentContainerCard}>

                <div className={ResultsSummary.CardLeft}>
                    <div className={ResultsSummary.textContainer}>
                        <p className={ResultsSummary.HeaderP}>Your Result</p>
                        <div className={ResultsSummary.circle}>
                            <h1>76</h1>
                            <p>of 100</p>
                        </div>
                        <div className={ResultsSummary.CardLeftBottom}>
                            <h1>Great</h1>
                            <p>You scored higher than 65% of the people who have taken these tests.</p>
                        </div>
                    </div>
                </div>

                <div className={ResultsSummary.CardRight}>
                    <div className={ResultsSummary.textContainerRight}>
                        <h2>Summary</h2>
                        <div className={ResultsSummary.CardStats}>
                            <div className={ResultsSummary.StatContainer}>
                                <img src={ReactionSVG} alt="" />
                                <h3>Reaction</h3>
                                <p>80 <span>/ 100</span></p>
                            </div>
                            <div className={ResultsSummary.StatContainer}>
                                <img src={MemorySVG} alt="" />
                                <h3>Memory</h3>
                                <p>92 <span>/ 100</span></p>
                            </div>
                            <div className={ResultsSummary.StatContainer}>
                                <img src={VerbalSVG} alt="" />
                                <h3>Verbal</h3>
                                <p>61 <span>/ 100</span></p>
                            </div>
                            <div className={ResultsSummary.StatContainer}>
                                <img src={VisualSVG} alt="" />
                                <h3>Visual</h3>
                                <p>72 <span>/ 100</span></p>
                            </div>
                        </div>
                        <button>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ResultsSummaryComponent;