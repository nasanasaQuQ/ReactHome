import React from "react";
import { Layout, Menu } from "antd";
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from "@ant-design/icons";
const { Sider }  = Layout

const SideMenu = () => {
    return (
        <Sider trigger={null} collapsible>
        <div className="logo">
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key={'1'} icon={<UserOutlined></UserOutlined>}>
                    nav1
                </Menu.Item>
                <Menu.Item key={'2'} icon={<VideoCameraOutlined></VideoCameraOutlined>}>
                    nav2
                </Menu.Item>
                <Menu.Item key={'3'} icon={<UploadOutlined></UploadOutlined>}>
                    nav3
                </Menu.Item>
            </Menu>
        </div>
        </Sider>
    )
}

export default SideMenu;