import SocialProof from './social-proof-section.module.css'
import bgTopSVG from './components/images/bg-pattern-top-desktop.svg'
import bgBottomSVG from './components/images/bg-pattern-bottom-desktop.svg'
import iconStarSVG from './components/images/icon-star.svg'

function SocialProofSection () {
  return (
    <div className={SocialProof.mainPage}>
      <div className={SocialProof.background}>
        <img src={bgTopSVG} alt="bg-top" className={SocialProof.bgTop} />
        <img src={bgBottomSVG} alt="bg-bottom" className={SocialProof.bgBottom} />
      </div>
      <div className={SocialProof.contentContainer}>
        <div className={SocialProof.top}>
          <div className={SocialProof.textSection}>
            <h1>10,000+ of our users love our products.</h1>
            <h2>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</h2>
          </div>
          <div className={SocialProof.socialProof}>
            <div className={SocialProof.socialProofCard}>
              <div className={SocialProof.socialProofCardText}>
                <div className={SocialProof.stars}>
                  <img src={iconStarSVG} alt="" />
                  <img src={iconStarSVG} alt="" />
                  <img src={iconStarSVG} alt="" />
                  <img src={iconStarSVG} alt="" />
                  <img src={iconStarSVG} alt="" />
                </div>
                <h1>Rated 5 Stars in Reviews</h1>
              </div>
            </div>
            <div className={SocialProof.socialProofCard}>
              <div className={SocialProof.socialProofCardText}>
                <div className={SocialProof.stars}>
                  <img src={iconStarSVG} alt="" />
                  <img src={iconStarSVG} alt="" />
                  <img src={iconStarSVG} alt="" />
                  <img src={iconStarSVG} alt="" />
                  <img src={iconStarSVG} alt="" />
                </div>
                <h1>Rated 5 Stars in Report Guru</h1>
              </div>
            </div>
            <div className={SocialProof.socialProofCard}>
              <div className={SocialProof.socialProofCardText}>
                <div className={SocialProof.stars}>
                  <img src={iconStarSVG} alt="" />
                  <img src={iconStarSVG} alt="" />
                  <img src={iconStarSVG} alt="" />
                  <img src={iconStarSVG} alt="" />
                  <img src={iconStarSVG} alt="" />
                </div>
                <h1>Rated 5 Stars in BestTech</h1>
              </div>
            </div>
          </div>
        </div>
          <div className={SocialProof.reviewsContainer}>
            <div className={SocialProof.reviewsCard}>
              <div className={SocialProof.reviewsHeader}>
                <div className={SocialProof.reviewsImage}>
                  <img src={require('./components/images/image-colton.jpg')} alt="" />
                </div>
                <div className={SocialProof.reviewsInfo}>
                  <h3>Colton Smith</h3>
                  <h4>Verified Buyer</h4>
                </div>
              </div>
              <div className={SocialProof.reviewsText}>
                <p>“We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!”</p>
              </div>
            </div>
            <div className={SocialProof.reviewsCard}>
              <div className={SocialProof.reviewsHeader}>
                <div className={SocialProof.reviewsImage}>
                  <img src={require('./components/images/image-irene.jpg')} alt="" />
                </div>
                <div className={SocialProof.reviewsInfo}>
                  <h3>Irene Roberts</h3>
                  <h4>Verified Buyer</h4>
                </div>
              </div>
              <div className={SocialProof.reviewsText}>
                <p>“Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”</p>
              </div>
            </div>
          <div className={SocialProof.reviewsCard}>
            <div className={SocialProof.reviewsHeader}>
              <div className={SocialProof.reviewsImage}>
                <img src={require('./components/images/image-anne.jpg')} alt="" />
              </div>
              <div className={SocialProof.reviewsInfo}>
                <h3>Anne Wallace</h3>
                <h4>Verified Buyer</h4>
              </div>
            </div>
            <div className={SocialProof.reviewsText}>
              <p>“Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialProofSection