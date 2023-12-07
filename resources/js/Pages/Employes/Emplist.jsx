import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useRef, useState } from "react";
import { Button, Input, Space, Table, Card, Typography } from "antd";
import { Head , Link, usePage } from "@inertiajs/react";
import Highlighter from 'react-highlight-words';

import {
    SearchOutlined,
    EditOutlined,
    EyeOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";

function Emplist(props) {
    const data = [
        {
            key: "1",
            name: "John Brown",
            age: 32,
            address: "New York No. 1 Lake Park",
        },
        {
            key: "2",
            name: "Joe Black",
            age: 42,
            address: "London No. 1 Lake Park",
        },
        {
            key: "3",
            name: "Jim Green",
            age: 32,
            address: "Sydney No. 1 Lake Park",
        },
        {
            key: "4",
            name: "Jim Red",
            age: 32,
            address: "London No. 2 Lake Park",
        },
    ];
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            close,
        }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(selectedKeys, confirm, dataIndex)
                        }
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() =>
                            clearFilters && handleReset(clearFilters)
                        }
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1677ff" : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: "Emp.ID",
            dataIndex: "empid",
            key: "empid",
            //width: '10%',
            ...getColumnSearchProps("empid"),
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            //width: '30%',
            ...getColumnSearchProps("name"),
        },
        {
            title: "Designation",
            dataIndex: "roll",
            key: "roll",
            //width: '20%',
            ...getColumnSearchProps("roll"),
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
            ...getColumnSearchProps("phone"),
            //sorter: (a, b) => a.address.length - b.address.length,
            //sortDirections: ['descend', 'ascend'],
        },
        {
            title: "Joined On",
            dataIndex: "joinedon",
            key: "joinedon",
            ...getColumnSearchProps("joinedon"),
            //sorter: (a, b) => a.address.length - b.address.length,
            //sortDirections: ['descend', 'ascend'],
        },
        {
            title: "Relieved On",
            dataIndex: "relivedon",
            key: "relivedon",
            ...getColumnSearchProps("relivedon"),
            //sorter: (a, b) => a.address.length - b.address.length,
            //sortDirections: ['descend', 'ascend'],
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (_, record) => (
                <Space size="small">
                    <Button
                        style={{ margin: "5px", color: "purple" }}
                        shape="circle"
                        //id={record.id}
                        //onClick={editRecord}
                        icon={<EditOutlined />}
                    />
                    <Button
                        style={{ margin: "5px", color: "orange" }}
                        shape="circle"
                        //id={record.id}
                        icon={<EyeOutlined />}
                        //onClick={destroyRecord}
                    />
                </Space>
            ),
        },
    ];
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <div>
                  <Link href={window.route("employes.create")}>
                    <Button icon={<PlusCircleOutlined />} type="primary">
                        Create Employe
                    </Button>
                    </Link>
                </div>

                <Table columns={columns} dataSource={data} />
            </Card>
        </>
    );
}

Emplist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Emplist;
