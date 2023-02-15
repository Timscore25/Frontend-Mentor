import OrderSummary from './Order-summary-component.module.css';
import illustrationSVG from './components/images/illustration-hero.svg';
import musicIconSVG from './components/images/icon-music.svg';

function OrderSummaryComponent () {
    return (
        <div className={OrderSummary.mainPageContentContainer}>
            {/* <div className={OrderSummary.background}>
                <div className={OrderSummary.top}></div>
                <div className={OrderSummary.bottom}></div>
            </div> */}
                <div className={OrderSummary.card}>
                    <img src={illustrationSVG} alt="" />
                    <div className={OrderSummary.textContainer}>
                        <div className={OrderSummary.cardHeader}>
                            <h1>Order Summary</h1>
                            <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                        </div>
                        <div className={OrderSummary.anualPlan}>
                            <div className={OrderSummary.content}>
                                <div className={OrderSummary.left}>
                                    <img src={musicIconSVG} alt="" />
                                    <div className={OrderSummary.planDetails}>
                                        <h2>Annual Plan</h2>
                                        <p>$59.99/year</p>
                                    </div>
                                </div>
                                <div className={OrderSummary.Change}>
                                    <a href="">Change</a>
                                </div>
                            </div>
                        </div>
                        <div className={OrderSummary.payments}>
                            <button>Proceed to Payment</button>
                            <a href="">Cancel Order</a>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default OrderSummaryComponent;