import CSS from './Product-preview-card-component.module.css';
import CartSVG from './components/images/icon-cart.svg';

function ProductReviewPage () {
    return (
        <div className={CSS.productReview}>
            <div className={CSS.productCard}>
                <img className={CSS.bigImage} src={require('./components/images/image-product-desktop.jpg')} alt="perfume showcase image"></img>
                <div className={CSS.productInfo}>
                    <h2 className={CSS.author}>PERFUME</h2>
                    <h1 className={CSS.productName}>Gabrielle Essence Eau De Parfum</h1>
                    <p className={CSS.productDescription}>A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</p>
                    <div className={CSS.orderDetails}>
                        <div className={CSS.price}>
                            <h1>$144.99</h1>
                            <h3>$169.99</h3>
                        </div>
                        <div className={CSS.button}>
                            <button>
                                <img className={CSS.svg} src={CartSVG} alt="cart icon" />
                                <h3>Add to Cart</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductReviewPage;