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

// gpname: "",
// stmonth: "",
// enmonth: "",
// tgpvalue: "",
// tmembers: "",
// mpamount: "",
// tinstalments: "",
// othdetails: "",

import { Link, Head } from "@inertiajs/react";

const { TextArea } = Input;

const Chitform = ({ month, saveBtn, data, setData, submitHandler, status }) => {
    const [form] = Form.useForm();

    const selctStartMonthHandler = (value) => {
        setData("stmonth", value);
    };
    const selctEndMonthHandler = (value) => {
        setData("enmonth", value);
    };
    return (
        <Form
            form={form}
            onFinish={submitHandler}
            autoComplete="on"
            layout="vertical"
            initialValues={{
                gpname: data.gpname,
                stmonth: data.stmonth,
                enmonth: data.enmonth,
                tgpvalue: data.tgpvalue,
                tmembers: data.tmembers,
                mpamount: data.mpamount,
                tinstalments: data.tinstalments,
                othdetails: data.othdetails,
            }}
        >
            <Row gutter={[8, 4]}>
                {console.log(data)}
                <Col xs={24} md={12}>
                    <Form.Item label="Group Name" name={"gpname"}>
                        <Input
                            placeholder="Enter Group Name"
                            onChange={(e) => setData("gpname", e.target.value)}
                            value={data.gpname}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Start Month" name={"stmonth"}>
                        <Select
                            placeholder="Please Select Start Month"
                            style={{ width: "100%" }}
                            onChange={selctStartMonthHandler}
                        >
                            {month.map((option, index) => (
                                <Option key={index} value={option.value}>
                                    {option.label}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="End Month" name={"enmonth"}>
                        <Select
                            placeholder="Please Select End Month"
                            style={{ width: "100%" }}
                            onChange={selctEndMonthHandler}
                        >
                            {month.map((option, index) => (
                                <Option key={index} value={option.value}>
                                    {option.label}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Total Group Value" name={"tgpvalue"}>
                        <Input
                            placeholder="Enter Total Group Value"
                            type="number"
                            onChange={(e) =>
                                setData("tgpvalue", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Total Members" name={"tmembers"}>
                        <Input
                            placeholder="Total Members"
                            type="number"
                            onChange={(e) =>
                                setData("tmembers", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Monthly Payable" name={"mpamount"}>
                        <Input
                            placeholder="Enter Monthly Payable"
                            type="number"
                            onChange={(e) =>
                                setData("mpamount", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Total Installments" name={"tinstalments"}>
                        <Input
                            placeholder="Total Installments"
                            type="number"
                            onChange={(e) =>
                                setData("tinstalments", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Status" name={"status"}>
                        <Select
                            placeholder="Select Status"
                            style={{ width: "100%" }}
                            onChange={(value) => setData("status", value)}
                        >
                            {status.map((option, index) => (
                                <Option key={index} value={option.value}>
                                    {option.label}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item label="Other Details" name={"othdetails"}>
                        <TextArea
                            rows={4}
                            placeholder="Other Details"
                            onChange={(e) =>
                                setData("othdetails", e.target.value)
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
                <Link href={window.route("group.index")} type="button">
                    <Button type="primary" danger style={{ margin: "6px" }}>
                        Cancel
                    </Button>
                </Link>
            </div>
        </Form>
    );
};

export default Chitform;
