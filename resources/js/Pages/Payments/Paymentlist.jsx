import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Card, Typography, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
function Paymentlist(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Manage Payments`}>
                <Link href={window.route("payment.create")}>
                    <Button icon={<PlusCircleOutlined />} type="primary">
                        Add New Payment
                    </Button>
                </Link>
            </Card>
        </>
    );
}

Paymentlist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Paymentlist;
