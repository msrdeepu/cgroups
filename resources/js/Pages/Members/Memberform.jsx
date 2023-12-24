import React from "react";
import {
    Card,
    Typography,
    Col,
    Row,
    Form,
    Input,
    Select,
    Button,
    DatePicker,
} from "antd";

// mname
// gname
// contactnum
// email
// payoutexpmonth
// reference
// referencecontact
// groupnum
// grouptotalvalue
// groupmonthlyvalue
// sdate
// edate
// tmonths
// maddress
// otherdetails

import { Link, Head } from "@inertiajs/react";

const { TextArea } = Input;
const Memberform = ({
    data,
    setData,
    saveBtn,
    submitHandler,
    group,
    month,
    status,
}) => {
    const [form] = Form.useForm();

    const groupSelectHandler = (value) => {
        setData("gname", value);
    };

    const payoutMonthHandler = (value) => {
        setData("payoutexpmonth", value);
    };

    const dateFormat = "YYYY-MM-DD";
    const handleStartDateChange = (value) => {
        setData("sdate", `${value.format(dateFormat)}`);
        //console.log(value);
    };
    const handleEndDateChange = (value) => {
        setData("edate", `${value.format(dateFormat)}`);
        //console.log(value);
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={submitHandler}
            autoComplete="on"
            initialValues={{
                mname: data.mname,
                gname: data.gname,
                contactnum: data.contactnum,
                email: data.email,
                payoutexpmonth: data.payoutexpmonth,
                reference: data.reference,
                referencecontact: data.referencecontact,
                groupnum: data.groupnum,
                grouptotalvalue: data.grouptotalvalue,
                groupmonthlyvalue: data.groupmonthlyvalue,
                sdate: data.sdate,
                edate: data.edate,
                tmonths: data.tmonths,
                status: data.status,
                maddress: data.maddress,
                otherdetails: data.otherdetails,
            }}
        >
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <Form.Item label="Member Name" name={"mname"}>
                        <Input
                            placeholder="Enter Member Name"
                            value={data.mname}
                            onChange={(e) => setData("mname", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Select Group" name={"gname"}>
                        <Select
                            placeholder="Select Group"
                            style={{ width: "100%" }}
                            value={data.gname}
                            onChange={groupSelectHandler}
                        >
                            {group.map((option, index) => (
                                <Option key={index} value={option.label}>
                                    {option.label}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Contact No:" name={"contactnum"}>
                        <Input
                            value={data.contactnum}
                            onChange={(e) =>
                                setData("contactnum", e.target.value)
                            }
                            placeholder="Enter Contact Number"
                            type="number"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Email ID" name={"email"}>
                        <Input
                            value={data.email}
                            placeholder="Enter Email ID"
                            onChange={(e) => setData("email", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Payout Expected Month"
                        name={"payoutexpmonth"}
                    >
                        <Select
                            placeholder="Select Month"
                            style={{ width: "100%" }}
                            value={data.payoutexpmonth}
                            onChange={payoutMonthHandler}
                        >
                            {month.map((option, index) => (
                                <Option key={index} value={option.label}>
                                    {option.label}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Reference" name={"reference"}>
                        <Input
                            value={data.reference}
                            placeholder="Enter Reference Name"
                            onChange={(e) =>
                                setData("reference", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Reference Contact"
                        name={"referencecontact"}
                    >
                        <Input
                            value={data.referencecontact}
                            placeholder="Enter Reference Contact"
                            type="number"
                            onChange={(e) =>
                                setData("referencecontact", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Group Number" name={"groupnum"}>
                        <Input
                            value={data.groupnum}
                            placeholder="Enter Group Number"
                            type="number"
                            onChange={(e) =>
                                setData("groupnum", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Group Total Amount"
                        name={"grouptotalvalue"}
                    >
                        <Input
                            value={data.grouptotalvalue}
                            placeholder="Enter Group Number"
                            type="number"
                            onChange={(e) =>
                                setData("grouptotalvalue", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Group Monthly Amount"
                        name={"groupmonthlyvalue"}
                    >
                        <Input
                            placeholder="Enter Group Number"
                            type="number"
                            value={data.groupmonthlyvalue}
                            onChange={(e) =>
                                setData("groupmonthlyvalue", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Start Date" name={"sdate"}>
                        <input
                            type="date"
                            // format={dateFormat}
                            style={{ width: "100%" }}
                            value={data.sdate}
                            onChange={(e) => setData("sdate", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="End Date" name={"edate"}>
                        <input
                            type="date"
                            style={{ width: "100%" }}
                            // format={dateFormat}
                            value={data.edate}
                            onChange={(e) => setData("edate", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Total Months" name={"tmonths"}>
                        <Input
                            type="number"
                            placeholder="Total Months"
                            value={data.tmonths}
                            onChange={(e) => setData("tmonths", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Member Status" name={"status"}>
                        <Select
                            placeholder="Select Status"
                            style={{ width: "100%" }}
                            value={data.status}
                            onChange={(value) => setData("status", value)}
                        >
                            {status.map((option, index) => (
                                <Option key={index} value={option.label}>
                                    {option.label}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item label="Member Address" name={"maddress"}>
                        <TextArea
                            rows={4}
                            placeholder="Member Address"
                            value={data.maddress}
                            onChange={(e) =>
                                setData("maddress", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item label="Other Details" name={"otherdetails"}>
                        <TextArea
                            rows={4}
                            placeholder="Other Details"
                            value={data.otherdetails}
                            onChange={(e) =>
                                setData("otherdetails", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
            </Row>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <Button
                    htmlType="submit"
                    type="primary"
                    style={{ margin: "6px" }}
                >
                    {saveBtn}
                </Button>
                <Link href={window.route("members.index")} type="button">
                    <Button type="primary" danger style={{ margin: "6px" }}>
                        Cancel
                    </Button>
                </Link>
            </div>
        </Form>
    );
};

export default Memberform;
