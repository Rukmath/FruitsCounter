import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  ateMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  ateBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>
            Bob ate<span className="count"> {mangoCount} </span>mangoes
            <span className="count"> {bananaCount} </span> bananas
          </h1>
          <div className="fruits-container">
            <div className="mango-container">
              <img
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-img"
              />
              <button
                onClick={this.ateMango}
                type="button"
                className="custom-button"
              >
                Eat Mango
              </button>
            </div>
            <div className="banana-container">
              <img
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-img"
              />
              <button
                onClick={this.ateBanana}
                type="button"
                className="custom-button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
