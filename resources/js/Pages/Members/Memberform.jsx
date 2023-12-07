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

import {Link,Head} from "@inertiajs/react";

const { TextArea } = Input;
const Memberform = () => {
    const [form] = Form.useForm();
    return (
        <Form form={form} layout="vertical">
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <Form.Item label="Member Name" name={"mname"}>
                        <Input placeholder="Enter Member Name" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Select Group" name={"gname"}>
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
                    <Form.Item label="Contact No:" name={"contactnum"}>
                        <Input
                            placeholder="Enter Contact Number"
                            type="number"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Email ID" name={"email"}>
                        <Input placeholder="Enter Email ID" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Reference" name={"reference"}>
                        <Input placeholder="Enter Reference Name" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        label="Reference Contact"
                        name={"referencecontact"}
                    >
                        <Input
                            placeholder="Enter Reference Contact"
                            type="number"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Group Number" name={"groupnum"}>
                        <Input placeholder="Enter Group Number" type="number" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Group Total Amount"
                        name={"grouptotalvalue"}
                    >
                        <Input placeholder="Enter Group Number" type="number" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Group Monthly Amount"
                        name={"groupmonthlyvalue"}
                    >
                        <Input placeholder="Enter Group Number" type="number" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Start Date" name={"sdate"}>
                        <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="End Date" name={"edate"}>
                        <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item label="Member Address" name={"maddress"}>
                        <TextArea rows={4} placeholder="Member Address" />
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
