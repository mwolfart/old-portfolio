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

import { Home } from "./screens/Home";
import { MillenialsChallenge } from "./screens/MillenialsChallenge";
// import {} from "./screens/";

export class MainCanvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screens: this.getScreensData(),
      curPage: { title: "Home", class: Home },
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
    const curPage = (page && page.class) ? page : this.screens[0];

    this.setState({ screenTransition: true });

    clearTimeout(this.screenChangeTimeout);
    this.screenChangeTimeout = setTimeout(() => {
      this.setState({ curPage, screenTransition: false });
    }, 300);
  }

  render() {
    return (
      <div className="main-canvas">
        <SideBar
          menuItems={this.state.screens}
          menuPageSelectFn={page => this.selectPage(page)}
        />
        <ScreenContent 
          screen={ this.state.curPage }
          screenTransition={ this.state.screenTransition }
        />
      </div>
    );
  }
}
