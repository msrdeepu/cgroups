import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card, Typography } from "antd";

import Settingform from "./Settingform";

function Createsettings(props) {
    const { data, setData, post, processing, errors, patch } = useForm({
        type: "",
        name: "",
        value: "",
        pcode: "",
        dorder: "",
        status: "",
    });

    const submitHandler = (e) => {
      
        console.log(data);
        post("/settings-store");
    };

    return (
        <>
            <Head title="Createsettings" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <Settingform
                    submitHandler={submitHandler}
                    data={data}
                    setData={setData}
                />
            </Card>
        </>
    );
}

Createsettings.layout = (page) => <AuthenticatedLayout children={page} />;

export default Createsettings;
