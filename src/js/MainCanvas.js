import React from "react";
import "../styles/MainCanvas.css";
import { SideBar } from "./SideBar";
import {
  faHome,
  faGamepad,
  faPiggyBank,
  faMusic
} from "@fortawesome/free-solid-svg-icons";

// pages
import { Home } from "./screens/Home";
import { MillenialsChallenge } from "./screens/MillenialsChallenge";
import { DangerousDave } from "./screens/DangerousDave";
import { CowMaze } from "./screens/CowMaze";
import { PatasDadas } from "./screens/PatasDadas";
import { PiggyBank } from "./screens/PiggyBank";
import { LearnIt } from "./screens/LearnIt";
import { Compiler } from "./screens/Compiler";
import { AITools } from "./screens/AITools";
import { OSTools } from "./screens/OSTools";
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
        { title: "Dangerous Dave", class: DangerousDave },
        { title: "The Homogeneous Cow Maze", class: CowMaze }
      ] },
      { title: "Web projects", pages: [
        { title: "Patas Dadas internal system", class: PatasDadas },
        { title: "Piggy Bank", class: PiggyBank },
        { title: "LearnIt", class: LearnIt }
      ] },
      { title: "Shell applications", pages: [
        { title: "OS Tools", class: OSTools },
        { title: "AI Tools", class: AITools },
        { title: "Code Compiler", class: Compiler }
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
