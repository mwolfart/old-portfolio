import React, { useState } from "react";
import "../styles/MainCanvas.scss";
import { SideBar } from "./SideBar";
import classNames from 'classnames';

import { ScreenList } from "../screens/ScreenList";
import { Home } from "../screens/Home";

export function MainCanvas() {
  const [curPage, setCurPage] = useState(Home);
  const [screenTransition, setScreenTransition] = useState(false);
  const [transitionTimeout, setTransitionTimeout] = useState(null);

  const selectPage = (page) => {
    clearTimeout(transitionTimeout);
    setScreenTransition(true);
    const props = { selectPageFn: (pg) => selectPage(pg) };

    setTransitionTimeout(setTimeout(() => {
      setCurPage(page(props) || ScreenList[0].class(props));
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
        menuItems={ScreenList}
        menuPageSelectFn={page => selectPage(page.class)}
      />
      <div className="screen-content">
        <div className={ screenClass }>
          {curPage}
        </div>
      </div>
    </div>
  );
}
