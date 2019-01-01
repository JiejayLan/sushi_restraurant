import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import res1 from "../images/res1.jpg";
import res2 from "../images/res2.jpg";
import res3 from "../images/res3.jpg";
import res4 from "../images/res4.jpg";
import res5 from "../images/res5.jpg";
import res6 from "../images/res6.jpg";
import leftArrow from "../images/arrowleft.png";
import rightArrow from "../images/arrowright.png";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 0, list: [res1, res2, res3, res4, res5, res6] };
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
  handlePrev(props) {
    this.state.id > 0
      ? this.setState(prevState => ({
          id: prevState.id - 1
        }))
      : null;
  }
  handleNext(props) {
    this.state.id < 5
      ? this.setState(prevState => ({
          id: prevState.id + 1
        }))
      : null;
  }
  render() {
    let source = this.state.list[this.state.id];
    return (
      <div className="container">
        <img src={source} alt="Snow" />
        <input type='image' alt='prev' src={leftArrow} className="lbtn" onClick={this.handlePrev} />
        <input type='image' alt='next' src={rightArrow} className="rbtn" onClick={this.handleNext} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
