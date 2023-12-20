import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card, Typography } from "antd";
import Memberform from "./Memberform";

function CreateMember({ props, saveBtn, group }) {
    const { data, setData, post, processing, errors, patch } = useForm({
        mname: "",
        gname: "",
        contactnum: "",
        email: "",
        payoutexpmonth: "",
        reference: "",
        referencecontact: "",
        groupnum: "",
        grouptotalvalue: "",
        groupmonthlyvalue: "",
        sdate: "",
        edate: "",
        tmonths: "",
        maddress: "",
        otherdetails: "",
    });

    const submitHandler = () => {
        console.log(data);
    };
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Create Member`}>
                <Memberform
                    data={data}
                    setData={setData}
                    saveBtn="Save"
                    group={group}
                    submitHandler={submitHandler}
                />
            </Card>
        </>
    );
}

CreateMember.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateMember;
