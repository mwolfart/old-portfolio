import React, { useState } from "react";
import "../styles/SideBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import classNames from 'classnames';

const SideBarButton = (props) => {
  return(
    <button onClick={() => props.clickPage(props.page)} className="sidebar-button sidebar-button-category">
      <FontAwesomeIcon
        icon={ faChevronRight }
        fixedWidth
        className="sidebar-category-icon-hidden"
      />
    {<div className="sidebar-category__title">{props.page.title}</div>}
    </button>
  );
}

const SideBarCategory = (props) => {
  const [expanded, setExpanded] = useState(false);

  const renderCategoryPages = (pageArray) => {
    if (!pageArray)
      return;

    let pageElements = [];
    for (const page of pageArray) {
      pageElements.push(
        <li key={page.title}>
          <button 
            className="sidebar-button sidebar-page__title"
            onClick={ () => props.clickPage(page) }
            >{ page.title }
          </button>
        </li>
      );
    }

    const pageMenuClass = classNames({
      "sidebar-page-menu": true,
      "sidebar-page-menu--expanded": expanded
    });

    return(
      <ul className={ pageMenuClass }>{ pageElements }</ul>
    );
  }
  
  return(
    <div>
      <button onClick={() => setExpanded(!expanded)} className="sidebar-button sidebar-button-category">
        <FontAwesomeIcon
          icon={ (expanded ? faChevronDown : faChevronRight) }
          color="#FFFFFF"
          fixedWidth
        />
      {<div className="sidebar-category__title">{props.title}</div>}
      </button>
      { renderCategoryPages(props.pages) }
    </div>
  );
}

export const SideBar = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [items, setItems] = useState([]);

  const clickPage = (page) => {
    setItems([]);
    props.menuPageSelectFn(page);
  }

  const createItem = (item) => {
    if (item.pages) {
      return (
        <SideBarCategory
          title={item.title}
          pages={item.pages}
          clickPage={page => clickPage(page)} 
        />
      );
    } else {
      return (
        <SideBarButton
          page={item}
          clickPage={page => clickPage(page)} 
        />
      );
    }
  }

  const createMenuItems = (categories) => {
    // TODO this should not happen here
    items.length = 0;

    for (const category of categories) {
      items.push(
        <li key={category.title}>
          { createItem(category) }
        </li>
      )
    }
  }

  const toggleExpanded = () => {
    setExpanded(!expanded);
    setItems([]);
  }

  createMenuItems(props.menuItems);

  const sideBarClass = classNames({
    "sidebar": true,
    "sidebar--expanded": expanded
  });
  const sideBarMenuClass = classNames({
    "sidebar-menu": true,
    "sidebar-menu--expanded": expanded
  });

  return (
    <div className={ sideBarClass }>
      <button onClick={() => toggleExpanded()} className="sidebar-button sidebar-button-expand">
        <FontAwesomeIcon icon={faBars} size="2x" color="#FFFFFF" fixedWidth />
      </button>
      <ul className={ sideBarMenuClass } >{items}</ul>
    </div>
  );
}
