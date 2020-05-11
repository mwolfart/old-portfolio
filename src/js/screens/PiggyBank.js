import React from "react";
import "../../styles/ScreenContent.css";

export class PiggyBank extends React.Component {
    render() {
        return (
            <div className="screen-content__main-panel">
                <div className="screen-content__text-panel">
                    <div className="screen-content__text-title">Piggy Bank</div>
                    <div className="screen-content__text-description">
                        This is an application built to assist users on storing money. The backend is developed by Guilherme Cattani de Castro, while the front-end was developed by me. <br/>
                        More description to come. <br />
                        You can access the application through the button below.
                    </div>
                </div>
            </div>
        )
    }
}