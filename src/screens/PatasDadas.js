import React from "react";
import pd1 from "../images/pd1.png";
import pd2 from "../images/pd2.png";
import pd3 from "../images/pd3.png";

export const PatasDadas = () =>
    <div className="screen-content__main-panel">
        <div className="screen-content__text-panel screen-content__text-panel--left-block">
            <div className="screen-content__text-title">Patas Dadas internal system</div>
            <div className="screen-content__text-description">
                This was a small project made for the course INF01022 (Laboratório de Sistemas de Software). It was supposed to be an internal management system for the local Porto Alegre NGO Patas Dadas, so that they could manage their supplies and pets available for adoption. The website was, however, discontinued.
            </div>
            <div className="screen-content__text-title">Tools used</div>
            <div className="screen-content__text-description">
                The project is a Java Spring website with a jQuery/JS frontend. Bootstrap was used in order to help with the website design. The team was formed by the alumni Jéssica Rocha, Taiane Oliveira and me, with Jéssica being mainly responsible by the backend while Taiane and I worked on the frontend (despite all teammates working occasionally in all parts of the application). 
            </div>
            <div className="screen-content__text-title">Repository & Application</div>
            <div className="screen-content__text-description">
                Project repository is available at <a href="https://bitbucket.org/mwolfart/sistema-patas-dadas/src/master/">BitBucket</a>. Unfortunately the website is not available at the time since it was discontinued, but you can check some screenshots in the panel to the right.
            </div>
        </div>
        <div className="screen-content__right-panel">
            <img src={pd1} alt="Patas Dadas internal system screenshot 1" className="image-rectangular-big" />
            <img src={pd2} alt="Patas Dadas internal system screenshot 2" className="image-rectangular-big" />
            <img src={pd3} alt="Patas Dadas internal system screenshot 3" className="image-rectangular-big" />
        </div>
    </div>;