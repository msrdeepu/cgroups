import { useState, useRef } from "react";
import Highlighter from "react-highlight-words";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Input, Button, Table, Space } from "antd";
import {
    PlusCircleOutlined,
    EditOutlined,
    DeleteOutlined,
    EyeOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import "../../../css/style.css";

function Chitlist({ props, chitList }) {
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
            router.delete(route("group.destroy", e.currentTarget.id));
        }
    }
    function detailsHandler(e) {
        router.get(route("group.show", e.currentTarget.id));
    }

    //Loading Edit View
    function editRecord(e) {
        router.get(route("group.edit", e.currentTarget.id));
    }
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            ...getColumnSearchProps("id"),
        },
        {
            title: "Group Name",
            dataIndex: "gpname",
            ...getColumnSearchProps("gname"),
        },

        {
            title: "Value",
            dataIndex: "tgpvalue",
            ...getColumnSearchProps("tgpvalue"),
        },
        // {
        //     title: "Monthly Pay",
        //     dataIndex: "mpamount",
        //     filters: chitList.map((status) => ({
        //         text: status.mpamount,
        //         value: status.mpamount,
        //     })),
        //     // specify the condition of filtering result
        //     // here is that finding the name started with `value`
        //     onFilter: (value, record) => record.name.indexOf(value) === 0,
        //     sorter: (a, b) => a.name.length - b.name.length,
        //     sortDirections: ["descend"],
        // },
        {
            title: "Start",
            dataIndex: "stmonth",
            ...getColumnSearchProps("stmonth"),
        },
        {
            title: "End",
            dataIndex: "enmonth",
            ...getColumnSearchProps("enmonth"),
        },
        {
            title: "Members",
            dataIndex: "tmembers",
            ...getColumnSearchProps("tmembers"),
        },
        {
            title: "Installments",
            dataIndex: "tinstalments",
            ...getColumnSearchProps("tinstalments"),
        },
        {
            title: "Status",
            dataIndex: "status",
            ...getColumnSearchProps("status"),
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (_, record) => (
                <Space>
                    <Button shape="circle" id={record.id} onClick={editRecord}>
                        {<EditOutlined />}
                    </Button>
                    <Button
                        onClick={detailsHandler}
                        id={record.id}
                        shape="circle"
                    >
                        {<EyeOutlined />}
                    </Button>
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
            <Head title="Manage Groups" />
            {console.log(chitList)}
            <Card title={`Manage Groups`} className="tableItem">
                <Link href={window.route("group.create")}>
                    <Button type="primary" icon={<PlusCircleOutlined />}>
                        Create Group
                    </Button>
                </Link>
                <Table
                    className="tableTopMargin"
                    columns={columns}
                    dataSource={chitList}
                    onChange={onChange}
                />
            </Card>
        </>
    );
}

Chitlist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Chitlist;
