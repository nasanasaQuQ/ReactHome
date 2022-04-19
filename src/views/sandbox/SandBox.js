import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SideMenu from "../../components/sandbox/SideMenu";
import TopHeader from "../../components/sandbox/TopHeader";
import Home from "./home/Home";
import Nopermission from "./nopermission/Nopermission";
import RightManage from "./right-manage/RightManage";
import UserManage from "./user-manage/UserManage";  
import RoleList from "./right-manage/RoleList";

// antd
import { Layout } from "antd";
const { Content } = Layout;

const SandBox = () => {
    return (
        <div>
            <SideMenu/>
            <TopHeader/>

            <Switch>
                <Route path="/home" component={ Home }/>
                <Route path="/right-manage/role-list" component={ RoleList }/>
                <Route path="/UserManage" component={ UserManage }/>
                <Route path="/RightManage" component={ RightManage }/>

                <Redirect from="/" to="/home" exact/>
                <Route path="*" component={ Nopermission }/>"               
            </Switch>
        </div>
    )
}

export default SandBox;