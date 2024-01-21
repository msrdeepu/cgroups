import { useState, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Input, Button, Table, Space } from "antd";
import Highlighter from "react-highlight-words";
import {
    PlusCircleOutlined,
    SearchOutlined,
    EditOutlined,
    DeleteOutlined,
    EyeOutlined,
} from "@ant-design/icons";

import "../../../css/style.css";

function Paymentlist({ payments }) {
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
    //destroy record
    function destroyRecord(e) {
        if (confirm("Are you sure you want to delete this record ?")) {
            router.delete(route("payment.destroy", e.currentTarget.id));
        }
    }
    //Loading Edit View
    function editRecord(e) {
        router.get(route("payment.edit", e.currentTarget.id));
    }
    {
        console.log(payments);
    }
    {
        console.log(payments);
    }
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            ...getColumnSearchProps("id"),
        },
        {
            title: "Member Name",
            dataIndex: "membername",
            ...getColumnSearchProps("membername"),
        },
        {
            title: "Group",
            dataIndex: "groupname",
            ...getColumnSearchProps("groupname"),
        },

        {
            title: "Paid Amount",
            dataIndex: "paidamount",
            ...getColumnSearchProps("paidamount"),
        },
        {
            title: "Received By",
            dataIndex: "receivedby",
            ...getColumnSearchProps("receivedby"),
        },
        {
            title: "Received By",
            dataIndex: "receivedon",
            ...getColumnSearchProps("receivedon"),
        },

        {
            title: "Status",
            dataIndex: "pstatus",
            ...getColumnSearchProps("pstatus"),
        },

        {
            title: "Actions",
            dataIndex: "actions",
            render: (_, record) => (
                <Space>
                    <Button shape="circle" id={record.id} onClick={editRecord}>
                        {<EditOutlined />}
                    </Button>
                    <Button>{<EyeOutlined />}</Button>
                    <Button
                        shape="circle"
                        danger
                        onClick={destroyRecord}
                        id={record.id}
                    >
                        {<DeleteOutlined />}
                    </Button>
                </Space>
            ),
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log("params", pagination, filters, sorter, extra);
    };
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Manage Payments`} className="tableItem">
                <Link href={window.route("payment.create")}>
                    <Button icon={<PlusCircleOutlined />} type="primary">
                        Add New Payment
                    </Button>
                </Link>
                <Table
                    className="tableTopMargin"
                    columns={columns}
                    dataSource={payments}
                    onChange={onChange}
                />
            </Card>
        </>
    );
}

Paymentlist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Paymentlist;
