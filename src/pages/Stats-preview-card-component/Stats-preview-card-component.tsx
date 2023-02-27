import { stat } from 'fs'
import statsPreview from './Stats-preview-card-component.module.css'

function StatsPreviewCardComponent () {
  return (
    <div className={statsPreview.mainPageContainer}>
      <div className={statsPreview.cardContainer}>
        <div className={statsPreview.textContainera}>
          <h1 className={statsPreview.h1}>Get <span className={statsPreview.span}>insights</span> that help your business grow.</h1>
          <p className={statsPreview.p}>Discover the benefits of data analytics and make better secisions regarding revenue, customer experience, and overall efficiency.</p>
          <div className={statsPreview.statsContainer}>
            <div className={statsPreview.statBox}>
              <h2 className={statsPreview.h2}>10k+</h2>
              <p className={statsPreview.p}>Companies</p>
            </div>
            <div className={statsPreview.statBox}>
              <h2 className={statsPreview.h2}>314</h2>
              <p className={statsPreview.p}>Templates</p>
            </div>
            <div className={statsPreview.statBox}>
              <h2 className={statsPreview.h2}>12M+</h2>
              <p className={statsPreview.p}>Queries</p>
            </div>
          </div>
        </div>
        <div className={statsPreview.imageContainer}>
          <img className={statsPreview.image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default StatsPreviewCardComponent