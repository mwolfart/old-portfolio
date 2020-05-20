import React from "react";
import "../styles/MainCanvas.css";
import { SideBar } from "./SideBar";
import {
  faHome,
  faGamepad,
  faPiggyBank,
  faMusic
} from "@fortawesome/free-solid-svg-icons";

import { Home } from "./screens/Home";
import { MillenialsChallenge } from "./screens/MillenialsChallenge";
// import {} from "./screens/";

export class MainCanvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screens: this.getScreensData(),
      curPage: Home,
      screenTransition: false
    };
  }

  getScreensData() {
    const categories = [
      { title: "Home", class: Home },
      { title: "Games", pages: [
        { title: "Millenial's Challenge", class: MillenialsChallenge },
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

  selectPage(page) {
    clearTimeout(this.transitionTimeout);
    this.setState({ screenTransition: true });

    this.transitionTimeout = setTimeout(() => {
      this.setState({ 
        curPage: page || this.screens[0],
        screenTransition: false
      });
    }, 300);
  }

  render() {
    const Screen = this.state.curPage;

    let screenClass = "screen-content__selected-screen";
    if (this.state.screenTransition) {
      screenClass += " screen-content__selected-screen--hidden" 
    }

    return (
      <div className="main-canvas">
        <SideBar
          menuItems={this.state.screens}
          menuPageSelectFn={page => this.selectPage(page.class)}
        />
        <div className="screen-content">
          <div className={ screenClass }>
            <Screen
              selectPageFn={ page => this.selectPage(page) }
            />
          </div>
        </div>
      </div>
    );
  }
}
