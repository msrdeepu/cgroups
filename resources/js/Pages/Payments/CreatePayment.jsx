import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card, Typography } from "antd";

import Paymentform from "./Paymentform";

function CreatePayment({
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
    const { data, setData, post, processing, errors, patch } = useForm({
        groupname: record.groupname,
        monthname: record.monthname,
        membername: record.membername,
        receivedon: record.receivedon,
        actamount: record.actamount,
        paidamount: record.paidamount,
        remainamount: record.remainamount,
        receivedby: record.receivedby,
        pstatus: record.pstatus,
        remarks: record.remarks,
    });

    const submitHandler = () => {
        console.log(data);
        post("/payment-store");
    };

    const updateHandler = (values) => {
        patch(`/payment/${record.id}`, data);
    };
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Add New Payment`}>
                <Paymentform
                    month={month}
                    member={member}
                    status={status}
                    group={group}
                    data={data}
                    amount={amount}
                    setData={setData}
                    saveBtn={record.id == undefined ? "Add" : "Update"}
                    submitHandler={
                        record.id == undefined ? submitHandler : updateHandler
                    }
                />
            </Card>
        </>
    );
}

CreatePayment.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreatePayment;
