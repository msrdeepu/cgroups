import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";
import PayoutForm from "./PayoutForm";

function Dashboard({ props, month }) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Add New Payout`}>
                <PayoutForm month={month} />
            </Card>
        </>
    );
}

Dashboard.layout = (page) => <AuthenticatedLayout children={page} />;

export default Dashboard;
