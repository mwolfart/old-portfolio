import React, { useState } from "react";
import classNames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "../styles/SideBar.sass";

const SideBarButton = ({ page, clickPage }) => {
  return(
    <button onClick={() => clickPage(page)} className="sidebar__button sidebar__button--category">
      <FontAwesomeIcon
        icon={ faChevronRight }
        fixedWidth
        className="sidebar__category-icon-hidden"
      />
    {<div className="sidebar__category-title">{page.title}</div>}
    </button>
  );
}

const SideBarCategoryButton = ({ title, pages, clickPage }) => {
  const [expanded, setExpanded] = useState(false);

  const pageLinkList = pages.map((page) => (
    <li key={page.title}>
      <button 
        className="sidebar__button sidebar__button--page"
        onClick={ () => clickPage(page) }
        >{ page.title }
      </button>
    </li>
  ))

  const pageMenuClass = classNames({
    "sidebar__page-menu": true,
    "sidebar__page-menu--expanded": expanded
  });

  return(
    <div>
      <button onClick={() => setExpanded(!expanded)} className="sidebar__button sidebar__button--category">
        <FontAwesomeIcon
          icon={ (expanded ? faChevronDown : faChevronRight) }
          color="#FFFFFF"
          fixedWidth
        />
      {<div className="sidebar__category-title">{title}</div>}
      </button>
      <ul className={ pageMenuClass }>{ pageLinkList }</ul>
    </div>
  );
}

export const SideBar = ({ menuItems, menuPageSelectFn }) => {
  const [expanded, setExpanded] = useState(false);

  const createButton = (item) => {
    if (item.pages) {
      return (
        <SideBarCategoryButton
          title={item.title}
          pages={item.pages}
          clickPage={page => menuPageSelectFn(page)} 
        />
      );
    } else {
      return (
        <SideBarButton
          page={item}
          clickPage={page => menuPageSelectFn(page)} 
        />
      );
    }
  }

  const categoryBtnList = menuItems.map((category) => (
    <li key={category.title}>
      { createButton(category) }
    </li>
  ));

  const sideBarClass = classNames({
    "sidebar": true,
    "sidebar--expanded": expanded
  });
  const sideBarMenuClass = classNames({
    "sidebar__menu": true,
    "sidebar__menu--expanded": expanded
  });

  return (
    <div className={ sideBarClass }>
      <button onClick={() => setExpanded(!expanded)} className="sidebar__button sidebar__button--expanded">
        <FontAwesomeIcon icon={faBars} size="2x" color="#FFFFFF" fixedWidth />
      </button>
      <ul className={ sideBarMenuClass } >{categoryBtnList}</ul>
    </div>
  );
}
