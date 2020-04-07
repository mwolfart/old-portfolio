import React from "react";
import "../../styles/ScreenContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export class Home extends React.Component {
    render() {
        return (
            <div className="screen-content__main-panel">
                <div className="screen-content__text-panel">
                    <div className="screen-content__text-title">{ "Hello, and welcome to my page!" }</div>
                    <div className="screen-content__text-description">{ "Here you can find information about me and some projects I have done. You can view them in the toolbar at the left side of the page." }</div>
                    <div className="screen-content__text-title">{ "About me" }</div>
                    <div className="screen-content__text-description">{ "I am a computer science undergraduate who likes front-end stuff and, in the spare time, playing games, singing and looking for new music. Despite preferring front-end I also like to explore different areas of programming and learn new technologies" }</div>
                </div>
                <div className="screen-content__right-panel">
                    <img src={require("../../images/profile.jpg")} alt="Profile" className="image-square" />
                    { "Murilo Wolfart" }
                    <div className="screen-content__personal-data-container">
                        <div className="screen-content__personal-data-column">
                            <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth className="screen-content__personal-data-icon" />
                            <FontAwesomeIcon icon={faEnvelope} fixedWidth className="screen-content__personal-data-icon" />
                            <FontAwesomeIcon icon={faLinkedin} fixedWidth className="screen-content__personal-data-icon" />
                        </div>
                        <div className="screen-content__personal-data-column">
                            <span className="screen-content__personal-data-icon" >{ "Porto Alegre, RS, Brazil" }</span>
                            <span className="screen-content__personal-data-icon" >{ "mwolfart@gmail.com" }</span>
                            <span className="screen-content__personal-data-icon" >{ "Murilo Wolfart" }</span>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}