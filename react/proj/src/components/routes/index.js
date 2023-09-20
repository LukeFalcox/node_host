import {Fragment} from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Sign from "../Signin/Sign"
import Entrar from "../Singup/Entrar"

const Private = ({Item}) => {
    const signed = false 

    return signed > 0 ? <Item/> : <Sign/>
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
        <Fragment>
            <Routes>
                <Route path="/" element={<Private Item={<Home/>}/>} />
                <Route path="/src/components/Signin/Sign.js" element={<Sign/>}/> 
                <Route path="/src/components/Singup/Entrar" element={<Entrar/>}/> 
                <Route path="*" element={<Sign/>}/> 
            </Routes>
        </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp