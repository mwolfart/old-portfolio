import React from "react";

export class DangerousDave extends React.Component {
    render() {
        return (
            <div className="screen-content__main-panel">
                <div className="screen-content__text-panel screen-content__text-panel--left-block">
                    <div className="screen-content__text-title">Dangerous Dave replica</div>
                    <div className="screen-content__text-description">
                        This Python project was developed as a final assignment for the course INF01121, with a goal to experiment the different types of paradigm of a programming language. It's a replica of the 1988 game <a href="https://en.wikipedia.org/wiki/Dangerous_Dave">Dangerous Dave</a> by John Romero, the only major difference being the absence of the enemies due to lack of development time. The project contains all 10 levels along with all bonus rooms.
                    </div>
                    <div className="screen-content__text-title">Tools used</div>
                    <div className="screen-content__text-description">
                        The project uses the pygame Python library to render the graphics and display. Since the goal of the project was to understand different types of paradigm, there are two types of implementation: one which is full-OO and another which contains OO and functional elements, the latter converting some smaller helper functions into functional paradigm.
                    </div>
                    <div className="screen-content__text-title">Repository</div>
                    <div className="screen-content__text-description">
                        To play the game you can clone <a href="https://bitbucket.org/mwolfart/mlp-dangerous-dave/src/master/">its repository</a> and run "python main_oo.py" under the command line in the root folder.
                    </div>
                </div>
                <div className="screen-content__right-panel">
                    <img src={require("../../images/dd1.png")} alt="Profile" className="image-rectangular-big" />
                    <img src={require("../../images/dd2.png")} alt="Profile" className="image-rectangular-big" />
                    <img src={require("../../images/dd3.png")} alt="Profile" className="image-rectangular-big" />
                </div>
            </div>
        )
    }
}