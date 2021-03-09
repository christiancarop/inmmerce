import React, { Component } from "react";
import styles from "./index.css";
import Chronometer from "../Chronometer";

const Aniversario = () => (
    <div>
        <article className="athelas">
            <div className={`${styles.coverPhoto}`}>
                <div className={`${styles.contentChronometer}`}>
                    <Chronometer/>
                </div>
        </div>
        <div className="center measure-wide f5 pv5 lh-copy ph2">
            <h1 className="f1 lh-title" style={{color: "rgb(238, 15 , 104)"}}>Conoce más sobre Aniversario Éxito</h1>
            <p>
            En tu Éxito celebramos nuestro aniversario con ofertas exclusivas para ti.
A esta celebración que llamamos Aniversario Éxito, queremos que miles de colombianos disfruten de promociones increíbles en nuestros almacenes físicos, éxito.com, domicilios y éxito atendido.
            </p>

            <div className="backgroundyellow pa6 shadow-5" style={{backgroundColor: "#ffda02"}}>
            <h2 className="f3-s f1 mb3 ma0"> <span style={{color: "#ee0d68; font-size: 30px;"}}>¿Cuándo es Aniversario Éxito?</span></h2>
            <p className="mt0 f4" style={{fontSize: "23px; color: #ee0d68;"}} >Desde el 27 de febrero a las 11:59 p.m., con 113 almacenes abiertos<br/> durante 24 horas, hasta el 15 de marzo.</p>
            </div>

            <h2 className="f3-s f1 mb3"> <span style={{color: "rgb(238, 15 , 104)"}}>¿Qué encuentras durante nuestro Aniversario?</span></h2>
            <p>Habrán grandes descuentos en categorías como televisores, celulares y productos para el mercado de tus marcas favoritas. Durante estos días de promociones podrás encontrar 2x1, descuentos hasta del 40% y mucho más.</p>
            
        </div>
        </article>
    </div>
        
);


export default Aniversario;