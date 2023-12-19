import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Typography, Button, Table, Space } from "antd";
import {
    PlusCircleOutlined,
    SearchOutlined,
    EditOutlined,
    DeleteOutlined,
    EyeOutlined,
} from "@ant-design/icons";

function Chitlist({ props, chitList }) {
    //destroy record
    function destroyRecord(e) {
        if (confirm("Are you sure you want to delete this record ?")) {
            router.delete(route("group.destroy", e.currentTarget.id));
        }
    }

    //Loading Edit View
    function editRecord(e) {
        router.get(route("group.edit", e.currentTarget.id));
    }
    const columns = [
        {
            title: "Group Name",
            dataIndex: "gpname",
            filters: chitList.map((status) => ({
                text: status.gpname,
                value: status.gpname,
            })),

            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
        },
        {
            title: "Value",
            dataIndex: "tgpvalue",
            filters: chitList.map((status) => ({
                text: status.tgpvalue,
                value: status.tgpvalue,
            })),
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
        },
        {
            title: "Monthly Pay",
            dataIndex: "mpamount",
            filters: chitList.map((status) => ({
                text: status.mpamount,
                value: status.mpamount,
            })),
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
        },
        {
            title: "Start",
            dataIndex: "stmonth",
            filters: chitList.map((status) => ({
                text: status.stmonth,
                value: status.stmonth,
            })),
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
        },
        {
            title: "End",
            dataIndex: "enmonth",
            filters: chitList.map((status) => ({
                text: status.enmonth,
                value: status.enmonth,
            })),
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
        },
        {
            title: "Members",
            dataIndex: "tmembers",
            filters: chitList.map((status) => ({
                text: status.tmembers,
                value: status.tmembers,
            })),
            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
        {
            title: "Installments",
            dataIndex: "tinstalments",
            filters: chitList.map((status) => ({
                text: status.tinstalments,
                value: status.tinstalments,
            })),
            onFilter: (value, record) => record.address.indexOf(value) === 0,
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
            <Head title="Manage Groups" />
            {console.log(chitList)}
            <Card title={`Manage Groups`}>
                <Link href={window.route("group.create")}>
                    <Button type="primary" icon={<PlusCircleOutlined />}>
                        Create Group
                    </Button>
                </Link>
                <Table
                    style={{ marginTop: "10px" }}
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
