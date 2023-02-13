import NFTPreview from './NFT-preview-card-component.module.css';
import ETHSvg from './components/images/icon-ethereum.svg';
import ClockSvg from './components/images/icon-clock.svg';

function NFTPreviewCardComponent() {
    return (
        <div className={NFTPreview.body}>
            <div className={NFTPreview.cardContainer}>
                <div className={NFTPreview.imageContainer}>
                    <img src={require('./components/images/image-equilibrium.jpg')} alt="" />
                </div>
                <div className={NFTPreview.textContainer}>
                    <h1>Equilibrium #3429</h1>
                    <p>Our Equilibrium collection promotes balance and calm.</p>
                    <div className={NFTPreview.info}>
                        <div className={NFTPreview.eth}>
                            <img src={ETHSvg} alt="Eth" />
                            <h2>0.041 ETH</h2>
                        </div>
                        <div className={NFTPreview.time}>
                            <img src={ClockSvg} alt="Time" />
                            <p>3 days left</p>
                        </div>
                    </div>
                    <div className={NFTPreview.author}>
                        <img src={require("./components/images/image-avatar.png")} alt="" />
                        <p>Creation of <span>Jules Wyvern</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NFTPreviewCardComponent;