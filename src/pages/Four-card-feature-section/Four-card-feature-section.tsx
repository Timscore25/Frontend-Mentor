import fourCard from './Four-card-feature-section.module.css'
import iconSupervisorSVG from './components/images/icon-supervisor.svg'
import iconTeamBuilderSVG from './components/images/icon-team-builder.svg'
import iconKarmaSVG from './components/images/icon-karma.svg'
import iconCalculatorSVG from './components/images/icon-calculator.svg'

function FourCardFeatureSection () {
  return (
    <div className={fourCard.mainPage}>
      <div className={fourCard.background}></div>
      <div className={fourCard.container}>
        <div className={fourCard.textContainer}>
          <h2>Reliable, efficient delivery</h2>
          <h1>Powered by Technology</h1>
          <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
        </div>
        <div className={fourCard.cardContainer}>
          {/* Need to make the borders of the cards smaller than the full width */}
          <div className={fourCard.cardLeft}>
            <div className={fourCard.card}>
              <h2>Supervisor</h2>
              <p>Monitors activity to identify project roadblocks</p>
              <img src={iconSupervisorSVG} alt="Supervisor" />
            </div>
          </div>
          <div className={fourCard.cardMiddle}>
            <div className={fourCard.card}>
              <h2>Team Builder</h2>
              <p>Scans our talent network to create the optimal team for your project</p>
              <img src={iconTeamBuilderSVG} alt="Team Builder" />
            </div>
            <div className={fourCard.card}>
              <h2>Karma</h2>
              <p>Regularly evaluates our talent to ensure quality</p>
              <img src={iconKarmaSVG} alt="Karma" />
            </div>
          </div>
          <div className={fourCard.cardRight}>
            <div className={fourCard.card}>
              <h2>Calculator</h2>
              <p>Uses data from past projects to provide better delivery estimates</p>
              <img src={iconCalculatorSVG} alt="Calculator" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourCardFeatureSection