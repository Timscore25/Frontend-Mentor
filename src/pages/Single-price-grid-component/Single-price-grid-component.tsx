import SinglePrice from './Single-price-grid-component.module.css'

function SinglePriceGridComponent() {
  return (
    <div className={SinglePrice.mainPage}>
      <div className={SinglePrice.gridComponent}>
        <div className={`${SinglePrice.topComponent} ${SinglePrice.item}`}>
          <h1>Join our community</h1>
          <h2>30-day, hassle-free money back guarantee</h2>
          <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
        </div>
        <div className={`${SinglePrice.leftComponent} ${SinglePrice.item}`}>
          <h2>Monthly Subscription</h2>
          <div className={SinglePrice.priceInfo}>
            <h1>$29</h1>
            <p>per month</p>
          </div>
          <h3>Full access for less than $1 a day</h3>
          <button>Sign Up</button>
        </div>
        <div className={`${SinglePrice.rightComponent} ${SinglePrice.item}`}>
          <h2>Why Us</h2>
          <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SinglePriceGridComponent