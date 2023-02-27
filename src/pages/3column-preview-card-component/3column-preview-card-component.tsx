import columnPreview from './3column-preview-card-component.module.css'
import luxurySVG from './components/images/icon-luxury.svg'
import sedansSVG from './components/images/icon-sedans.svg'
import suvsSVG from './components/images/icon-suvs.svg'


function ColumnPreviewCardComponent () {
  return (
    <div className={columnPreview.pageContainer}>
      <div className={columnPreview.columnContainer}>
        <div className={columnPreview.column}>
          <img src={sedansSVG} alt="sedans" />
          <h1>Sedans</h1>
          <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
          <button id={columnPreview.orange}>Learn More</button>
        </div>
        <div className={columnPreview.column}>
          <img src={suvsSVG} alt="suvs" />
          <h1>SUVs</h1>
          <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
          <button id={columnPreview.lightGreen}>Learn More</button>
        </div>
        <div className={columnPreview.column}>
          <img src={luxurySVG} alt="luxury" />
          <h1>Luxury</h1>
          <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
          <button id={columnPreview.darkGreen}>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default ColumnPreviewCardComponent