import React from "react";
import "../styles/SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

class SideBarButton extends React.Component {
  render() {
    return(
      <button onClick={() => this.props.clickPage(this.props.page)} className="sidebar-button sidebar-button-category">
        <FontAwesomeIcon
          icon={ faChevronRight }
          fixedWidth
          className="sidebar-category-icon-hidden"
        />
      {<div className="sidebar-category__title">{this.props.page.title}</div>}
      </button>
    );
  }
}

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
          <button 
            className="sidebar-button sidebar-page__title"
            onClick={ () => this.props.clickPage(page) }
            >{ page.title }
          </button>
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

  clickPage(page) {
    this.setState({
      items: []
    });
    this.props.menuPageSelectFn(page);
  }

  createItem(item) {
    if (item.pages) {
      return (
        <SideBarCategory
          title={item.title}
          pages={item.pages}
          clickPage={page => this.clickPage(page)} 
        />
      );
    } else {
      return (
        <SideBarButton
          page={item}
          clickPage={page => this.clickPage(page)} 
        />
      );
    }
  }

  createMenuItems(categories) {
    // TODO this should not happen here
    this.state.items.length = 0;

    for (const category of categories) {
      this.state.items.push(
        <li key={category.title}>
          { this.createItem(category) }
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
