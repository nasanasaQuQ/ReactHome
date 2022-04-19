import React from "react";
import { Layout } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from "@ant-design/icons";

const { Header } = Layout;

const TopHeader = () => {
    const [collapsible] = React.useState(false);
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
                {
                    collapsible ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>
                }
        </Header>
    )
}

export default TopHeader