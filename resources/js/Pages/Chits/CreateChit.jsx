import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";

import Chitform from "./Chitform";

function CreateChit({ props, month }) {
    return (
        <>
            <Head title="Create-group" />

            <Card title={`Create Group`}>
                <Chitform month={month} />
            </Card>
        </>
    );
}

CreateChit.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateChit;
