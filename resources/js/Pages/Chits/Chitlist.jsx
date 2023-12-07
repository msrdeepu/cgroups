import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Card, Typography, Button } from "antd";
import {
    PlusCircleOutlined,
    SearchOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";

function Chitlist(props) {
    return (
        <>
            <Head title="Manage Groups" />

            <Card title={`Manage Groups`}>
                <Link href={window.route("group.create")}>
                    <Button type="primary" icon={<PlusCircleOutlined />}>
                        Create Group
                    </Button>
                </Link>
            </Card>
        </>
    );
}

Chitlist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Chitlist;
