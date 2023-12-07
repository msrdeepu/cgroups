import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";

import Chitform from "./Chitform";

function CreateChit(props) {
    return (
        <>
            <Head title="Create-group" />

            <Card title={`Create Group`}>
             <Chitform />
            </Card>
        </>
    );
}

CreateChit.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateChit;
