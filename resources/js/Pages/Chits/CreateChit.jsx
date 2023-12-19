import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card, Typography } from "antd";

import Chitform from "./Chitform";

function CreateChit({ props, month, saveBtn, record, chitList }) {
    const { data, setData, post, processing, errors, patch } = useForm({
        gpname: record.gpname,
        stmonth: record.stmonth,
        enmonth: record.enmonth,
        tgpvalue: record.tgpvalue,
        tmembers: record.tmembers,
        mpamount: record.mpamount,
        tinstalments: record.tinstalments,
        othdetails: record.othdetails,
    });

    const submitHandler = (e) => {
        // e.preventDefault();
        console.log(data);
        post("/group-store");
    };

    const updateHandler = (values) => {
        patch(`/group/${record.id}`, data);
    };
    return (
        <>
            <Head title="Create-group" />

            <Card title={`Create Group`}>
                <Chitform
                    month={month}
                    data={data}
                    setData={setData}
                    saveBtn={record.id == undefined ? "Add" : "Save"}
                    submitHandler={
                        record.id == undefined ? submitHandler : updateHandler
                    }
                />
            </Card>
        </>
    );
}

CreateChit.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateChit;
