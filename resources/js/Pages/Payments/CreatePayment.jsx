import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card, Typography } from "antd";

import Paymentform from "./Paymentform";

function CreatePayment({ props, month, member, group, status, amount }) {
    const { data, setData, post, processing, errors, patch } = useForm({
        groupname: "",
        month: "",
        member: "",
        phone: "",
        email: "",
        paidon: "",
        actamount: "",
        paidamount: "",
        balance: "",
        otherdetails: "",
    });
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
                />
            </Card>
        </>
    );
}

CreatePayment.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreatePayment;
