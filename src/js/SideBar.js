import React from "react";
import "../styles/SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

/*
class SideBarItem extends React.Component {
  render() {
    const itemInfo = this.props.info;
    const showTitle = this.props.showTitle;

    const buttonClass = "sidebar-item__button " + (
      this.props.isSelected
      ? "sidebar-item__button--clicked"
      : ""
    );

    const buttonTextClass = "sidebar-item__button-text " + (
      showTitle ? 
      "sidebar-item__button-text--expanded" 
      : "");

    return (
      <button onClick={() => this.props.clickItem(itemInfo.id)} className={buttonClass}>
        <FontAwesomeIcon
          icon={itemInfo.icon}
          size="2x"
          color="#FFFFFF"
          className="sidebar-item__icon"
          fixedWidth
        />
        {<div className={buttonTextClass}>{itemInfo.title}</div>}
      </button>
    );
  }
}
*/

/*
  constructor(props) {
    super(props);
    this.state = {

    };
  }
*/

class SideBarCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  renderCategoryPages(pageArray) {
    if (!pageArray)
      return;

    let pageElements = [];
    for (const page of pageArray) {
      pageElements.push(
        <li key={page.title}>
          <div className="sidebar-page__title">{ page.title }</div>
        </li>
      );
    }

    const pageMenuClass = "sidebar-page-menu " + (this.state.expanded ? " sidebar-page-menu--expanded" : "");

    return(
      <ul className={ pageMenuClass }>{ pageElements }</ul>
    );
  }

  expandCategory() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return(
      <div>
        <button onClick={() => this.expandCategory()} className="sidebar-button sidebar-button-category">
          <FontAwesomeIcon
            icon={ (this.state.expanded ? faChevronDown : faChevronRight) }
            color="#FFFFFF"
            fixedWidth
            className={ (!this.props.pages ? "sidebar-category-icon-hidden" : "") }
          />
        {<div className="sidebar-category__title">{this.props.title}</div>}
        </button>
        { this.renderCategoryPages(this.props.pages) }
      </div>
    );
  }
}

export class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      items: []
    };
  }

  clickPage(screenTitle) {
    this.setState({
      items: []
    });
    this.props.menuPageSelectFn(screenTitle);
  }

  createMenuItems(categories) {
    for (const category of categories) {
      this.state.items.push(
        <li key={category.title}>
          <SideBarCategory
            title={category.title}
            pages={category.pages}
            clickPage={screenTitle => this.clickPage(screenTitle)} 
          />
        </li>
      )
    }
  }

  toggleExpanded() {
    this.setState({
      expanded: !this.state.expanded,
      items: []
    });
  }

  render() {
    this.createMenuItems(this.props.menuItems);

    const sideBarClass = "sidebar " + (this.state.expanded ? "sidebar--expanded" : "");
    const sideBarMenuClass = "sidebar-menu " + (this.state.expanded ? "sidebar-menu--expanded" : "");

    return (
      <div className={ sideBarClass }>
        <button onClick={() => this.toggleExpanded()} className="sidebar-button sidebar-button-expand">
          <FontAwesomeIcon icon={faBars} size="2x" color="#FFFFFF" fixedWidth />
        </button>
        <ul className={ sideBarMenuClass } >{this.state.items}</ul>
      </div>
    );
  }
}
