import React from "react";
import Form from "./Form";
import Button from "../Button";
import PaginProgress from "../PaginProgress";
import "./Slide1.scss";

const Slide1 = () => {
    return (
        <div className="slide">
            <PaginProgress/>
            <div className="slide__content">
                <h4 className="slide__content-title">Motorhuis laadpunt samenstellen</h4>
                <h2 className="slide__content-subtitle">Gefeliciteerd!</h2>
                <p className="slide__content-item">Je hebt een pracht oplaadpunt samengesteld! Vul jouw gegevens in en wij nemen graag jouw setting door. Tot snel!</p>
                <div className="slide__content-field">
                    <div className="slide__content-field-img">
                        <img src="" alt="charging station"/>
                    </div>
                    <div className="slide__content-field-features">
                        <ul className="features-list">
                            <li className="features-item"><span>Laden met vaste kabel</span></li>
                            <li className="features-item"><span>5 meter</span></li>
                            <li className="features-item"><span>Op een paal</span></li>
                            <li className="features-item"><span>Graafwerk</span></li>
                            <li className="features-item"><span>Tot 6 meter</span></li>
                            <li className="features-item"><span>Geen</span></li>
                        </ul>
                        <div className="element">
                            <p className="element__text">Jouw keuze</p>
                            <p className="element__price">€1.658</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Form/>
            {window.screen.width >= 480 && <Button className="vorige-btn" text="Vorige"/>}
            {window.screen.width < 480 && <Button className="vorige-btn" text=" "/>}
        </div>
    )
}

export default Slide1