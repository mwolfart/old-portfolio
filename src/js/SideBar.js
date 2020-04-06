import React from "react";
import "../styles/SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class SideBarItem extends React.Component {
  render() {
    const itemInfo = this.props.info;
    const showTitle = this.props.showTitle;
    const className = this.props.isSelected
      ? "sideBarItemClicked"
      : "sideBarItem";

    return (
      <div className={className}>
        <button onClick={() => this.props.clickItem(itemInfo.id)}>
          <FontAwesomeIcon
            icon={itemInfo.icon}
            size="3x"
            color="#FFFFFF"
            fixedWidth
          />
          {showTitle && <div>{itemInfo.title}</div>}
        </button>
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

  clickMenuItem(screenId) {
    this.setState({
      items: []
    });
    this.props.menuItemSelectFn(screenId);
  }

  createMenuItems(itemsInfo) {
    for (const item of itemsInfo) {
      this.state.items.push(
        <li key={item.id}>
          <SideBarItem
            info={item}
            showTitle={this.state.expanded}
            isSelected={this.props.menuSelectedItem === item.id}
            clickItem={screenId => this.clickMenuItem(screenId)}
          />
        </li>
      );
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

    return (
      <div className={ "sideBar " + (this.state.expanded ? "sideBarExpanded" : "")}>
        <button onClick={() => this.toggleExpanded()}>
          <FontAwesomeIcon icon={faBars} size="3x" color="#FFFFFF" fixedWidth />
        </button>
        <ul>{this.state.items}</ul>
      </div>
    );
  }
}
