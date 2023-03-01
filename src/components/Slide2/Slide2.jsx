import React from "react";
import Button from "../Button";
import PaginProgress from "../PaginProgress";
import Radio from "./Radio";

import "./Slide2.scss";

const Slide2 = () => {
  return (
    <div className="slide-wrapper">
      <div className="slide2">
        <PaginProgress />
        <div className="slide2__content">
          <h4 className="slide__content-title">
            Motorhuis laadpunt samenstellen
          </h4>
          <h2 className="slide__content-subtitle">
            Wat voor <br />
            laadpunt wil je?
          </h2>
          <p className="slide2__content-text">Tekst</p>
        </div>
        <div className="slide2__item"> 
            <div className="slide2__img-container">
            <div className="container-hidden">
                <div className="verloop-hidden"></div>
                <img src="img/hidden.png"
                    srcSet="img/hidden@2x.png 2x,
                            img/hidden@3x.png 3x" alt="hidden charger"
                    className="hidden-img"/>
                </div>
                <div className="container-umove"> 
                <div className="verloop-umove"></div>
                    <img src="img/u-move.png"
                        srcSet="img/u-move@2x.png 2x,
                                img/u-move@3x.png 3x" alt="u-move charger"
                                className="umove-img"/>
                </div>
            </div>  
            <Radio/>
        </div>
        {window.screen.width >= 480 && <Button className="vorige-btn" text="Vorige" />}
        {window.screen.width < 480 && <Button className="vorige-btn" text=" " />}
        {window.screen.width >= 480 && <Button className="volgende-btn" text="Volgende" />}
        {window.screen.width < 480 && <Button className="volgende-btn" text=" " />}
      </div>
      <p className="choice">Jouw keuze €1.519</p>
    </div>
  );
};

export default Slide2;
