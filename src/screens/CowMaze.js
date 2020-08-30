import React from "react";
import hcm1 from "../images/hcm1.png";
import hcm2 from "../images/hcm2.png";
import hcm3 from "../images/hcm3.png";

export const CowMaze = () =>
    <div className="screen-content__main-panel">
        <div className="screen-content__text-panel screen-content__text-panel--left-block">
            <div className="screen-content__text-title">The Homogeneous Cow Maze</div>
            <div className="screen-content__text-description">
                This is a C++ project developed for the course INF01047 (Computação Gráfica). It is a 3D game based on the 1989 game called "Chip's Challenge" (just like Millenial's Challenge), developed using only the C++ language and the OpenGL library. The goal of the project was to understand how OpenGL library works and how to render graphics with it.
                As for the game itself, the goal is to collect all baby cows (light-blue) in each level and go to the "Mother Cow", while avoiding obstacles and making use of tools such as keys and movable blocks.
            </div>
            <div className="screen-content__text-title">Tools used</div>
            <div className="screen-content__text-description">
                The project was mainly built using CodeBlocks and the OpenGL library. Some external 3D models were downloaded for the keys and cows. Textures were all downloaded from the internet. Part of the rendering functions were developed during the course, but most of the game logic was developed directly for the assignment.
            </div>
            <div className="screen-content__text-title">Repository</div>
            <div className="screen-content__text-description">
                To play the game you can clone <a href="https://bitbucket.org/mwolfart/fcg-the-homogeneous-cow-maze/src/master/">its repository</a> and run the executable under /bin/debug.
            </div>
        </div>
        <div className="screen-content__right-panel">
            <img src={hcm1} alt="Homogeneous Cow Maze screenshot 1" className="image-rectangular-big" />
            <img src={hcm2} alt="Homogeneous Cow Maze screenshot 2" className="image-rectangular-big" />
            <img src={hcm3} alt="Homogeneous Cow Maze screenshot 3" className="image-rectangular-big" />
        </div>
    </div>;