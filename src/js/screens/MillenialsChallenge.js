import React from "react";
import "../../styles/ScreenContent.css";

export class MillenialsChallenge extends React.Component {
    render() {
        return (
            <div className="screen-content__main-panel">
                <div className="screen-content__text-panel">
                    <div className="screen-content__text-title">{ "Millenial's Challenge" }</div>
                    <div className="screen-content__text-description">{ `
                        This is a Unity game developed along with Juliano Carmona Ferreira Jardim as a college assignment. 
                        The game is a 3D puzzler based on a 1989 game called "Chip's Challenge", developed for Windows 95 as part of Microsoft Entertainment Pack. 
                        ` }</div>
                </div>
                <div className="screen-content__right-panel">
                    <img src={require("../../images/mc1.png")} alt="Profile" className="image-rectangular-big" />
                    <img src={require("../../images/mc2.png")} alt="Profile" className="image-rectangular-big" />
                    <img src={require("../../images/mc3.png")} alt="Profile" className="image-rectangular-big" />
                </div>
            </div>
        )
    }
}