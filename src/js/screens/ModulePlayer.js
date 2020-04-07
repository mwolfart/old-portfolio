import React from "react";

export class ModulePlayer extends React.Component {
    render() {
        return (
            <div className="screen-content__main-panel">
                <div className="screen-content__text-panel">
                    <div className="screen-content__text-title">{ "Module player" }</div>
                    <div className="screen-content__text-description">{ `
                        This is a Unity game developed along with Juliano Carmona Ferreira Jardim as a college assignment. 
                        More description to come.
                        ` }</div>
                </div>
            </div>
        )
    }
}