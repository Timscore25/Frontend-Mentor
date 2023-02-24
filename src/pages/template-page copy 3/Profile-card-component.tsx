import profileComponent from './Profile-card-component.module.css'
import bgBottomSVG from './components/images/bg-pattern-bottom.svg'
import bgCardSVG from './components/images/bg-pattern-card.svg'
import bgTopSVG from './components/images/bg-pattern-top.svg'
import profileImageSVG from './components/images/image-victor.jpg'


function ProfileCardComponent () {
  return (
    <div className={profileComponent.mainPage}>
      <div className={profileComponent.background}>
        <img src={bgTopSVG} alt="bg-top" className={profileComponent.bgTop} />
        <img src={bgBottomSVG} alt="bg-bottom" className={profileComponent.bgBottom} />
      </div>
      <div className={profileComponent.contentContainer}>
        <div className={profileComponent.card}>
          <div className={profileComponent.bg}>
            <img src={bgCardSVG} alt="bg-card" />
          </div>
          <div className={profileComponent.profile}>
            <div className={profileComponent.profileImage}>
              <img src={profileImageSVG} alt="profile" />
            </div>
            <div className={profileComponent.profileInfo}>
              <h1>Victor Crest <span>26</span></h1>
              <h2>London</h2>
            </div>
          </div>
          <div className={profileComponent.profileStats}>
                <div className={profileComponent.stats}>
                  <h1>80K</h1>
                  <h2>Followers</h2>
                </div>
                <div className={profileComponent.stats}>
                  <h1>803K</h1>
                  <h2>Likes</h2>
                </div>
                <div className={profileComponent.stats}>
                  <h1>1.4K</h1>
                  <h2>Photos</h2>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCardComponent