import React, { useRef, useState } from "react";
import { Link, usePage } from "@inertiajs/react";

import Highlighter from "react-highlight-words";

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    LogoutOutlined,
    DownOutlined,
    UsergroupAddOutlined,
    MacCommandOutlined,
    SearchOutlined,
    SettingOutlined,
    UserAddOutlined,
    GroupOutlined,
    DollarOutlined,
    FullscreenOutlined,
} from "@ant-design/icons";

import {
    Col,
    Layout,
    Menu,
    Row,
    theme,
    Typography,
    Dropdown,
    Avatar,
    Button,
    Input,
    Space,
    Table,
} from "antd";

const { Header, Sider, Content } = Layout;

const items = [
    {
        key: "profile",
        label: <Link href={window.route("profile.edit")}>My profile</Link>,
        icon: <UserOutlined />,
    },
    {
        key: "logout",
        label: (
            <Link href={window.route("logout")} method="post" as="div">
                Logout
            </Link>
        ),
        icon: <LogoutOutlined />,
    },
];

export default function Authenticated({ header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const { auth } = usePage().props;

    const initial =
        JSON.parse(localStorage.getItem("sidebarCollapsed")) || false;
    const [collapsed, setCollapsed] = useState(initial);

    const toggleCollapse = () => {
        const updated = !collapsed;
        setCollapsed(updated);
        localStorage.setItem("sidebarCollapsed", JSON.stringify(updated));
    };
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="app-layout">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <Typography.Title className="logo-text" level={3}>
                        {collapsed ? "MSR" : "Web App"}
                    </Typography.Title>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[window.route().current()]}
                    items={[
                        {
                            key: "dashboard",
                            icon: <MacCommandOutlined />,
                            label: (
                                <Link href={window.route("dashboard")}>
                                    Dashboard
                                </Link>
                            ),
                        },
                        // {
                        //     key: "employes",
                        //     icon: <UsergroupAddOutlined />,
                        //     label: (
                        //         <Link href={window.route("employes.index")}>
                        //             Employes
                        //         </Link>
                        //     ),
                        // },
                        {
                            key: "group",
                            icon: <GroupOutlined />,
                            label: (
                                <Link href={window.route("group.index")}>
                                    Groups
                                </Link>
                            ),
                        },
                        {
                            key: "members",
                            icon: <UserAddOutlined />,
                            label: (
                                <Link href={window.route("members.index")}>
                                    Members
                                </Link>
                            ),
                        },
                        {
                            key: "payment",
                            icon: <DollarOutlined />,
                            label: (
                                <Link href={window.route("payment.index")}>
                                    Payments
                                </Link>
                            ),
                        },
                        {
                            key: "payout",
                            icon: <FullscreenOutlined />,
                            label: (
                                <Link href={window.route("payout.index")}>
                                    Payouts
                                </Link>
                            ),
                        },
                        {
                            key: "settings",
                            icon: <SettingOutlined />,
                            label: (
                                <Link href={window.route("settings.index")}>
                                    Settings
                                </Link>
                            ),
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        paddingLeft: 20,
                        paddingRight: 20,
                        background: colorBgContainer,
                    }}
                >
                    <Row justify="space-between">
                        <Col>
                            {React.createElement(
                                collapsed
                                    ? MenuUnfoldOutlined
                                    : MenuFoldOutlined,
                                {
                                    className: "trigger",
                                    onClick: () => toggleCollapse(),
                                }
                            )}
                        </Col>
                        <Col>
                            <Dropdown menu={{ items }} trigger={["click"]}>
                                <div>
                                    <Typography.Text className="auth-dropdown">
                                        <Space size={12}>
                                            <Avatar
                                                size={36}
                                                icon={<UserOutlined />}
                                            />
                                            <div>
                                                <div>
                                                    <Typography.Text strong>
                                                        {auth.user.name}
                                                    </Typography.Text>
                                                </div>
                                                <div>{auth.user.email}</div>
                                            </div>
                                            <DownOutlined />
                                        </Space>
                                    </Typography.Text>
                                </div>
                            </Dropdown>
                        </Col>
                    </Row>
                </Header>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
