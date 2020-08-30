import React, { useState } from "react";
import "../styles/MainCanvas.scss";
import { SideBar } from "./SideBar";
import {
  faHome,
  faGamepad,
  faPiggyBank,
  faMusic
} from "@fortawesome/free-solid-svg-icons";
import { screenList } from "./ScreenList";
import classNames from 'classnames';

import { Home } from "../screens/Home";

export function MainCanvas() {
  const screens = useState(screenList);
  const [curPage, setCurPage] = useState(Home);
  const [screenTransition, setScreenTransition] = useState(false);
  const [transitionTimeout, setTransitionTimeout] = useState(null);

  // hook useState
  const selectPage = (page) => {
    clearTimeout(transitionTimeout);
    setScreenTransition(true);

    setTransitionTimeout(setTimeout(() => {
      setCurPage(page || screens[0]);
      setScreenTransition(false);
    }, 300));
  };

  const screenClass = classNames({
    "screen-content__selected-screen": true,
    "screen-content__selected-screen--hidden" : screenTransition
  });

  return (
    <div className="main-canvas">
      <SideBar
        menuItems={screens}
        menuPageSelectFn={page => selectPage(page.class)}
      />
      <div className="screen-content">
        <div className={ screenClass }>
          <curPage
            selectPageFn={ page => selectPage(page) }
          />
        </div>
      </div>
    </div>
  );
}
