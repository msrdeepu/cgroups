import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card, Typography } from "antd";
import Memberform from "./Memberform";

function CreateMember({ props, saveBtn, group, month, status, record }) {
    const { data, setData, post, processing, errors, patch } = useForm({
        mname: record.mname,
        gname: record.gname,
        contactnum: record.contactnum,
        email: record.email,
        payoutexpmonth: record.payoutexpmonth,
        reference: record.reference,
        referencecontact: record.referencecontact,
        groupnum: record.groupnum,
        grouptotalvalue: record.grouptotalvalue,
        groupmonthlyvalue: record.groupmonthlyvalue,
        sdate: record.sdate,
        edate: record.edate,
        tmonths: record.tmonths,
        status: record.status,
        maddress: record.maddress,
        otherdetails: record.otherdetails,
    });

    const submitHandler = () => {
        console.log(data);
        post("/members-store");
    };

    const updateHandler = (values) => {
        patch(`/members/${record.id}`, data);
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
                    month={month}
                    status={status}
                    submitHandler={
                        record.id == undefined ? submitHandler : updateHandler
                    }
                />
            </Card>
        </>
    );
}

CreateMember.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateMember;
