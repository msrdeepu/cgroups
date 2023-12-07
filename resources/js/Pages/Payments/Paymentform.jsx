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
const { TextArea } = Input;
import { Link, Head } from "@inertiajs/react";

const Paymentform = () => {
    const [form] = Form.useForm();
    return (
        <Form form={form} layout="vertical">
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <Form.Item label="Select Group" name={"groupname"}>
                        {" "}
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
                    <Form.Item label="Select Member" name={"membername"}>
                        {" "}
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
                <Col xs={24} md={8}>
                    <Form.Item label="Select Month" name={"monthname"}>
                        {" "}
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
                <Col xs={24} md={8}>
                    <Form.Item label="Actual Amount" name={"actamount"}>
                        {" "}
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
                <Col xs={24} md={8}>
                    <Form.Item label="Paid Amount" name={"paidamount"}>
                        <Input placeholder="Paid Amount" type="number" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Remaining Amount" name={"remainamount"}>
                        <Input placeholder="Pending Amount" type="number" />
                    </Form.Item>
                </Col>
                
                <Col xs={24} md={8}>
                    <Form.Item label="Received On" name={"receivedon"}>
                        <DatePicker
                            style={{ width: "100%" }}
                            placeholder="receivedon"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Received By" name={"receivedby"}>
                        <Input placeholder="Received By" />
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item label="Remarks" name={"remarks"}>
                        <TextArea rows={4} placeholder="Remarks" />
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
                <Link href={window.route("payment.index")} type="button">
                    <Button type="primary" danger style={{ margin: "6px" }}>
                        Cancel
                    </Button>
                </Link>
            </div>
        </Form>
    );
};

export default Paymentform;
