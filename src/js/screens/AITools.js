import React from "react";

export class AITools extends React.Component {
    render() {
        return (
            <div className="screen-content__main-panel">
                <div className="screen-content__text-panel">
                    <div className="screen-content__text-title">AI Tools</div>
                    <div className="screen-content__text-description">
                        During the courses INF01048 (Inteligência Artificial) and INF01017 (Aprendizado de Máquina) I had to develop some projects using artificial intelligence along with classmates. Here you can find a brief description of some of them
                    </div>
                    <div className="screen-content__text-title">AI Racers</div>
                    <div className="screen-content__text-description">
                        This is an algorithm that teaches itself on how to play a racing game and perform good results. The project consisted of two phases, both developed in Python. The first one used local approximation algorithms (such as hill climbing, simulated annealing and genetic algorithms). The second used a Q-Learning algorithm. You can access the repositories <a href="https://bitbucket.org/mwolfart/ia-super-ultimate-smart-racer-deluxe-goty-edition/src/master/">here</a> (phase 1) and <a href="https://bitbucket.org/mwolfart/ia-super-car-racer-new-golden-edition-master-levels-goty/src/master/">here</a> (phase 2). 
                    </div>
                </div>
            </div>
        );
    }
}