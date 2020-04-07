import React from "react";
import "../styles/ScreenContent.css";
import { Home } from "./screens/Home";
import { ModulePlayer } from "./screens/ModulePlayer";
import { MillenialsChallenge } from "./screens/MillenialsChallenge";
import { PiggyBank } from "./screens/PiggyBank";

class ScreenDescription extends React.Component {
  getScreenClass(screenId) {
    switch(screenId) {
      case 0:
      default:
        return <Home />;
      case 1:
        return <ModulePlayer />;
      case 2:
        return <MillenialsChallenge />;
      case 3:
        return <PiggyBank />;
    }
  }

  render() {
    return(
      <div className="screen-description">
        { this.getScreenClass(this.props.screenId) }
      </div>
    );
  }
}

export class ScreenContent extends React.Component {
  render() {
    const currentScreen = this.props.screen;

    return(
      <div className="screen-content">
        <ScreenDescription
          screenId={ currentScreen.id }
        />
      </div>
    );
  }
}
