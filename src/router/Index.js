import React from "react";
import {
    // Redirect,
    Switch,
    Route,
    HashRouter
} from "react-router-dom"
import Login from "../views/login/Login";
import SandBox from "../views/sandbox/SandBox";


const Index = () => {
    return (

        <HashRouter>
            <Switch>
                <Route path="/login" component={ Login }/>
                <Route path="/" component={ SandBox }/>
                {/* <Route path="/" render={
                    () => {
                        // localStorage.getItem("token") ?
                            // <SandBox/> :
                            // <Redirect to="/login"/>
                            <SandBox></SandBox>
                    }
                }/> */}
            </Switch>
        </HashRouter>
    )
}

export default Index;


