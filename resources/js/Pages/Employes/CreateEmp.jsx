import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";

//emp-form
import Empform from "./Empform";

function CreateEmp(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
              <Empform />
            </Card>
        </>
    );
}

CreateEmp.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateEmp;
