import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

export class AITools extends React.Component {
    render() {
        return (
            <div className="screen-content__main-panel">
                <div className="screen-content__text-panel screen-content__text-panel--left-block">
                    <div className="screen-content__text-title">AI Tools</div>
                    <div className="screen-content__text-description">
                        During the courses INF01048 (Inteligência Artificial) and INF01017 (Aprendizado de Máquina) I had to develop some projects using artificial intelligence along with classmates. Here you can find a brief description of some of them
                    </div>
                    <div className="screen-content__text-title">AI Racers</div>
                    <div className="screen-content__text-description">
                        This is an algorithm that teaches itself on how to play a racing game and perform good results. The project consisted of two phases, both developed in Python. The first one used local approximation algorithms (such as hill climbing, simulated annealing and genetic algorithms). The second used a Q-Learning algorithm.
                        You can access the repositories <a href="https://bitbucket.org/mwolfart/ia-super-ultimate-smart-racer-deluxe-goty-edition/src/master/">here</a> (phase 1) and <a href="https://bitbucket.org/mwolfart/ia-super-car-racer-new-golden-edition-master-levels-goty/src/master/">here</a> (phase 2). Since the application is a little complex to run, please contact me if you want to do so.
                    </div>
                </div>
                <div className="screen-content__right-panel">
                    <img src={require("../../images/airacers1.png")} alt="AI Racers phase 1" className="image-rectangular-big" />
                    <img src={require("../../images/airacers2.png")} alt="AI Racers phase 2" className="image-rectangular-big" />
                </div>
                <div className="screen-content__arrow-container">
                    <button onClick={() => this.props.selectPageFn(AIToolsPage2)} className="screen-content__arrow-button" title="Next">
                        <FontAwesomeIcon size="3x" icon={faArrowCircleRight} fixedWidth className="screen-content__arrow-icon"/>
                    </button>
                </div>
            </div>
        );
    }
}

// TODO UPLOAD REPORTS

class AIToolsPage2 extends React.Component {
    render() {
        return (
            <div className="screen-content__main-panel">
                <div className="screen-content__arrow-container">
                    <button onClick={() => this.props.selectPageFn(AITools)} className="screen-content__arrow-button" title="Back">
                        <FontAwesomeIcon size="3x" icon={faArrowCircleLeft} fixedWidth className="screen-content__arrow-icon"/>
                    </button>
                </div>
                <div className="screen-content__text-panel">
                    <div className="screen-content__text-title">Random Forests</div>
                    <div className="screen-content__text-description">
                        This is an application that implements a fully operational random forest algorithm. It was developed in Python along with my classmate Juliano Jardim. You can find the project repository <a href="https://bitbucket.org/mwolfart/ml-random-forests-of-illusion/src/master/">here</a>. In the root folder there is a report (in portuguese) containing details about the implementation and how to run it.
                    </div>
                    <div className="screen-content__text-title">Neural Networks</div>
                    <div className="screen-content__text-description">
                        This is an application that implements a neutral network algorithm. It was also developed with Juliano as the second assignment for the same course. You can find the project repository along with the project report <a href="https://bitbucket.org/mwolfart/ml-big-boos-neural-network-of-haunted-tunnels/src/master/">here</a>.
                    </div>
                </div>
            </div>
        );
    }
}