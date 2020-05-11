import React from "react";
import "../styles/MainCanvas.css";
import { SideBar } from "./SideBar";
import { Home } from "./screens/Home";
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
        curScreenTitle: "Home",
        screenTransition: { performTransition: false }
      };
    }
  
    getScreensData() {
      const categories = [
        { title: "Home", class: Home },
        { title: "Games", pages: [
          { title: "Millenial's Challenge", class: undefined },
          { title: "Dangerous Dave", class: undefined },
          { title: "The Homogeneous Cow Maze", class: undefined }
        ] },
        { title: "Web projects", pages: [
          { title: "Patas Dadas internal system", class: undefined },
          { title: "Piggy Bank", class: undefined }
        ] },
        { title: "Shell applications", pages: [
          { title: "OS Tools", class: undefined },
          { title: "AI Tools", class: undefined },
          { title: "Code Compiler", class: undefined }
        ] }
      ];

      return categories;
    }
  
    selectScreen(newScreenTitle) {
      this.setState({
        curScreenTitle: newScreenTitle,
        screenTransition: { performTransition: true }
      });
    }
  
    render() {
      return (
        <div className="main-canvas">
          <SideBar
            menuItems={this.state.screens}
            menuSelectedItem={this.state.curScreenTitle}
            menuItemSelectFn={screenTitle => this.selectScreen(screenTitle)}
          />
        </div>
      );
    }
  }

  /*
  
          <ScreenContent 
            screenTitle={ this.state.curScreenTitle }
            // screen={ this.state.screens[this.state.curScreenId] } 
            screenTransition={ this.state.screenTransition }
          />
*/