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

import "../../../css/style.css";

function Paymentlist({
    props,
    user,
    month,
    status,
    group,
    member,
    amount,
    record,
    payments,
}) {
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
            filters: payments.map((status) => ({
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
            title: "Member Name",
            dataIndex: "membername",
            filters: payments.map((status) => ({
                text: status.membername,
                value: status.membername,
            })),

            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
        },
        {
            title: "Group",
            dataIndex: "groupname",
            filters: payments.map((item) => ({
                text: item.groupname,
                value: item.groupname,
            })),

            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
        },

        {
            title: "Paid Amount",
            dataIndex: "paidamount",
            filters: payments.map((status) => ({
                text: status.paidamount,
                value: status.paidamount,
            })),

            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
        },
        {
            title: "Received By",
            dataIndex: "receivedby",
            // filters: memberList.map((status) => ({
            //     text: status.reference,
            //     value: status.reference,
            // })),

            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
        },
        {
            title: "Received By",
            dataIndex: "receivedon",
            // filters: memberList.map((status) => ({
            //     text: status.reference,
            //     value: status.reference,
            // })),

            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
        },

        {
            title: "Status",
            dataIndex: "pstatus",
            filters: payments.map((status) => ({
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

            <Card title={`Manage Payments`} className="tableItem">
                <Link href={window.route("payment.create")}>
                    <Button icon={<PlusCircleOutlined />} type="primary">
                        Add New Payment
                    </Button>
                </Link>
                <Table
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
