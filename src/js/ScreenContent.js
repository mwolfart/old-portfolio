import React from "react";
import "../styles/ScreenContent.css";

export class ScreenContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0
    };
  }

  changePage(id) {
    this.setState({ currentPage: id });
  }

  render() {
    const screen = this.props.screen;
    
    let screenClass = "screen-content__selected-screen";
    if (this.props.screenTransition) {
      screenClass += " screen-content__selected-screen--hidden" 
    }

    return(
      <div className="screen-content">
        <div className={ screenClass }>
          <screen.class
            currentPage={ this.state.currentPage }
            changePage={ (id) => this.changePage(id) }
          />
        </div>
      </div>
    );
  }
}
