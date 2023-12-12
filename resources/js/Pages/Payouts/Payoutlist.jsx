import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Card, Typography, Button } from "antd";

import { PlusCircleOutlined } from "@ant-design/icons";

function Dashboard(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Manage Payouts`}>
                <Link href={window.route("payout.create")}>
                    <Button icon={<PlusCircleOutlined />} type="primary">
                        Create New Payout
                    </Button>
                </Link>
            </Card>
        </>
    );
}

Dashboard.layout = (page) => <AuthenticatedLayout children={page} />;

export default Dashboard;
