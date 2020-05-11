import React from "react";
import "../../styles/ScreenContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

class ProjectSummaryPage extends React.Component {
    render() {
        return (
            <div className="screen-content__main-panel">
                <div className="screen-content__text-panel">
                    <div className="screen-content__text-title">Millenial's Challenge</div>
                    <div className="screen-content__text-description">
                        This is a Unity game developed along with Juliano Carmona Ferreira Jardim as a college assignment. 
                        The game is a 3D third person puzzler based on a 1989 game called "Chip's Challenge", developed for Windows 95 as part of Microsoft Entertainment Pack. The player must collect Wi-Fi icons throughout the level and reach its exit, represented by a smartphone. There are many obstacles in each level, such as enemies, pushable blocks, traps, locked doors, etc. which provide more fun to the game.
                    </div>
                    <div className="screen-content__text-title">Tools used</div>
                    <div className="screen-content__text-description">
                        Besides Unity, the team also used Blender in order to create some 3D models (although most of them are taken from the Unity store), as well as BitBucket for system versioning.
                    </div>
                    <div className="screen-content__text-title">Repository & download</div>
                    <div className="screen-content__text-description">
                        Version 0.4 of the game is available at <a href="https://drive.google.com/open?id=1oZiKPezKUxzMQTA6vb8oKWr4-RamezQ_">the author's Google Drive</a>.
                    <br/><br/>
                        The game is also available at its <a href="https://bitbucket.org/mwolfart/pcg-millenials-challenge-2/src/master/">BitBucket repository</a>.
                    </div>
                </div>
                <div className="screen-content__right-panel">
                    <img src={require("../../images/mc1.png")} alt="Profile" className="image-rectangular-big" />
                    <img src={require("../../images/mc2.png")} alt="Profile" className="image-rectangular-big" />
                    <img src={require("../../images/mc3.png")} alt="Profile" className="image-rectangular-big" />
                </div>
                <div className="screen-content__arrow-container">
                    <button onClick={() => this.props.changePageFn(1)} className="screen-content__arrow-button" title="Gameplay video">
                        <FontAwesomeIcon size="3x" icon={faArrowCircleRight} fixedWidth className="screen-content__arrow-icon"/>
                    </button>
                </div>
            </div>
        )
    }
}

class ProjectVideoPage extends React.Component {
    render() {
        return(
            <div className="screen-content__main-panel">
                <div className="screen-content__arrow-container">
                    <button onClick={() => this.props.changePageFn(0)} className="screen-content__arrow-button" title="Project description">
                        <FontAwesomeIcon size="3x" icon={faArrowCircleLeft} fixedWidth className="screen-content__arrow-icon"/>
                    </button>
                </div>
                <div className="screen-content__text-panel">
                    TEXT
                </div>
            </div>
        )
    }
}

export class MillenialsChallenge extends React.Component {
    render() {
        return (
            <div>
                <ProjectSummaryPage active={ this.props.currentPage === 0 } changePageFn={ this.props.changePageFn } />
            </div>
        );
    }
}