import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";

import Paymentform from "./Paymentform";

function CreatePayment({ props, month }) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Add New Payment`}>
                <Paymentform month={month} />
            </Card>
        </>
    );
}

CreatePayment.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreatePayment;
