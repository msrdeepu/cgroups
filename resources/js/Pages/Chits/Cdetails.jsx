import { useState, useRef } from "react";
import Highlighter from "react-highlight-words";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Input, Button, Table, Space } from "antd";
import {
    PlusCircleOutlined,
    EditOutlined,
    DeleteOutlined,
    EyeOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import "../../../css/style.css";

function Cdetails({ chitList, record }) {
    return (
        <>
            <Head title="Manage Groups" />
            {/* {console.log(param)} */}
            <Card title={`User Details`} className="tableItem">
                <ul>
                    {chitList.map((item) => (
                        <li key={item.id}>{item.gpname}</li>
                    ))}
                </ul>
            </Card>
        </>
    );
}

Cdetails.layout = (page) => <AuthenticatedLayout children={page} />;

export default Cdetails;
