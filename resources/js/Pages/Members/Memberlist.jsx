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

function Memberlist({ props, memberList, record }) {
    //destroy record
    function destroyRecord(e) {
        if (confirm("Are you sure you want to delete this record ?")) {
            router.delete(route("members.destroy", e.currentTarget.id));
        }
    }
    //Loading Edit View
    function editRecord(e) {
        router.get(route("members.edit", e.currentTarget.id));
    }
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            filters: memberList.map((status) => ({
                text: status.id,
                value: status.id,
            })),

            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
        },
        {
            title: "Member",
            dataIndex: "mname",
            filters: memberList.map((status) => ({
                text: status.mname,
                value: status.mname,
            })),

            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
        },
        {
            title: "Group",
            dataIndex: "gname",
            filters: memberList.map((item) => ({
                text: item.gname,
                value: item.gname,
            })),

            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
        },

        {
            title: "Contact No.",
            dataIndex: "contactnum",
            filters: memberList.map((status) => ({
                text: status.contactnum,
                value: status.contactnum,
            })),

            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
        },
        {
            title: "Reference",
            dataIndex: "reference",
            filters: memberList.map((status) => ({
                text: status.reference,
                value: status.reference,
            })),

            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
        },
        {
            title: "Start",
            dataIndex: "sdate",
            filters: memberList.map((status) => ({
                text: status.sdate,
                value: status.sdate,
            })),

            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
        },
        {
            title: "End",
            dataIndex: "edate",
            filters: memberList.map((status) => ({
                text: status.edate,
                value: status.edate,
            })),

            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
        },
        {
            title: "Status",
            dataIndex: "status",
            filters: memberList.map((status) => ({
                text: status.status,
                value: status.status,
            })),

            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
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

            <Card title={`Manage Members`} style={{ overflow: "scroll" }}>
                <Link href={window.route("members.create")}>
                    <Button type="primary" icon={<PlusCircleOutlined />}>
                        Add New Member
                    </Button>
                </Link>
                <Table
                    style={{ marginTop: "10px" }}
                    columns={columns}
                    dataSource={memberList}
                    onChange={onChange}
                />
            </Card>
        </>
    );
}

Memberlist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Memberlist;
