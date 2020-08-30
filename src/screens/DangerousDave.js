import React from "react";
import dd1 from "../images/dd1.png";
import dd2 from "../images/dd2.png";
import dd3 from "../images/dd3.png";

export const DangerousDave = () =>
    <div className="screen-content__main-panel">
        <div className="screen-content__text-panel screen-content__text-panel--left-block">
            <div className="screen-content__text-title">Dangerous Dave replica</div>
            <div className="screen-content__text-description">
                This Python project was developed as a final assignment for the course INF01121 (Modelos de Linguagens de Programação), with the goal to experiment the different types of paradigms of a programming language. It is a replica of the 1988 game <a href="https://en.wikipedia.org/wiki/Dangerous_Dave">Dangerous Dave</a> by John Romero, the only major difference being the absence of the enemies due to lack of development time. The project contains all 10 levels along with all bonus rooms.
            </div>
            <div className="screen-content__text-title">Tools used</div>
            <div className="screen-content__text-description">
                The project uses the pygame Python library to render the graphics and display. Since the goal of the project was to understand different types of paradigms, there are two types of implementation: one which is full-OO and another which contains OO and functional elements. The functional part of the second implementation was made converting some of the helper functions to the said paradigm.
            </div>
            <div className="screen-content__text-title">Repository</div>
            <div className="screen-content__text-description">
                To play the game you can clone <a href="https://bitbucket.org/mwolfart/mlp-dangerous-dave/src/master/">its repository</a> and run "python main_oo.py" under the command line in the root folder.
            </div>
        </div>
        <div className="screen-content__right-panel">
            <img src={dd1} alt="Dangerous Dave screenshot 1" className="image-rectangular-big" />
            <img src={dd2} alt="Dangerous Dave screenshot 2" className="image-rectangular-big" />
            <img src={dd3} alt="Dangerous Dave screenshot 3" className="image-rectangular-big" />
        </div>
    </div>;