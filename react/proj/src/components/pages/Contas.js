import Itemcard from "../Cards/itemcard"
import React from "react"
import users from '../Users/users'
import styles from './styles/Contas.module.css'
const Contas = () => {
    return(
        <>
        <h2>Contas</h2>
        <section className={styles["py"]}>
            <div className={styles["row"]}>
            {users.User.map((item, index) => {
                return(
                    <Itemcard img={item.img} title={item.title} desc={item.desc} nConta ={item.nConta} key={index}/>
                )
            })}
            
            
            </div>
        </section>
        </> 
    );
}

export default Contas