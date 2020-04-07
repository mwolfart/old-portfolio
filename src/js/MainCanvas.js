import React from "react";
import "../styles/MainCanvas.css";
import { SideBar } from "./SideBar";
import { ScreenContent } from "./ScreenContent";
import {
  faHome,
  faGamepad,
  faPiggyBank,
  faMusic
} from "@fortawesome/free-solid-svg-icons";

export class MainCanvas extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        screens: this.getScreensData(),
        curScreenId: 0
      };
    }
  
    getScreensData() {
      return [
        { id: 0, title: "Home / About me", icon: faHome },
        { id: 1, title: "Module player", icon: faMusic },
        { id: 2, title: "Millenial's Challenge", icon: faGamepad },
        { id: 3, title: "Piggy bank", icon: faPiggyBank }
      ];
    }
  
    selectScreen(newScreenId) {
      this.setState({
        curScreenId: newScreenId
      });
    }
  
    render() {
      return (
        <div className="main-canvas">
          <SideBar
            menuItems={this.state.screens}
            menuSelectedItem={this.state.curScreenId}
            menuItemSelectFn={screenId => this.selectScreen(screenId)}
          />
          <ScreenContent 
            screenId={ this.state.curScreenId }
            screen={ this.state.screens[this.state.curScreenId] } 
          />
        </div>
      );
    }
  }