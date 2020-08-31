import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

import mc1 from "../images/mc1.png";
import mc2 from "../images/mc2.png";
import mc3 from "../images/mc3.png";

export const MillenialsChallenge = ({ selectPageFn }) =>
    <div className="screen-content__main-panel">
        <div className="screen-content__text-panel screen-content__text-panel--left-block">
            <div className="screen-content__text-title">Millenial's Challenge</div>
            <div className="screen-content__text-description">
                This is a Unity game developed along with Juliano Carmona Ferreira Jardim as a college assignment. 
                The game is a 3D third person puzzler based on a 1989 game called "Chip's Challenge" (developed for Windows 95 as part of Microsoft Entertainment Pack). The player must collect Wi-Fi icons throughout the level and reach its exit, represented by a smartphone. There are many obstacles in each level, such as enemies, pushable blocks, traps, locked doors, etc. which provide more fun to the game.
            </div>
            <div className="screen-content__text-title">Tools used</div>
            <div className="screen-content__text-description">
                Besides Unity and C#, the team also used Blender in order to create some 3D models (although most of them were taken from the Unity store), as well as BitBucket for system versioning.
            </div>
        </div>
        <div className="screen-content__right-panel">
            <img src={mc1} alt="Millenial's Challenge screenshot 1" className="image--rectangular-big" />
            <img src={mc2} alt="Millenial's Challenge screenshot 2" className="image--rectangular-big" />
            <img src={mc3} alt="Millenial's Challenge screenshot 3" className="image--rectangular-big" />
        </div>
        <div className="screen-content__arrow-container">
            <button onClick={() => selectPageFn(MillenialsChallengePage2)} className="screen-content__arrow-button" title="Gameplay video">
                <FontAwesomeIcon size="3x" icon={faArrowCircleRight} fixedWidth className="screen-content__arrow-icon"/>
            </button>
        </div>
    </div>;

export const MillenialsChallengePage2 = ({ selectPageFn }) =>
    <div className="screen-content__main-panel">
        <div className="screen-content__arrow-container">
            <button onClick={() => selectPageFn(MillenialsChallenge)} className="screen-content__arrow-button" title="Project description">
                <FontAwesomeIcon size="3x" icon={faArrowCircleLeft} fixedWidth className="screen-content__arrow-icon"/>
            </button>
        </div>
        <div className="screen-content__text-panel">
            <div className="screen-content__text-title">Gameplay</div>
            <div className="screen-content__text-description">
                Below is a video showing the gameplay of Millenial's Challenge level 01. Gameplay videos for level 02 and 03 can be found <a href="https://youtu.be/GuPiVk4cFJg">here</a> and <a href="https://youtu.be/jyRXoygfuSY">here</a>, respectively.
            </div>
            <div className="screen-content__text-video">
                <iframe title="Millenial's Challenge video" width="560" height="250" src="https://www.youtube.com/embed/XQX37-c8pZk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="screen-content__text-title">Repository & download</div>
            <div className="screen-content__text-description">
                Version 0.4 of the game is available at <a href="https://drive.google.com/open?id=1oZiKPezKUxzMQTA6vb8oKWr4-RamezQ_">the author's Google Drive</a>.
            <br/><br/>
                The game is also available at its <a href="https://bitbucket.org/mwolfart/pcg-millenials-challenge-2/src/master/">BitBucket repository</a>, however some of the assets are not present due to storage issues (they were stored separately in Google Drive). If you want to build the project in your machine, please contact the authors.
            </div>
        </div>
    </div>;