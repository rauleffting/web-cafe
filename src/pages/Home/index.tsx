import { HomeContainer } from './styles'
import coffees from '../../assets/coffees.svg'
import cart from '../../assets/cart.svg'
import clock from '../../assets/clock.svg'
import box from '../../assets/box.svg'
import cup from '../../assets/cup.svg'

export function Home() {
  return (
    <HomeContainer>
      <div>
        <h1>Find the perfect coffee for any time of day</h1>
        <p>With Web Cafe, you get your coffee wherever you are, anytime</p>
        <div className="content-wrapper">
          <div>
            <div className="content-wrapper2">
              <img src={cart} alt="cart icon" />
              <span>Simple and secure purchase</span>
            </div>
            <div className="content-wrapper2">
              <img src={clock} alt="clock icon" />
              <span>Fast and tracked delivery</span>
            </div>
            
            
          </div>
          <div>
            <div className="content-wrapper2">
              <img src={box} alt="box icon" />
              <span>Packaging keeps the coffee intact</span>
            </div>
            <div className="content-wrapper2">
              <img src={cup} alt="cup icon" />
              <span>Coffee arrives fresh to you</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={coffees} alt="three coffee in the cup and coffee seeds" />
      </div>
    </HomeContainer>
  )
}
