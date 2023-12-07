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

import { Link, Head } from "@inertiajs/react";

const { TextArea } = Input;

const Chitform = () => {
    const [form] = Form.useForm();
    return (
        <Form form={form} layout="vertical">
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <Form.Item label="Group Name" name={"gpname"}>
                        <Input placeholder="Enter Group Name" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Start Month" name={"stmonth"}>
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: "100%",
                            }}
                            //onChange={handleChange}
                            options={[
                                {
                                    value: "jack",
                                    label: "Jack",
                                },
                                {
                                    value: "lucy",
                                    label: "Lucy",
                                },
                                {
                                    value: "Yiminghe",
                                    label: "yiminghe",
                                },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="End Month" name={"enmonth"}>
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: "100%",
                            }}
                            //onChange={handleChange}
                            options={[
                                {
                                    value: "jack",
                                    label: "Jack",
                                },
                                {
                                    value: "lucy",
                                    label: "Lucy",
                                },
                                {
                                    value: "Yiminghe",
                                    label: "yiminghe",
                                },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Total Group Value" name={"tgpvalue"}>
                        <Input
                            placeholder="Enter Total Group Value"
                            type="number"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Total Members" name={"tmembers"}>
                        <Input placeholder="Total Members" type="number" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Monthly Payable" name={"mpamount"}>
                        <Input
                            placeholder="Enter Monthly Payable"
                            type="number"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Total Installments" name={"tinstalments"}>
                        <Input placeholder="Total Installments" type="number" />
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item label="Other Details" name={"othdetails"}>
                       <TextArea rows={4} placeholder="Other Details" />
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
                    Submit
                </Button>
                <Link href={window.route("settings.index")} type="button">
                    <Button type="primary" danger style={{ margin: "6px" }}>
                        Cancel
                    </Button>
                </Link>
            </div>
        </Form>
    );
};

export default Chitform;
