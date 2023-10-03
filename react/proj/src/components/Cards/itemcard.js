import React from "react";
import styles from './itemcard.module.css';

const Itemcard = (props) => {
    return (
        <div className={styles["teste"]}>
            <div className={styles["cardContainer"]}>
                <img src={props.img} className={styles["card_img"]} alt="Imagem" />
                <div className={styles["card"]}>
                    <h5 className={styles["card_title"]}>{props.title}</h5>
                    <h5 className={styles["card_title"]}># {props.nConta}</h5>
                    <p className={styles["card_text"]}>{props.desc}</p>
                    
                    <button className={`btn ${styles.btnSuccess}`}>Usar</button>
                </div>
            </div>
        </div>
    );
};

export default Itemcard;
