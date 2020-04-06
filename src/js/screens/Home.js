import React from "react";
import "../../styles/ScreenContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export class Home extends React.Component {
    render() {
        return (
            <div className="contentMainPanel">
                <div className="contentTextPanel">
                    <div className="contentTitle">{ "Hello, and welcome to my page!" }</div>
                    <div className="contentDescription">{ "Here you can find information about me and some projects I have done. You can view them in the toolbar at the left side of the page." }</div>
                    <div className="contentTitle">{ "About me" }</div>
                    <div className="contentDescription">{ "I am a computer science undergraduate who likes front-end stuff and, in the spare time, playing games, singing and looking for new music. Despite preferring front-end I also like to explore different areas of programming and learn new technologies" }</div>
                </div>
                <div className="contentImagePanel">
                    <img src={require("../../images/profile.jpg")} alt="Profile" className="squareImage" />
                    { "Murilo Wolfart" }
                    <div className="contentPersonalDataContainer">
                        <div className="contentPersonalDataColumn">
                            <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth className="personalDataIcon" />
                            <FontAwesomeIcon icon={faEnvelope} fixedWidth className="personalDataIcon" />
                            <FontAwesomeIcon icon={faLinkedin} fixedWidth className="personalDataIcon" />
                        </div>
                        <div className="contentPersonalDataColumn">
                            <span className="personalDataIcon" >{ "Porto Alegre, RS, Brazil" }</span>
                            <span className="personalDataIcon" >{ "mwolfart@gmail.com" }</span>
                            <span className="personalDataIcon" >{ "Murilo Wolfart" }</span>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}