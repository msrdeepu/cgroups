import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";
import Memberform from "./Memberform";

function CreateMember(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Create Member`}>
                <Memberform />  
            </Card>
        </>
    );
}

CreateMember.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateMember;
