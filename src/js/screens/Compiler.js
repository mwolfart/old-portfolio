import React from "react";

export class Compiler extends React.Component {
    render() {
        return (
            <div className="screen-content__main-panel">
                <div className="screen-content__text-panel">
                    <div className="screen-content__text-title">Code Compiler</div>
                    <div className="screen-content__text-description">
                        This is a project made for the course INF01147 (Compiladores) along with Luís Miguel Batista dos Santos. It is a compiler build in C in order to interpret a fictional language made by the professor. The project is separated in seven cumulative parts: lexical analyzer, syntax analyzer, AST generator, semantic analyzer, three-address code generator, and optimizations.
                        The project repository is located <a href="https://bitbucket.org/mwolfart/compiladores-trabalho/src/new-master/">here</a>. In order to build the compiler you can run the Makefile for the desired part of the project. 
                    </div>
                </div>
            </div>
        );
    }
}