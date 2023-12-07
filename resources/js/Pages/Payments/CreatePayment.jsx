import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";

import Paymentform from "./Paymentform";

function CreatePayment(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Add New Payment`}>
               <Paymentform />
            </Card>
        </>
    );
}

CreatePayment.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreatePayment;
