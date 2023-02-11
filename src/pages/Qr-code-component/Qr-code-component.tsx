import QrCode from './Qr-code-component.module.css'

function QrCodeComponent () {
    return (
        <div className={QrCode.mainContainer}>
            <div className={QrCode.codeContainer}>
                <div className={QrCode.image}>
                    <img src={require("./components/images/image-qr-code.png")} alt="qr code" />
                </div>
                <div className={QrCode.text}>
                    <h1>Improve your front-end skills by building projects</h1>
                    <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>
            </div>
        </div>
    );
}

export default QrCodeComponent;