import React from "react";
import "../styles/ScreenContent.css";
import { Home } from "./screens/Home";
import { MillenialsChallenge } from "./screens/MillenialsChallenge";
import { PiggyBank } from "./screens/PiggyBank";

export class ScreenContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0
    };
  }

  changePage(id) {
    this.setState({ currentPage: id });
  }

  render() {
    const currentScreen = this.props.screen;
    const screenTransition = this.props.screenTransition;
    
    let screenClass = "screen-content__selected-screen";
    /*
    if (screenTransition.performTransition) {
      screenClass += "--hidden" 
      screenTransition.performTransition = false;
    }
    */

    let SelectedScreen = null;
    switch(currentScreen.id) {
    case 0:
    default:
      SelectedScreen = Home;
      break;
    case 1:
      SelectedScreen = MillenialsChallenge;
      break;
    case 2:
      SelectedScreen = PiggyBank;
      break;
    }

    return(
      <div className="screen-content">
        <SelectedScreen
          currentPage={ this.state.currentPage }
          changePage={ (id) => this.changePage(id) }
          className={ screenClass }
        />
      </div>
    );
  }
}
