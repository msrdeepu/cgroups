import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card, Typography } from "antd";
import PayoutForm from "./PayoutForm";

function Dashboard({ props, month, status, group, member, amount, record }) {
    const { data, setData, post, processing, errors, patch } = useForm({
        group: record.group,
        month: record.month,
        member: record.member,
        phone: record.phone,
        email: record.email,
        paidon: record.paidon,
        amtopay: record.amtopay,
        paidamount: record.paidamount,
        remaining: record.remaining,
        status: record.status,
        otherdetails: record.otherdetails,
    });

    const submitHandler = () => {
        console.log(data);
        post("/payout-store");
    };

    const updateHandler = (values) => {
        patch(`/payout/${record.id}`, data);
    };

    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Add New Payout`}>
                <PayoutForm
                    data={data}
                    setData={setData}
                    month={month}
                    status={status}
                    group={group}
                    member={member}
                    amount={amount}
                    saveBtn={record.id == undefined ? "Add" : "Update"}
                    submitHandler={
                        record.id == undefined ? submitHandler : updateHandler
                    }
                />
            </Card>
        </>
    );
}

Dashboard.layout = (page) => <AuthenticatedLayout children={page} />;

export default Dashboard;
