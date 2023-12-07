import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Card, Button, Typography } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

function Memberlist(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Manage Members`}>
                <Link href={window.route("members.create")}>
                    <Button type="primary" icon={<PlusCircleOutlined />}>
                        Add New Member
                    </Button>
                </Link>
            </Card>
        </>
    );
}

Memberlist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Memberlist;
